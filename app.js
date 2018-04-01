const express = require('express')
const app = express()

app.use(express.static('static'))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

var links = [
	"css/element-alignment/horizontal"
]

app.get('/', function (req, res) {
	render(res, 'index.html', {'links': links})
})

app.get('/search', function(req, res) {
	render(res, 'search.html')
})

for (var link of links) {
	route = "/" + link
	source = link + ".html"
	app.get(route, (req, res) => render(res, source))
}

app.listen(process.env.PORT || 8000, function () {
	console.log('EveryCSS website is running!')
})

function render(res, source, data={}) {
	data["btu"] = __dirname + "/views"
	res.render(source, data)
}