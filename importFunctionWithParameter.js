// importFunctionWithParameter.js

const squareNumber = require('./exportFunctionWithParameter.js')

const inputNumber = 5
const result = squareNumber(inputNumber)

console.log(`The square of ${inputNumber} is:`, result)
