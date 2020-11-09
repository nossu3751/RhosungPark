const express = require("express");
const path = require('path');
const nodemailer = require('nodemailer');

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

const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'f6f6187017979e',
        pass: '859ecb4adc5c2d'
    }
});

// const transport = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'rhosungpark@gmail.com'
//     }
// });

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

app.listen(8888, () => {
    console.log("Rhosung Park's website is currently running on port 8888.")
});