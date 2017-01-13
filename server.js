var express = require('express')
var multer = require('multer')
var bodyparser = require('body-parser')
var path = require('path')

var app = express()
app.use(bodyparser.json())

app.set('port', (process.env.PORT || 8080))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/', multer({dest: './uploads'}).single('upl'), function (req, res) {
    res.send(JSON.stringify({"size": req.file.size}))
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!')
})
