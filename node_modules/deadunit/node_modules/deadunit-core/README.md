`deadunitCore`
============

The core functionality for [deadunit](https://github.com/fresheneesz/deadunit).
Has a dead-simple, flexible unit testing api that outputs unit-testing results as simple javascript objects that can be accessed programmatically for display or inspection.


Example
=======

Simple output
```javascript
var Unit = require('deadunit-core')

var test = Unit.test('some test name', function() {
    var obj = someFunctionToTest()

    this.ok(obj.x === 5)
    this.ok(obj.y === 'y')

    this.test('nested test', function() {
        this.ok(obj.go() > 4)
    })

    this.done()
}).events({
 	end: function() {
    	console.dir(test.results())
    }
})


```

Event driven output
```javascript

Unit.test('another test', function() {
    var obj = someFunctionToTest()
    this.ok(obj.msg.indexof("hi") !== -1)
    this.done()
}).events({
    group: function(g) {
        console.log(g.name +" started at "+g.time)
    },
    assert: function(e) {
        console.log(e.success +" - "+e.sourceLines)
    },
    log: function(log) {
        console.dir(log.values)
    },
    end: function() {
        console.log("Done!")
    }
})

```

Install
=======

```
npm install deadunit-core
```

Usage
=====
##### node.js or [webpack](https://github.com/webpack/webpack)
```javascript
var Unit = require('deadunit-core')
```

##### [webpack](https://github.com/webpack/webpack)
```javascript
var Unit = require('deadunit-core/deadunitCore.browser')
```

##### require.js
```javascript
require(['node_modules/deadunitCore.browser.gen.umd'], function(Unit) {
   // ...
}
```

##### browser global (the global variable will be 'deaunitCore')
```javascript
<script src='node_modules/deadunitCore.browser.gen.umd'></script>
```

`Unit.test([<name>, ]<testFunction>)` - runs a suite of unit tests. Returns a `UnitTest` object. Returns without having run the tests first - the tests are scheduled to run asynchronously soon thereafter.

 * `<name>` - (optional) names the test
 * `<testFunction>` - a function that contains the asserts and sub-tests to be run. Both its only parameter and its bound `this` is given the same `UnitTester` object.

UnitTester
----------

`this.ok(<success>, [<actualValue>, [expectedValue]])` - makes an assertion about some data. Usually this can be used with just the first parameter.

* `<success>` - a value that the test expects to be true.
* `<actualValue>` - (optional) the "actual value" being tested. The test results will contain information about the actual value. Example: `this.ok(num === 5, num)`
* `<expectedValue>` - (optional) the "expected value". The test results will contain information on the expected value. Example: `this.ok(obj.x === 5, obj.x, 5)

`this.eq(<actualValue>, <expectedValue>])` - shorthand for `this.ok(<actualValue> === <expectedValue>, <actualValue>, <expectedValue>)`.

* `<actualValue>` - the "actual value" being tested. The test results will contain this information about the actual value.
* `<expectedValue>` - the "expected value". The test results will contain this information on the expected value.

`this.count(<number>)` - Declares that a test contains a certain `<number>` of test groups and asserts (the `ok` method call). Does not count asserts in subtests. This should only be called once per group, and shouldn't be called asynchronously. This is also used to determine when tests are complete. If `count` is not called in a test, that test completes when all of its subtests complete. If `count` is called, then the test completes when the count is reached.

`var testObject = this.test([<name>, ]<testFunction>)` - runs a subtest. Has the same behavior as `Unit.test`. Any number of subtests can be nested inside eachother.

* `testObject.complete` is an [async-future object](https://github.com/fresheneesz/asyncFuture) that resolves when the subtest is complete (when all its exepected asserts are finished or the test times out)

`this.log(<value>, <value2>, ...)` - Records a concatenated list of values that can be accessed in the test results. This will probably normally be used to record informational string messages.

`this.timeout(<milliseconds>)` - adds a timeout of `<milliseconds>`  from the time at which its called. The test will only time out when all added timeouts expire. When `Unit.test` is called, a timeout of `3000ms` is set, and the first time `this.timeout` is called, it will override this default instead of just adding an extra timeout - so you can reduce the timeout from this default. Note that this is a timeout for the entire test, not just the specific test-group.

`this.before(<function>)` - Runs the passed `<function>` once before each subtest in the test.

`this.after(<function>)` - Runs the passed `<function>` once after each subtest in the test.

`this.error(<function(e)>)` - Overrides the unhandled exception handler (that catches errors and records them in the test results) specifically for unhandled errors that happen inside `this` test (not child tests). Unhandled exceptions will come through this function *instead* of being recorded in the test results.

`this.warning(<function(e)>)` - Overrides the warning handler (which takes an exception as its parameter). Warning exceptions will come through this function *instead* of being recorded in the test results.

`this.sourcemap(<enable>)` - enables (`true`) or disables (`false`) source mapping of printed exceptions with a given test. Source mapping of exceptions is enabled by default.

UnitTest
----------

`test.results()` - access the test results. Should only be accessed after the entire test has been completed (an asynchronous error will be thrown if more test results happen after the test results have been accessed).

* returns a TestGroup (see **Result Types**)

`test.events(<handlers>)` - sets up handlers that are called as test results come through. Test results are buffered, so event handlers will always get 100% of the test results, even tho it is called after the unit tests have started. `<handlers>` is an object of handler `Function`s with the following properties - note that the parameter name of the handler indicates an **Event Object** type below:
* `group(<groupStartEvent>)` - called when a new test group is started.
* `assert(<assertEvent>` - called when an assert (`ok` method) happens.
* `count(<countEvent>)` - called when a `count` happens.
* `exception(<exceptionEvent>)` - called when an exception happens inside a test group.
* `log(<logEvent>)` - called when a `log` happens.
* `end(<endEvent>)` - called either when the `done` method is called, or when the tests time out.
* `groupEnd(<groupEvent>)` - called when a test group is done (all expected assertions have happened and all its subtests are complete or the whole test has timed out)
* `before(<groupEvent>)` - called when a `before` handler is started
* `after(<groupEvent>)` - called when a `before` handler is started
* `beforeEnd(<groupEvent>)` - called when a `before` handler is finished
* `afterEnd(<groupEvent>)` - called when a `before` handler is finished

### Event Objects ###

#### groupStartEvent

```javascript
{  id: _,                // a unique id for the test group
   parent: _,            // the id of the parent group (undefined if it is the top-level test group)
   name: _,              // the name of the test
   time: _              // a Unix Timestamp of when the test group started.
}
```

#### groupEvent

```javascript
{  id: _,                // the id of the test group
   time: _               // a Unix Timestamp of when the test group event happened.
}
```

#### assertEvent ####
```javascript
{  parent: _,        // the id of the group this assert is part of
   success: _,       // true or false, whether the assert passed or failed
   time: _,          // a Unix Timestamp of the time when the assert happened
   sourceLines: _,   // the text of the actual line of code for the assert
   file: _,          // the filename of the file containing the test
   line: _,          // line number of the assert
   column: _,        // column number of the assert (not sure this is totally accurate)
   expected: _,      // (optional) the value expected in the assert (third parameter to `ok`)
   actual: _         // (optional) the actual value gotten (second parameter to `ok`)
}
```

#### countEvent ####
```javascript
{  parent: _,        // the id of the group this assert is part of
   success: _,       // true or false, whether the assert passed or failed
   time: _,          // a Unix Timestamp of the time when the assert happened
   sourceLines: _,   // the text of the actual line of code for the assert
   file: _,          // the filename of the file containing the test
   line: _,          // line number of the assert
   column: _,        // column number of the assert (not sure this is totally accurate)
   expected: _       // the number of asserts and tests expected
}
```

#### exceptionEvent ####
```javascript
{  parent: _,        // the id of the group this assert is part of
   time: _,          // a Unix Timestamp of the time when the assert happened
   error: _          // the thrown object
}
```

#### logEvent ####
```javascript
{  parent: _,        // the id of the group this log is part of
   time: _,          // a Unix Timestamp of the time when the log happened
   values: _         // the logged values
}
```

#### endEvent ####
```javascript
{  type: _,          // will either be "timeout" if a the test timed out, or "normal" otherwise
   time: _           // a Unix Timestamp of the time when the test ended
}
```

### Result Types ###

#### group ####
```javascript
{  id: _,                // a unique id for the test group
   type: 'group',        // indicates a test group (either a `Unit.test` call or `this.test`)
   name: _,              // the name of the test
   results: _,           // An array of test results, which can be of an `UnitTest` Result Types
   exceptions: _,        // An array of uncaught exceptions thrown in the test,
   duration: _,          // the duration of the test from its start til the last test action (assert, log, timeout, etc)
   //                       including asynchronous parts and including subtests
   timeout: _            // Set to true if the test times out. This key is only available on the top-level group object.
}
```

#### assert ####
```javascript
{  parent: _,        // the id of the group this assert is part of
   type: 'assert',   // indicates an assert (either an `ok` or `count` call)
   success: _,       // true or false, whether the assert passed or failed
   time: _,			 // a Unix Timestamp of the time when the assert happened
   sourceLines: _,   // the text of the actual line of code for the assert (Note that sourceLines are only available if the script is allowed to download the source, which might not be the case if the source is from your filesystem [ie file://] or from another domain)
   file: _,          // the filename of the file containing the test
   line: _,          // line number of the assert
   column: _,        // column number of the assert (not sure this is totally accurate)
   expected: _,      // (optional) the value expected in the assert (third parameter to `ok`)
   actual: _         // (optional) the actual value gotten (second parameter to `ok`)
}
```

#### log ####
```javascript
{  parent: _,        // the id of the group this log is part of
   type: 'log',      // indicates a test log - this is so you can log something in-line with the test results
   time: _,          // a Unix Timestamp of the time when the log happened
   values: _         // the logged values
}
```
Environment/Browser Support
=============

* node.js
* Browsers
 * Chrome 31, 33, 34
 * Firefox 26, 28
 * IE 10

This needs more testing! Please help by testing and reporting bugs in other browsers or browser versions!

To Do
=====

* finish the serverlessTest.html tests, and enable deadunit to work (in a limited way) on files accessed using file:// protocol paths (see here for some help: http://stackoverflow.com/questions/9404793/check-if-same-origin-policy-applies/24619327#24619327 )
* when stacktrace.js supports asynchronous ajax, upgrade it
* tests are timing out too easily - give each test a default timeout of 1 second (that can be overwritten by an explicit `this.timeout` call)
* Look into using https://ci.testling.com/ for browser testing
* when chrome bug https://code.google.com/p/chromium/issues/detail?id=368444 is fixed, set ajax back to asynchronous
* There's already a way to work around dead fibers, but still need to make a way to work around dead futures
  * put each subtest in its own timeout, and resolve a future either when the previous test completes or when it times out
    * note that this method would effectively force sequential test running - not entirely a bad thing in my opinion (since if you really wanted to squeeze out speed of your test, you can organize it within the same test)
  * This would have to require that no asserts happen after subtests start being created (because it would be confusing that those asserts happen before the subtests written before them, because the subtests happen asynchronously)
    * throw an error for any this.ok or this.count run for any test that already contains subtests this.test
* allow individual tests be cherry picked (for rerunning tests or testing specific things in development)

How to Contribute!
============

###Anything helps

* Creating issues (aka tickets/bugs/etc). Please feel free to use issues to report bugs, request features, and discuss changes.
* Updating the documentation: ie this readme file. Be bold! Help create amazing documentation!
* Submitting pull requests.

###How to submit pull requests

1. Please create an issue and get my input before spending too much time creating a feature. Work with me to ensure your feature or addition is optimal and fits with the purpose of the project.
2. Fork the repository
3. clone your forked repo onto your machine and run `npm install` at its root
4. If you're gonna work on multiple separate things, its best to create a separate branch for each of them
5. edit!
6. If it's a code change, please add to the unit tests (at test/testDeadunitCore.js) to verify that your change
7. When you're done, run the unit tests and ensure they all pass
  * Make sure you run `node build.js` to build the browser packages (browserPackage/deadunitCore.browser.gen.umd.js and test/deadunitTests.browser.umd.js) before running the browser tests
  * For a full test, run testServer.js and access the browser tests by going to http://localhost:8000/
    * Also run the tests from the filesystem to ensure that works as well (ie file:// instead of using the testServer)
8. Commit and push your changes
9. Submit a pull request: https://help.github.com/articles/creating-a-pull-request

Changelog
========

* 5.0.13 - adding the `completed` future on tests
* 5.0.12 - adding support for pulling sources from the sourcemap (if the sourcemap has them)
* 5.0.10 - upgrading async futures, adding test case for the recursion issue, and bolstering "too much recursion" avoidance
* 5.0.9 - fixing too much recursion issue in the tests (affected firefox)
* 5.0.8 - attempting to fix some bugs in the last commit
* 5.0.7 - adding bundle that was left out of last commit
* 5.0.6
    * ensuring that the end event is only called once the test threadlet (e.g. a setTimeout callback) has finished
    * trying to mitigate "too much recursion" errors by using setTimeout
* 5.0.5 - updating stackinfo to support sourcemapping for newer versions of firefox (that have a new stacktrace format)
* 5.0.4
    * fixing memory leak that happened in certain rare error conditions
    * updating ajax for better error handling
* 5.0.3
    * fixing time calculating issue
    * moving counts to the top of the results for each group
    * pulling in new version of futures for a major performance improvement
* 5.0.2 - fixing annoying bug where eq's expected and got are backwards
* 5.0.1
    * fixing sourcemap support for webpack (not sure here if webpack is doing something wrong or if deadunit is)
    * adding this.eq
    * removing `resolve-url` as a dependency once `source-map-resolver`
* 5.0.0
    * Sourcemap support
    * Got rid of `Unit.error`
    * Fixing bug in the `string` method introduced in the last version
    * fixed up sourceLines grabbing so that it can grab the source for asserts that span multiple lines
    * Consolidate file cache between deadunit-core's and stacktrace.js's sourcefile loading and exposed a way to override deadunit-core's file cache
* 4.0.6 - updating stackinfo
* 4.0.5 - Fixing bug where deadunit would crash if an asynchronous error was thrown from the main test
* 4.0.3
 * updating stackinfo
 * fixing bug in sourcetext loading in browser code that happened when sourcecode returns blank (the blankness might be a bug itself, or might be a browser issue)
* 4.0.2 - Fixing it so things don't break if you can't get a file's source
* 4.0.1 - Added getting source lines for tests in-browser
* 4.0.0 - removing syncDuration and totalSyncDuration, and making duration the total time it took for a test to complete its expected asserts
* 3.0.3 - fixing issue where the first timeout to expire would time the test out rather than the last timeout to expire
* 3.0.2 - get rid of late events warning in deadunit-core (thats a job for deadunit proper)
* 3.0.1 - moving build-modules (which uses browserify) to be a devDependency
* 3.0.0
 * making top-level test run asynchronously to make some things work better with node fibers
 * since this means you basically always have to wait for the 'end' event before getting results, it may break old tests (fixable with minor tweaking), so upping major versions
* 2.0.9
 * fixing silent-failure issue when the test times out before it completes synchronously
* 2.0.7
 * Increasing stackinfo version to get minor chrome stacktrace info improvements
* 2.0.6
 * Fixing bug when a test event handler is called inside a test event handler. So meta.
* 2.0.5
 * Making logs come out in real-time instead of waiting for the scheduler (using setTimeout).
* 2.0.2
 * Firefox and IE support!
* 2.0.1
 * Browser support! Supports chrome only at this point.
* 2.0.0 - *Breaking Change*
 * tests use `this.count` to determine when tests are done
 * added an event driven api for maximal flexibility.
 * tests can time out, added timeout control
 * count is no longer an assertEvent, but a countEvent
 * sourceLines is now a string rather than an array
* 1.1.3 - Fixed a bug with times when fibers die mid-test
* 1.1.2 - Changed `log` interface to be able to pass in multiple values
* 1.1.1 - enabled tests to still get all executed test results even if a [fiber](https://github.com/laverdet/node-fibers) dies midway through a test group
* 1.1.0
  * changed count to count asserts and subtests in the current test, and ignore asserts in subtests
  * changed duration keys in order to make more sense and add asynchronous duration

License
=======
Released under the MIT license: http://opensource.org/licenses/MIT
