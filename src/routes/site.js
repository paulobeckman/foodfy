const express = require('express')
const routes = express.Router()

const Home = require('../app/controllers/HomeController')
const Recipes = require('../app/controllers/RecipesController')
const Chefs = require('../app/controllers/ChefsController')

routes.get('/', Home.index)
routes.get('/about', function(req, res){
    return res.render("site/about/index")
})
routes.get('/recipes', Recipes.index)
routes.get('/chefs', Chefs.index)

module.exports = routes