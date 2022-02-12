// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

// require database configuration
require('../db/index');

const drones=[{
    name:'Turbo',
    propellers:5,
    maxSpeed:15
},{
    name:'PumaTop',
    propellers:6,
    maxSpeed:18
},{
    name:'Pitumax',
    propellers:4,
    maxSpeed:5
}]

Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books: ${err}`));
