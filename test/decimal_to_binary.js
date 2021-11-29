const Stack = require("../model/stack")

function decToBin(_decNumber) {
  if(_decNumber === 0 )
    return 0

  const stack = new Stack.Stack()
  
  let decimal = _decNumber
  let resto

  while (decimal > 0) {
    resto = Math.floor(decimal % 2)
    decimal = Math.floor(decimal / 2)
    stack.push(resto)
  }

  return stack.toString()
}

console.log(decToBin(7))