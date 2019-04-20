
var chocolateBars = ["snickers","hundred grand","kit kat","skittles"];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
  
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}
  
function addElementToEndOfArray (array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  array
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}