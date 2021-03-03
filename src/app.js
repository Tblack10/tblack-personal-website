const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//handlebars initialization
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//static directory init
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Travis Black',
        name: 'Travis Black'
    })
})

app.get('/resume', (req, res) => {
    res.render('resume', {
        title: 'Resume',
        name: 'Travis Black',
        resumeMessage: 'This is my resume'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Travis Black',
    })
})

app.get('/privacyPolicy', (req, res) => {
    res.render('privacyPolicy', {
        title: 'Privacy Policy',
        name: 'Travis Black'
    })
})

app.get('/applications', (req, res) => {
    res.render('applications', {
        title: 'My Apps',
        name: 'Travis Black'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me',
        name: 'Travis Black'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000')
})