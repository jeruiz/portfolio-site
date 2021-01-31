const Beers = (connection, Sequelize, Breweries) => {
  return connection.define('beers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    breweryId: {
      type: Sequelize.INTEGER,
      reference: { model: Breweries, key: 'id' },
    },
  })
}

module.exports = Beers
