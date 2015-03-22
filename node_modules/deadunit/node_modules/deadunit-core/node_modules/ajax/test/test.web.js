var unit = require("deadunit/deadunit.browser")
var ajax = require('../ajax')
var testFileContents = require("raw!./testFile.txt")

unit.test(function(t) {
    this.count(2)

    ajax('testFile.txt').then(function(response) {
        t.ok(response.text === testFileContents)
    }).done()

    ajax('nonExistantFile.txt').catch(function(e) {
        t.ok(e.message === "Error in request: Status 400")
    }).done()

}).writeHtml($('body'))