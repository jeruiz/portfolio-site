const express = require('express')
const { getAllBreweries, getBreweryById } = require('./controllers/breweries')
const { getAllStyles, getStyleById } = require('./controllers/styles')
const { getAllBeers, getBeerById } = require('./controllers/beers')

const app = express()

app.get('/breweries', getAllBreweries)
app.get('/breweries/:id', getBreweryById)

app.get('/styles', getAllStyles)
app.get('/styles/:id', getStyleById)

app.get('/beers', getAllBeers)
app.get('/beers/:id', getBeerById)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
