const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/events.json");

function readEvents() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeEvents(events) {
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}

module.exports = { readEvents, writeEvents };
