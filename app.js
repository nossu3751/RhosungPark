const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get("/", (req, res) => {
    res.render("homepage")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/work", (req, res) => {
    res.render("work")
});

app.listen(8888, () => {
    console.log("Rhosung Park's website is currently running on port 8888.")
});