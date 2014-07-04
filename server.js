
var http = require('http'),
    express = require('express'),
    routes = require('./routes')
    conf = require('./config'),
    handlers = require('./handlers'),
    app = express(),
    server = app.listen(conf.config.port, function() {

	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());	
	routes.setRoutes(app, handlers);
	console.log('Listening on port %d', server.address().port);

    });


