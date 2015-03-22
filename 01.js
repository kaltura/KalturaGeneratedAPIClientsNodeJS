var Unit = require('deadunit')

var test = Unit.test('some test name', function() {
    this.count(5) // expect all 5 `ok` assertions

    var obj = {x:5, y: 'noty?'}
    this.ok(obj.x === 5)
    this.ok(obj.y === 'y')

    this.test('nested test', function() {
        this.ok(obj.go() > 4)
    })

    try {
        throw new Error("oops") // exceptions
    } catch(e) {
        this.ok(true) // expect an exception
    }

    setTimeout(function(result) { // do something asynchronous
        this.ok(result === 'good')
    }, 10)
})

test.writeConsole() // writes colorful output!
test.html()         // returns pretty html!
