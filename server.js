var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express();

//Express configuration
app.use(express.static(__dirname + '/public'));					// set the static files location /public/img will be /img for users
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.get('/*', function(req, res) {
    res.sendFile('./public/index.html'); 	// load the single view file (angular will handle the page changes on the front-end)
});

var server = app.listen(3004, function(){
	console.log('Learing GO CD - Servidor rodando.');
});
