let ejs = require('ejs');
let express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('pages/index');
})

app.get('/skateboards', function(req, res) {
  res.render('pages/skateboards');
})

app.get('/contact', function(req, res) {
  res.render('pages/contact');
})

app.post('/contact-sent', function(req, res) {
  res.render('pages/contact-sent');
})



app.listen(3000);
console.log('App is listening on port 3000');
