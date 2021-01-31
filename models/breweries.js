const Breweries = (connection, Sequelize) => {
  return connection.define('breweries', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, allowNull: false },
  })
}

module.exports = Breweries
