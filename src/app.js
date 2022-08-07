const path = require('path');
const express = require('express');
const  hbs = require('hbs');

const app = express();

// Paths 
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials'); 

// Definición del Path
app.use(express.static(publicDirectoryPath))

// Handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Routes
app.get("", (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Kiancis'
    });
});

app.get("/about", (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Kiancis'
    });
});

app.get("/help", (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Kiancis'
    });
});

app.get("/test", (req, res) => {
    console.log(req.query);
});

app.get("*", (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log('Server corriendo http://localhost:3000');
});
