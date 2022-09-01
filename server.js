//importing required modules for server.js file, ie: express
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controller');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
require('dotenv').config();


//sets up my server object
const app = express();
const PORT = 3001;


//setting up handlebars
app.set('view engine', 'handlebars');

//const hbs = exphbs.create({ helpers });

// setting up sessions
const sess = {
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: 86400,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess)); 
// middleware designates any requests from the public folder to be returned 
app.use(express.static('public'));
// middleware that includes handling that will convert your json data into and object
app.use(express.json());
// middleware that parses out url information (how forms submit there data)
app.use(express.urlencoded())

// setting up handlebars as the default engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//importing models to sync with database
const User = require('./models/User');
const { strict } = require('assert');

app.use(routes);

//turns on our app and sends our optional confirmation out after we use sequelize.sync to sync our database
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
