class Tracker {
  static trackEndpoint = 'http://localhost:8001/track'
  static trackMaxSize = 3
  static trackInterval = 1000

  constructor() {
    this.buffer = []

    window.addEventListener('unload', () => {
      this.track("close-page")
      this.#sendToStorage()
    }, false)
  }

  track() {
    const [event, ...rest] = arguments
    const point = {
      event,
      tags: rest,
      url: window.location.href,
      title: document.title,
      ts: this.#getLocalTime()
    }
    this.buffer = [...this.buffer, point]
    this.#requirementSend(Tracker.trackInterval)(Tracker.trackMaxSize)
  }

  #getLocalTime() {
    const date = new Date()
    const offset = date.getTimezoneOffset()
    const localTime = (offset < 0 ? "+" : "-") + this.#leftPad(Math.floor(Math.abs(offset / 60)), 2) + ":" + this.#leftPad((Math.abs(offset % 60)), 2)
    return date.toISOString().slice(0, -1) + localTime
  }

  #leftPad(time, size) {
    let s = String(time)
    while (s.length < (size || 2)) {
      s = "0" + s
    }
    return s
  }

  #sendToStorage() {
    let restoredBuffer = this.buffer
    try {
      navigator.sendBeacon(Tracker.trackEndpoint, JSON.stringify(this.buffer))
      this.buffer = []
    } catch(err){
      this.buffer = restoredBuffer
      try {
        if(process.env) this.buffer = []
      } catch {}
    }
  }

  #requirementSend(timer) {
    return this.#eventBalancer(this.#sendToStorage, timer)
  }

  #eventBalancer(callback, time) {
    let interval
    return (counter) => {
      if (this.buffer.length >= counter) {
        callback.apply(this)
      } else {
        clearTimeout(interval)
        interval = setTimeout(() => {
          interval = null
          if(this.buffer.length) callback.apply(this)
        }, time)
      }
    }
  }
}

const tracker = new Tracker()

try {
  if(exports) exports.tracker = new Tracker()
} catch {}

