var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// app.use('/static', express.static(__dirname + '/app/public'));
// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/app/public')));



app.use(bodyParser.urlencoded({ extend: false}));
app.use(bodyParser.json());

require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log('app listening on port: ' + PORT);
});