const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
  secret: 'apoorlykeptsecret',
  cookie: {
    maxage: 24 * 60 * 60 * 1000 // expires in one day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes here
// app.use('/', htmlRoutes) 

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  });