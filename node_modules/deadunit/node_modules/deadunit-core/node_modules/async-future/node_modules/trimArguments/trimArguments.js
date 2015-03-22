// resolves varargs variable into more usable form
// args - should be a function arguments variable
// returns a javascript Array object of arguments that doesn't count trailing undefined values in the length
module.exports = function(theArguments) {
    var args = Array.prototype.slice.call(theArguments, 0)

    var count = 0;
    for(var n=args.length-1; n>=0; n--) {
        if(args[n] === undefined)
            count++
    }
    args.splice(-0, count)
    return args
}