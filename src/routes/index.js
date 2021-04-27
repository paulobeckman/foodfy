const express = require('express')
const routes = express.Router()

const Home = require('../app/controllers/HomeController')
const Recipes = require('../app/controllers/RecipesController')
const Bosses = require('../app/controllers/BossesController')

routes.get('/', Home.index)
routes.get('/about', function(req, res){
    return res.render("site/about/index")
})
routes.get('/recipes', Recipes.index)
routes.get('/bosses', Bosses.index)

module.exports = routes