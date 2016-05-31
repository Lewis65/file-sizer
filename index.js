var express = require('express'),
    app = express();

var multer = require('multer');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index', {
        bytes: 'some'
    });
});

app.listen(process.env.PORT || 8080);
