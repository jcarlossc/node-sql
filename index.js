var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('../src/views/index');
});

app.listen(3000, function() {
	console.log('Porta: 3000');
});