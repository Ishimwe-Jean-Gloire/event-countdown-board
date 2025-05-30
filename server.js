const express = require("express");
const session = require('express-session');
const flash = require('connect-flash');
require("dotenv").config();
const eventRouter = require("./routes/event");
const methodOverride = require("method-override");
const path = require("path");
const { readEvents } = require("./utils/jsonDb"); 



const app = express();

app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});


// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res) => {
  const events = readEvents().sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  res.render("events/index", { events });
});


app.use("/events", eventRouter);


app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
