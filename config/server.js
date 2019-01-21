const express = require('express'), 
      consign = require('consign'),
      bodyParser = require('body-parser'),
      expressValidator = require('express-validator');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign({ cwd:  'api' })
    .include('routes')
    .then('controllers')
    .into(app);

module.exports = app; 