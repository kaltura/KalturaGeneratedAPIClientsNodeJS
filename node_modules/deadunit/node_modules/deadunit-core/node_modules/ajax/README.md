`ajax`
========

Simple asynchronous ajax function with a cache. Uses [async-futures](https://github.com/fresheneesz/asyncFuture).

Example
======

```javascript
ajax(url).then(function(response) {
    console.log('Got the file: '+response.text)
}).done()
```

Install
=======

```
npm install https://github.com/fresheneesz/ajax/archive/c0f12d10544a247bfa58b15e9535ee2ffd5787d1.tar.gz
```

Usage
=====

```javascript
var ajax = require('ajax') // use webpack (recommended) or browserify
```

`ajax(url)` - Returns a future object containing the following keys:
* text - the response body of the file
* headers - an object where the keys are the header names, and the values are their values

These override cache maintainance functions if you have a separate cache of file sources:
```javascript
ajax.cacheGet(function(url) {
   // get the url from your own cache
   // must return the same type of future returned from `ajax(url)`
})
ajax.cacheSet(function(url, futureResponse) {
   // set the content downloaded from a url for your own cache via the futureResponse
})
```

This sets ajax to synchronous behavior (not recommended). The reason this is here is to allow working around this bug in chrome: https://code.google.com/p/chromium/issues/detail?id=368444
`ajax.setSynchronous(<synchronous>)` - pass in true to set to synchronous, false to set to async

Browser Support
=========

Tested in the following browsers:
* Chrome 31
* Firefox 26
* IE 10

How to Contribute!
============

Anything helps:

* Creating issues (aka tickets/bugs/etc). Please feel free to use issues to report bugs, request features, and discuss changes.
* Updating the documentation: ie this readme file. Be bold! Help create amazing documentation!
* Submitting pull requests.

How to submit pull requests:

1. Please create an issue and get my input before spending too much time creating a feature. Work with me to ensure your feature or addition is optimal and fits with the purpose of the project.
2. Fork the repository
3. clone your forked repo onto your machine and run `npm install` at its root
4. If you're gonna work on multiple separate things, its best to create a separate branch for each of them
5. edit!
6. If it's a code change, please add to the unit tests (in the 'test/' folder) to verify that your change works
  * Browser tests need to have the test package built and test server running - run test/buildAndServe.js to do this
7. When you're done, run the unit tests and ensure they all pass
8. Commit and push your changes
9. Submit a pull request: https://help.github.com/articles/creating-a-pull-request

Change Log
=========

* 1.0.3 - catching synchronous error and passing to future
* 1.0.2 - updating async-future
* 1.0.1 - adding setSynchronous method
* 1.0.0 - first release

License
=======
Released under the MIT license: http://opensource.org/licenses/MIT
