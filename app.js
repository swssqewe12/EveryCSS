const express = require('express')
const app = express()

app.use(express.static('static'))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', function (req, res) {
	res.render('index.html')
})

app.listen(process.env.PORT || 8000, function () {
	console.log('EveryCSS website is running!')
})
