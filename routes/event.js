const express = require("express");
const router = express.Router();
const { readEvents, writeEvents } = require("../utils/jsonDb");
const { v4: uuidv4 } = require("uuid");

router.get("/new", (req, res) => {
  res.render("events/new", { event: {} });
});

router.get("/edit/:id", (req, res) => {
  const events = readEvents();
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.redirect("/");
  res.render("events/edit", { event });
});

router.get("/:id", (req, res) => {
  const events = readEvents();
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.redirect("/");
  res.render("events/show", { event });
});

router.post("/", (req, res) => {
  const events = readEvents();
  const newEvent = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    createdAt: new Date(),
  };
  events.push(newEvent);
  writeEvents(events);
  req.flash("success_msg", "Event created successfully!");
  res.redirect(`/events/${newEvent.id}`);
  // res.redirect("/");
});

router.put("/:id", (req, res) => {
  const events = readEvents();
  const index = events.findIndex((e) => e.id === req.params.id);
  if (index === -1) return res.redirect("/");
  events[index] = {
    ...events[index],
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  };
  writeEvents(events);
  req.flash("success_msg", "Event Edited successfully!");
  res.redirect(`/events/${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  let events = readEvents();
  events = events.filter((e) => e.id !== req.params.id);
  writeEvents(events);

  req.flash("success_msg", "🗑️ Event deleted successfully!");
  res.redirect("/");
});

module.exports = router;
