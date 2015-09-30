var express	= require("express");
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');

var port = 8082;


app.get('/', function (request, response) {
	response.render('calculator', { title: 'Simple calculator', calculation: '' });
});

app.post('/', function (request, response) {
	var result = '';
	var calculation = request.body.calculation || '';

	if(request.body && request.body.calculation && request.body.calculation != '') {
		result = eval(request.body.calculation);
	}
	response.render('calculator', { title: 'Simple calculator', result: result, calculation: calculation });
});


var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
