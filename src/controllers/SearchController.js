const Dev= require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports= {
    async index(request,response){
        const {latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        console.log(request.query);
        console.log(parseFloat(longitude), parseFloat(latitude));

        const devs = await Dev.find({
             techs: {
                 $in: techsArray,
             }, 
             location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [ parseFloat(longitude), parseFloat(latitude)],
                    },
                    $maxDistance: 10000, // distancia em metros
                },
             }, 
        });

    return response.json({devs });

    }
} 