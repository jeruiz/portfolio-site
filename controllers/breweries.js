const models = require('../models')

const getAllBreweries = async (request, response) => {
  const breweries = await models.Breweries.findAll()

  return response.send(breweries)
}

const getBreweryById = async (request, response) => {
  const { id } = request.params

  const brewery = await models.Breweries.findOne({
    where: { id },
    include: [
      {
        model: models.Beers,
        include: [{ model: models.Styles }],
      },
    ],
  })

  return brewery ? response.send(brewery) : response.sendStatus(404)
}

module.exports = { getAllBreweries, getBreweryById }
