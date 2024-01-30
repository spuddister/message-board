const express = require("express");
const router = express.Router();
const messages = [
  {
    text: "First",
    user: "Steve",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "David",
    added: new Date().toLocaleString(),
  },
  {
    text: "Nice message board!",
    user: "Patricia",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = router;
