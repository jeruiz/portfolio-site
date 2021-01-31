const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const BreweriesModel = require('./breweries')
const StylesModel = require('./styles')
const BeersModel = require('./beers')
const BeersStylesModel = require('./beersStyles')

const environment = process.env.NODE_ENV || 'development'

const {
  username, password, database, host, dialect
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host,
  dialect,
})

const Breweries = BreweriesModel(connection, Sequelize)
const Styles = StylesModel(connection, Sequelize)
const Beers = BeersModel(connection, Sequelize, Breweries)
const BeersStyles = BeersStylesModel(connection, Sequelize, Styles, Beers)

Beers.belongsTo(Breweries)
Breweries.hasMany(Beers)

Beers.belongsToMany(Styles, { through: BeersStyles })
Styles.belongsToMany(Beers, { through: BeersStyles })

module.exports = {
  Breweries,
  Styles,
  Beers,
  BeersStyles,
}
