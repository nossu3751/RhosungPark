const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.render("homepage.ejs")
});
app.listen(8888, () => {
    console.log("Rhosung Park's website is currently running on port 8888.")
});