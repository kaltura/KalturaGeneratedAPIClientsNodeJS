var Future = require("async-future")

// returns the XHR function or equivalent for use with ajax
// memoizes the function for faster repeated use
var createXMLHTTPObject = function() {
    var versions = ["Msxml2.XMLHTTP",
                    "Msxml3.XMLHTTP",
                    "Microsoft.XMLHTTP",
                    "MSXML2.XmlHttp.6.0",
                    "MSXML2.XmlHttp.5.0",
                    "MSXML2.XmlHttp.4.0",
                    "MSXML2.XmlHttp.3.0",
                    "MSXML2.XmlHttp.2.0"
    ]

    if(XMLHttpRequest !== undefined) {  // For non-IE browsers
        createXMLHTTPObject = function() {  // Use memoization to cache the factory
            return new XMLHttpRequest()
        }
        return createXMLHTTPObject()

    } else { // IE
        for(var i=0, n=versions.length; i<n; i++) {
            try {
                var version = versions[i]
                var fn = function() {
                    return new ActiveXObject(version)
                }
                createXMLHTTPObject = fn   // Use memoization to cache the factory
                return createXMLHTTPObject()

            } catch(e) {   }
        }
    }

    throw new Error('Cant get XmlHttpRequest object')
}



var HEADER = "([^\\s]+): (.*)"

// returns the contents and headers from a given URL
exports = module.exports = function(url) {
    if(getFromCache(url))
        return getFromCache(url)

    var futureResult = new Future
    setOnCache(url, futureResult)

    var req = createXMLHTTPObject()
    req.onreadystatechange = function() {
        if( req.readyState === 4 ) {
            if( req.status === 200 ) {
                var headers = {}
                req.getAllResponseHeaders().split('\n').forEach(function(line) {
                    var match = line.match(HEADER)
                    if(match !== null) {
                        var name = match[1]
                        var value = match[2]

                        headers[name] = value
                    }
                })

                futureResult.return({text: req.responseText, headers: headers})

            } else {
                var error = new Error('Error in request: Status '+req.status)
                error.status = req.status
                futureResult.throw(error)
            }
        }
    }

    req.onerror = function(e) {
        futureResult.throw(e)
    }


    req.open('GET', url, asynchronous)
    try {
        req.send()
    } catch(e) {
        futureResult.throw(e)
    }

    return futureResult
}

var cache = {}
var getFromCache = function(url) {
    return cache[url]
}
var setOnCache = function(url, futureResponse) {
    cache[url] = futureResponse
}

var asynchronous = true
exports.setSynchronous = function(synchronous) { // this is here so I can work around this bug in chrome: https://code.google.com/p/chromium/issues/detail?id=368444
    asynchronous = !synchronous
}

exports.cacheGet = function(fn) {
    getFromCache = fn
}
exports.cacheSet = function(fn) {
    setOnCache = fn
}