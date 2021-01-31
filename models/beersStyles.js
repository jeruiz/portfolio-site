const BeersStyles = (connection, Sequelize, Styles, Beers) => {
  return connection.define('beersStyles', {
    genreId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      reference: { model: Styles, key: 'id' },
    },
    beerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      reference: { model: Beers, key: 'id' },
    },
  })
}

module.exports = BeersStyles
