const models = require('../models')

const getAllBeers = async (request, response) => {
  const beers = await models.Beers.findAll({
    include: [{ model: models.Breweries }, { model: models.Styles }],
  })

  return response.send(beers)
}

const getBeerById = async (request, response) => {
  const { id } = request.params

  const beer = await models.Beers.findOne({
    where: { id },
    include: [{ model: models.Breweries }, { model: models.Styles }],
  })

  return beer ? response.send(beer) : response.sendStatus(404)
}

module.exports = { getAllBeers, getBeerById }
