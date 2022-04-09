const validator = (track) => {
  const errors = {};
  if (!track.event) errors.event = "event hasn't to be an empty";
  if (!(typeof track.event === "string"))
    errors.event = "event has to to be a string type";
  if (!track.url) errors.url = "url hasn't to be an empty";
  if (!(typeof track.url === "string"))
    errors.url = "url has to to be a string type";
  if (!track.title) errors.title = "title hasn't to be an empty";
  if (!(typeof track.title === "string"))
    errors.title = "title has to to be a string type";
  if (!track.ts) errors.ts = "time zone hasn't to be an empty";
  if (!(typeof track.ts === "string"))
    errors.ts = "time zone has to to be a string type";
  if (track.tags && !Array.isArray(track.tags))
    errors.tags = "tags has to be an array";
  return errors;
};

module.exports = validator;
