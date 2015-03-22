trimArguments
=============

Function that resolves a functions's arguments into a standard javascript Array, and removes any trailing undefined arguments so that the length of the array is more predictably meaningful.

Usage:
```
function example() { 
  var args = trimArguments(arguments)
  console.log((args instanceof Array)+" "+args.length)
}

example(1,2,3,undefined,undefined) // prints 'true 3'
```
