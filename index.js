//Require all modules needed

let express = require('express'); //to create web apps
var exphbs = require('express-handlebars'); //to render templates
const bodyParser = require('body-parser'); //require body parser for htm functionality
const flash = require('express-flash');
const session = require('express-session');
let app = express()


//setup handlebars ,Body-parser and public
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ layoutsDir: './views/layouts' }));


// initialise session middleware - flash-express depends on it
app.use(session({
    secret: 'my express flash string',
    resave: false,
    saveUninitialized: true
}));

// initialise the flash middleware
app.use(flash());
//to use css
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//routes
app.get('/', function(req, res) {

    res.render('home');
})

app.post('/region', function(req, res) {
    var town = req.body.selector

    if (town === 'cpt') {
        res.render('cpt')

        // res.redirect('/cpt')
    } else if (town === 'dbn') {
        res.render('dbn')
    } else if (town === 'jhb') {
        res.render('jhb')
    }
    console.log(town)
})
app.get('/jhb/rentals', function(req, res) {
    res.render('rentals')
})
app.get('/jhb/rentals/houses', function(req, res) {
    res.render('houses')
})
app.get('/jhb/rentals/houses/popstars', function(req, res) {
    res.render('popstars')
})

//Port setup
const PORT = process.env.PORT || 3008;

app.listen(PORT, function() {
    console.log('App starting on port :' + PORT);
});