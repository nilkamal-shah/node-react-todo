const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', express.static(__dirname + "/client/build"))

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString())

setupController(app);
apiController(app);
app.listen(PORT);