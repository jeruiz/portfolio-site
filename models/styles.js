const Styles = (connection, Sequelize) => {
  return connection.define('styles', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    type: { type: Sequelize.STRING, allowNull: false },
  })
}

module.exports = Styles
