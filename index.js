const express = require('express');
const app = express();
const postalRate = require('./getRate.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {

	response.sendFile(__dirname + '/public/home.html');
	
});

app.get('/results', function(request, response) {

	handelPostage(request, response);
	
});

function handelPostage(request, response) {

	var type = request.query.type;
	var weight = request.query.weight;

	postalRate.calculateRate(type, weight, function(error, results) {
  		
  		response.render('results', results);

	});
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});