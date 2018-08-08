const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');

const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));

//Here there be middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cookie-parser')());

app.use(routes);

app.listen(PORT,function(){
    console.log('API server is now listening on PORT ${PORT}');
});

