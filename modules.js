const newName = require('./names')
const sayHi = require('./utils')
const newData = require('./alternative')

//code being ran without creating a constant when exporting a function or importing it because it is already a function
require('./mind-grenade')

console.log(newName)
sayHi('susan')
sayHi(newName.john)
sayHi(newName.peter)

console.log(newData)

