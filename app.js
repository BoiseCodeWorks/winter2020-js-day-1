// NOTE Primavite Types (stored in the heap)
// NUMBER
// +, -, >, <, <=, >=, ++, --

// STRING
// CONCAT
console.log("hello world");
var h = "Hello"
var w = "World"
console.log(h + " " + w)
// Neat console log thing in JS
console.log(h, w); // js console adds spaces between each parameter
// INTERPOLATION
console.log(`${h} ${w}`)

var myName = "Mark"
var date = "1/1/2021"
var debt = 5
console.log("Hello " + myName + "! Welcome to Codeworks the future date is " + date + ". See you then")
console.log(`Hello ${myName}! Welcome to Codeworks the 'future' "date" don\`t is ${date}. 


See you then... by the way you owe me $${debt}`)

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// BOOLEAN
// True, False
// The "!" (bang) flipps the bool value

// NULL
// UNDEFINED

// NOTE Reference Types (stored in the stack)
// OBJECT (Object Literal - Plain ol' JavaScript Object - POJO)
var me = {
  name: 'Mark',
  age: 32,
  eyes: {
    left: "blue",
    right: "green"
  },
  arms: {
    left: "strong",
    right: "stronger"
  }
}

// Dot notation
console.log(me.name)

// Bracket Notation
console.log(me['name'])

// var choice = window.prompt('which Property do you want')
// console.log(me.choice)
// console.log(me[choice])

// console.log(me.eyes.left)
// console.log(me["eyes"]["left"])


// var part = window.prompt("Arms or Eyes?")
// var side = window.prompt("left or right?")
// console.log(me[part][side])

// ARRAY
var arr = ["tom", "joe", "jane"]

var arr2 = [["tom", "jerry"], ["garfield", "odie"], ["roadrunner", "coyote"]]

console.log(arr2[1][1])

// *FUNCTION* special objects

function greet(name) {
  console.log("hello")
}


var x = 100
var y = 50
var a = 10
function subtract(x, y) {
  return x - y + a
}

subtract(x, x)

// NaN
