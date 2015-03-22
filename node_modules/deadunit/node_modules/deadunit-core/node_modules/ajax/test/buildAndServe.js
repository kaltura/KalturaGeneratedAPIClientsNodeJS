var http = require('http');
var fs = require('fs')
var url = require('url')

var webpack = require("webpack")
var path = require('path')

build('test.web', function() { // build tests, then...
    startTestServer()
})



function startTestServer() {

    var port = 8100

    var server = http.createServer(function (request, res) {
        try {
            var requestUrl = url.parse(request.url)
            var path = requestUrl.pathname

            if(path !== '/favicon.ico') {
                console.log("Test request: "+path)

                if(path === '/') {
                    path = '/test.html'
                }

                res.writeHead(200)
                res.write(fs.readFileSync(__dirname+path))
            } else {
                res.writeHead(400)
            }

        } catch(e) {
            console.log(e.stack)
            res.writeHead(400)
        } finally {
            res.end()
        }
    })

    server.listen(port)
    console.log('Test server listening on port '+port)
}


function build(entrypoint, done) {

    var webpackConfig = {
        context: __dirname,
        entry: "./"+entrypoint,
        output: {
            path: path.join(__dirname, path.dirname(entrypoint)),
            filename: path.basename(entrypoint)+".bundle.js",
            pathinfo: true // do not use this in production
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(/*preferEntry=*/true), // does .. something, and makes the entry chunk smaller (at the cost of making later chunks bigger)
            new webpack.optimize.DedupePlugin()       // removes duplicate files
        ],
        cache: true,
        devtool: "source-map",
        watch: false
    }

    webpack(webpackConfig, function(err, stats) {
        if(err) {
            console.error(err)
        } else {
            var jsonStats = stats.toJson();

            if(jsonStats.warnings.length > 0)
                jsonStats.warnings.forEach(function(w) {
                    console.log(w)
                })

            if(jsonStats.errors.length > 0)
                jsonStats.errors.forEach(function(e) {
                    console.error(e)
                })
            else {
                console.error('Completed building bundle!')
                done()
            }
        }
    })
}