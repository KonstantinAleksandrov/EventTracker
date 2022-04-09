const path = require("path");
const fs = require("fs");
const _eval = require("eval");
const trackValidator = require("./trackValidator");

const js = fs.readFileSync(path.resolve(__dirname, "./tracker.js")).toString();

describe("Tracker test", () => {
  const window = {
    location: { href: "testing" },
    addEventListener: () => null,
  };
  const document = { title: "testing" };
  const tagList = ["one", "two", "three"];

  it("should be has the same model", () => {
    const { tracker } = _eval(js, "name", { window, document }, true);
    tracker.track("event", ...tagList);

    expect(tracker.buffer[0].title).toEqual(document.title);
    expect(tracker.buffer[0].url).toEqual(window.location.href);
    expect(tracker.buffer[0].tags).toEqual(tagList);
  });

  it("should be called many times", () => {
    const { tracker } = _eval(js, "name", { window, document }, true);
    const counter = 2;
    for (let i = 0; i < counter; i++) {
      tracker.track("event", ...tagList);
    }

    expect(tracker.buffer.length).toEqual(counter);
  });

  it("should be packed to different arrays", () => {
    const { tracker } = _eval(js, "name", { window, document }, true);

    tracker.track("event", ...tagList);
    tracker.track("event", ...tagList);
    expect(tracker.buffer.length).toEqual(2);
    tracker.track("event", ...tagList);
    expect(tracker.buffer.length).toEqual(0);
    tracker.track("event", ...tagList);
    expect(tracker.buffer.length).toEqual(1);
    tracker.track("event", ...tagList);
    tracker.track("event", ...tagList);
    expect(tracker.buffer.length).toEqual(0);
    tracker.track("event", ...tagList);
    tracker.track("event", ...tagList);

    setTimeout(() => {
      expect(tracker.buffer.length).toEqual(0);
    }, 1000);
  });

  it("should be get an errors", () => {
    const { tracker } = _eval(js, "name", { window, document }, true);
    tracker.track("", ...tagList);
    const errors1 = trackValidator(tracker.buffer[0]);
    expect(errors1.event).toEqual("event hasn't to be an empty");

    tracker.track(255, ...tagList);
    const errors2 = trackValidator(tracker.buffer[1]);
    expect(errors2.event).toEqual("event has to to be a string type");
  });
});
