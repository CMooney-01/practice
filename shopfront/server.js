let ejs = require('ejs');
let express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('pages/index');
})

// Skateboard deck category page
app.get('/skateboards', function(req, res) {
  res.render('pages/skateboards');
})
// Longboard deck category page
app.get('/longboards', function(req, res) {
  res.render('pages/longboards');
})
// Wheels and trucks category page
app.get('/wheelstrucks', function(req, res) {
  res.render('pages/wheelstrucks');
})
// Swag category page
app.get('/swag', function(req, res) {
  res.render('pages/swag');
})
// Contact us page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
})
app.post('/contact-sent', function(req, res) {
  res.render('pages/contact-sent');
})
// Login page
app.get('/login', function(req, res) {
  res.render('pages/login');
})
// Signp page
app.get('/signup', function(req, res) {
  res.render('pages/signup');
})


app.listen(3000);
console.log('App is listening on port 3000');
