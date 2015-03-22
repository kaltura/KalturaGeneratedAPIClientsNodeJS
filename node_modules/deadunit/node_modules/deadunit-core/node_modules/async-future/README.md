`async-future`
============

A simple, powerful library for managing asynchronous control flow and saner handling of asynchronous exceptions in `node.js` and the `browser`.

Why use async-future?
=====================
* If you want to avoid callback-hell
* If you want exception bubbling with try-catch-finally semantics for asynchronous code
* If you ever need to wait for two or more asynchronous calls to complete before executing some code

Examples
=======

Simple return with error handling
```javascript
var Future = require('async-future')  // node.js and webpack

var f = new Future
asynchronousFunction(function(result) {
    if(error) f.throw(error)
    else      f.return(result)
})

f.then(function(result) {
   useThe(result)

}).catch(function(e) {
   console.error("Oh no! "+error)

}).done()
```

Immediates, familar try-catch-finally semantics, and Future.wrap
```javascript

var f2 = Future(45) // you can create immediately-resolved futures for convenience
var f3 = Future(undefined) // note that undefined has to be explicitly passed in
                           // so "Future()" won't work the same way
var futureFn2 = Future.wrap(asyncFn2) // turns an asynchronous function into a function
                                      // that returns a future
f2.then(function(result) {
    console.log(result) // prints 45
    return Future(true) // returning a future passes the result of the future (in this
                        // case 45) to the next `then` statement
}).then(function(result2) {
    console.log(result2) // prints true
    return futureFn2(result2) // using the wrapped function is just like using the
                              // unwrapped function, but without the callback parameter
}).finally(function() {
    // this is ran regardless of whether an exception was thrown above ^

}).catch(function(e){  // unlike try-catch semantics, `catch` should come after `finally`

}).done() // ensures that any exception still in the pipes here is asynchronously thrown
         // (instead of being lost). This is equivalent to 'detatch' in fibers/future

function asyncFn2(parameter, /*more parameters if you want, */ callback) {
    try {
       callback(undefined, doStuff(parameter))
    } catch(e) {
       callback(e)
    }
}
```

Why use async-future over ...
=============================
* Has familiar and well understood try-catch-finally semantics
* [jQuery deferred](http://api.jquery.com/jQuery.Deferred/) doesn't bubble exceptions
* [Q promises](https://github.com/kriskowal/q) doesn't give you the flexibility to resolve your promises, rather it splits things into promises and deffereds. This makes things both more complicated and more restrictive.
* [fibers/future](https://github.com/laverdet/node-fibers) has a nicer interface, but only works on node.js
* [FutureJs](https://github.com/FuturesJS/FuturesJS) doesn't have very good documentation (so its hard to really know)
* [parallel.js](http://adambom.github.io/parallel.js/) is more complicated and doesn't help you bubble exceptions
* [substack's node-seq](https://github.com/substack/node-seq) is also much more complicated, and doesn't have sane semantics for passing futures/promises out of functions

Install
=======

```
npm install async-future
```

Usage
=====

```javascript
var Future = require('async-future')
```

future-chains
-------------

The most important part of `async-future` is future-chains. 
These are chains that have try-catch-finally style semantics, but are asynchronous.
Future-chains consist of chains of `then`, `catch`, and `finally` calls and must always eventually end in a `done` call. When an exception is thrown (or an error-resolved future is returned) from a previous link in the chain, the error propagates down the chain to the first catch it comes across, skipping any `then`s and running any `finally`s.

The  methods `then`, `catch`, and `finally` return a `new Future` that is resolved when their callback completes. The future returned by all three of these methods will resolve with an error if an exception is thrown from the callbacks.

The future returned by the methods `then` and `catch` will resolve to the following return values (non-errors):

* `undefined`, if the callback returns `undefined` (ie nothing), or
* if the callback returns a `Future` object, it resolves to the value that future resolves to

*Other than `undefined`, you may not return a value that isn't a `Future` object from these callbacks.*

`f.then(<callback>)` - executes `<callback>` if `f` is returned from. `<callback>` gets the return value of `f` as its only parameter. Returns a future that resolves when `then` completes or if `f` is resolved with an error. Does not execute the callback if `f` resolves to an error, but instead resolves its return value with the error from `f`.

`f.catch(<callback>)` - executes `<callback>` if `f` is thrown from. `<callback>` gets the error value of `f` as its only parameter. Returns a future that resolves when its callback completes or when `f` is returned from. Does not execute the callback if `f` resolves to a return value, but instead resolves its return value with the return value of `f`.

`f.finally(<callback>)` - executes a callback when `f` resolves, regardless of whether `f` was resolved with a return value or an error. The callback takes no arguments. Returns a future that resolves when `<callback>` completes or when the future it returns completes. If the future `<callback>` returns resolves to an exception, the future returned from `finally` will too. If the future `<callback>` returns resolves to a return value, or if `<callback>` returns `undefined`, the future `finally` returns will resolves to the same result as `f`.

`f.done()` - marks a future chain as done, which means that if any subsequent exceptions happen, 
 it will be thrown asynchronously (and likely caught by a domain if its node.js, or by window.onerror in browsers). 
Every future or future-chain that won't have one of the chain-methods (or the `resolver` method) called on it, 
should call `.done()`, so that thrown exceptions won't get lost.

**Summary**

.                                      | then                       | catch                         | finally
-------------------------------------: | -------------------------- | ----------------------------- | -------------
**parameter**                        | value of calling future    | exception from calling future  | none
**returned future resolves to**     | *returned* future's value  | *returned* future's value     | thrown exception or *calling* future's value
**exceptions thrown in callback**   | propogate                  | propogate                    | propogate


Other Instance properties
-------------------

`f.return(<value>)` - resolves a future with a return value (`undefined` if a value isn't passed)

`f.throw(<exception>)` - resolves a future with an exception

`f.resolver()` - returns an errback from a future. This is useful for using functions that require an errback-style callback (a function that takes two parameters, `(error, result)`)

`f.resolved()` - returns true if the future has already been resolved, false otherwise.

Static properties
-----------------

`Future.all(<futures>` - returns a future that resolves when all futures inside resolve (or throws an error when one of the futures returns an error).

`Future.wrap(<fn>)` - wraps a function that takes an errback so that it returns a future instead of calling an errback.

`Future.isLikeAFuture(<fn>)` - Returns true if the object looks like a future (duck typing). You might want to use this instead of `instanceof` because its possible that you might have different versions of async-future floating around (in which case `instanceof` might not work like you expect).

Example:

```javascript
function a(x, errback) {
	if(x === false)
		errback(Error('x isnt true : ('))
	else
		errback(undefined, x)
}

var aFuture = Future.wrap(a)

// prints 5
aFuture(5).then(function(result) {
	console.log(result)
}).done()

// prints an exception
aFuture(false).then(function(result) {
	console.log(result) // never gets here
}).done()

```

`Future.wrap(<object>, <method)` - wraps a method that takes an errback so that it returns a future instead of calling an errback. Example:

* Example: `var wrappedMethod = Future.wrap(object, 'methodName')`

`Future.error(<handler>)` - sets up a function that is called when an unhandled error happens. `<handler>` gets one parameter, the unhandled exception. Unhandled errors happen when `done` is called and an exception is thrown from the future.

`Future.debug` - if true, gives each future a unique id (default is `false`)


Todo
====


* Long stack traces (where possible)
* Think about how to handle domains - right now `done` throws into whatever domain the beggining of the chain was called in, instead of the context `done` was called in
 * This might be ok since `done` is intended to be a safety net, and not generally used to catch and report errors
* Standalone bundle (via ) [build-modules](https://github.com/fresheneesz/buildModules)
* timeout or cancelation (probably cancellation is more general)

Changelog
========

* 1.0.2 - adding code to prevent "too much recursion" RangeErrors from being caused by code with a ridiculous number of chained `then`s using a setTimeout every 400th chain
* 1.0.1 - fixing obscure bug in `catch`
* 1.0.0 - making a simple change that hugely improves performance at the cost of making it a little more impportant when exactly you call `return` or `throw` (though that also has the upside of allowing more control)
* 0.1.18 - fixing bug in `finally` where exceptions and results weren't being correctly passed through
* 0.1.16 - fixing behavior when exceptions happen in a finally block
* 0.1.10 - fixing another (i think the last) related bug where finally was being called before a future returned by a previous `then` callback was resolved
* 0.1.9 - fixing related bug with futures returned from a `then` callback, where exceptions weren't being properly propogated
* 0.1.8 - fixing bug with the `done` method when a future with an error is returned from a `then` callback

How to Contribute!
============

Anything helps:

* Creating issues (aka tickets/bugs/etc). Please feel free to use issues to report bugs, request features, and discuss changes
* Updating the documentation: ie this readme file. Be bold! Help create amazing documentation!
* Submitting pull requests.

How to submit pull requests:

1. Please create an issue and get my input before spending too much time creating a feature. Work with me to ensure your feature or addition is optimal and fits with the purpose of the project.
2. Fork the repository
3. clone your forked repo onto your machine and run `npm install` at its root
4. If you're gonna work on multiple separate things, its best to create a separate branch for each of them
5. edit!
6. If it's a code change, please add to the unit tests (at test/asyncFuturesTest.js) to verify that your change
7. When you're done, run the unit tests and ensure they all pass
8. Commit and push your changes
9. Submit a pull request: https://help.github.com/articles/creating-a-pull-request

Contributors
============
* Special thanks to [kriskowal](kriskowal), who's project [Q promises](qPromises) gave me inspiration for this project.

[jayferd]: https://github.com/kriskowal
[qPromises]: https://github.com/kriskowal/q

License
=======
Released under the MIT license: http://opensource.org/licenses/MIT
