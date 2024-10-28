console.log("Howdy 🤠")

console.log('Another one')

// TYPES and variables
35

console.log(35 + 84)

var x = 15 // var is not commonly used in JS because of it's behavior

let y = 75 // let creates variables "Scoped" to the current "Context"

const z = 225 // const creates a variable with a "Immutable" value (cannot be changed)

// IF can conditionally run lines
if (10 < 100) {
  var x = 100 // THIS X Overrides the value of ANY X present
  let y = 200 // This Y is only used INSIDE this IF ("SCOPE")
  console.log('If worked!', x, y);
}

let instructor = "Mick" // a string of characters
let dog = "dipper"
let dog2 = 'pluto'
let dog3 = `Jackson`
// ------------  "Mick"  ------------------ "dipper"
let greeting = instructor + " says hi to " + dog + "." // "Mick says hi to dipper" CONCATENATION
let greeting2 = "Mick's has 3 dogs, dipper, pluto and jackson"
let greeting3 = 'jackson ate sculpting clay yesterday, and mick said "bad dog" '
let greeting4 = `Mick's two other dogs which did not eat clay were praised and called "sweet baby angels"` // backticks are the superior quote

let interpolated = `Your instructor, ${instructor}, owns 3 dogs named: 
${dog}, ${dog2}, ${dog3}` // INTERPOLATION


// Boolean
let boolYes = true
let boolNo = false

let NOTfalse = 'false' // js does not see this as false, just as a string that says false

let coolYes = 100 > 10 // evaluates to true
let coolNo = 5 == x

if (coolYes) { // Only the code within the brackets will run, if the value in ( ) is TRUE
  console.log('🧊');
}

if (coolNo) { // does not run the code in it's scope, cause cool no is FALSE
  console.log('🥶');
}

// NULL, Known Nothing
let knownNothing = null // created intentionally by design

// Undefined, Unknown Nothing
let unknownNothing  // is usually created by errors, or invalid code expressions

console.log(knownNothing);
console.log(unknownNothing);

// SECTION application

function sayMoo() {
  console.log('🐮 - Moo')
}
sayMoo()

function sum(x, y) {
  console.log(x + y)
}

let userInput = ""
const secretCode = '🦄🐨🦄🐮'

function clickCow() {
  userInput += '🐮' // += adds and modifies the variables value. Shorthand for userInput = userInput + '🐮
  // userInput + '🐮'
  console.log('Cow Clicked', userInput)
  drawUserInput()
  revealCoolImage()
}

function clickPanda() {
  userInput += '🐼'
  console.log('Panda Clicked', userInput)
  drawUserInput()
  revealCoolImage()
}

function addEmoji(emoji) { // emoji is a PARAMETER, or a temp variable that lives in only this function
  userInput += emoji
  console.log('added emoji', emoji, userInput)
  drawUserInput()
  revealCoolImage()
}

function drawUserInput() {
  let displayElm = document.getElementById('input-display')
  console.log(displayElm)
  displayElm.innerText = userInput
}

function revealCoolImage() {
  if (userInput == secretCode) {
    let secretElm = document.getElementById('secret-img')
    secretElm.classList.remove('d-none')
  } else {
    console.warn("that ain't it partner")
  }
}