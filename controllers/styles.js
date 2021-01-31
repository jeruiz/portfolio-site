const models = require('../models')

const getAllStyles = async (request, response) => {
  const styles = await models.Styles.findAll()

  return response.send(styles)
}

const getStyleById = async (request, response) => {
  const { id } = request.params

  const style = await models.Styles.findOne({
    where: { id },
    include: [
      {
        model: models.Beers,
        include: [{ model: models.Breweries }],
      },
    ],
  })

  return style ? response.send(style) : response.sendStatus(404)
}

module.exports = { getAllStyles, getStyleById }
