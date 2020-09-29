let express = require ("express");
let app = express();
let exphbs = require("express-handlebars");

const popup = require("./popup");
const bodyParser = require('body-parser');

popup = popup();

const handlebarSetup = exphbs({
    defaultLayout: 'main'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public')); //enable the css

app.get('./',function(res,req){

    res.render('home');

});



