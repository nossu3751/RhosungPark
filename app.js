const express = require("express");
const path = require('path');
const nodemailer = require('nodemailer');
const favicon = require('serve-favicon');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, 'public', 'assets', 'images', 'rho_favicon.ico')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.render("homepage")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/work", (req, res) => {
    res.render("work")
});

app.post('/', (req, res) => {

    console.log(req);
    const content = `
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Message: ${req.body.comment}</li>
        </ul>
    `;
    const message = {
        from: `nodemailer contact ${req.body.email}`, // Sender address
        to: 'rhosungpark@gmail.com',         // List of recipients
        subject: 'Email via Rhosung Park Website Contact Form', // Subject line
        html: content // Plain text body
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
});

app.listen((process.env.PORT || 8888), () => {
    console.log("Rhosung Park's website is currently running on port 8888.")
});