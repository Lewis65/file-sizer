var express = require('express'),
    app = express();

var multer = require('multer'),
    upload = multer();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index', {
        bytes: ''
    });
});

app.post('/', upload.single('doc'), function(req, res){
    var size = req.file.size;
    res.render('index', {
        bytes: size + ' bytes,<br>' + (size/1000).toFixed(2) + ' kilobytes,<br> or ' + (size/1000000).toFixed(2) + ' megabytes.<br><br>' +
        'That\'s ' + (size/1457664).toFixed(2) + ' floppy disks.'
    })
})

app.listen(process.env.PORT || 8080);
