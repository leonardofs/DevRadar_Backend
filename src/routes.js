const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');
const routes = Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

routes.get('/devs', DevController.index); 
routes.post('/devs', DevController.store);  

routes.get('/search', SearchController.index); 
module.exports = routes;