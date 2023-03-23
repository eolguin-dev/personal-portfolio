const express = require('express');
const router = express.Router();

// Create new routes for the web app

router.get('/', (req, res) => {
    res.render('index.html', {title: '</EO>'});
});

router.get('/about', (req, res) => {
    res.render('about.html', {title: 'About page'});
});

router.get('/projects', (req, res) => {
    res.render('projects.html', {title: 'Projects page'});
});

router.get('/services', (req, res) => {
    res.render('services.html', {title: 'Services page'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact page'});
});

module.exports = router;