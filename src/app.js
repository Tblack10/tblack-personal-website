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


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Travis Black',
        name: 'Travis Black',
        subtitle: 'Software Developer'
    })
})

app.get('/privacyPolicy', (req, res) => {
    res.render('privacyPolicy', {
        title: 'Travis Black',
        name: 'Travis Black',
        subtitle: 'Privacy Policy'
    })
})

app.get('/applications', (req, res) => {
    res.render('applications', {
        title: 'Travis Black',
        name: 'Travis Black',
        subtitle: 'My Apps'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Travis Black',
        name: 'Travis Black',
        email: 'travisb.dev@gmail.com',
        github: 'https://github.com/Tblack10',
        linkedin: 'https://www.linkedin.com/in/travis--black/',
        appStore: 'https://apps.apple.com/ca/developer/travis-black/id1445267343',
        subtitle: 'Contact Me'
    })
})

app.get('/applications/elementaryTicTacToe', (req, res) => {
    res.render('elementaryTicTacToe', {
        name: 'Travis Black'
    })
})

app.get('/applications/artHaikuVancouver', (req, res) => {
    res.render('artHaiku', {
        name: 'Travis Black'
    })
})

app.get('/applications/propdrop', (req, res) => {
    res.render('propDrop', {
        name: 'Travis Black'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000')
})
