var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./src/public'));



//---------------------------
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodedb1'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//connection.query('SELECT * FROM users;', function (error, results, fields) {
//    if (error) throw error;
//    for(i = 0; i < results.length; i++) {
//        console.log('Lista: ', results[i]);
//    }
//});


app.get('/', function(req, res) {
    connection.query('SELECT * FROM users', function (err, result) {
        if (err) throw err;
        res.render('../src/views/index', {data: result});
    });
});




app.listen(3000, function() {
	console.log('Porta: 3000');
});

