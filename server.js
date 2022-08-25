const express = require('express');
const app = express();
const port = 3001;

const sequelize = require('./config/connection');

const User = require('./models/User');
const Workout = require('./models/Workout');

app.get('/', function(req, res) {
  res.get('')
});

sequelize.sync({ force: true }).then (() => {
  app.listen(port, () => console.log('Now listening'));
});