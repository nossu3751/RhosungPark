const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("homepage")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.listen(8888, () => {
    console.log("Rhosung Park's website is currently running on port 8888.")
});