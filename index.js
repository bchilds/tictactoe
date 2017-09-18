let { Board } = require('./components/board.js')
let Bluebird = require('bluebird')
let prompt = Bluebird.promisify(require('prompt').get)
let board = new Board()

let finished = false
let count = 0

console.log(`Please input a location (0-8) to play a piece`)
let input = prompt(['index'])
	.then( (result) => {
		// result = {index: #}
		board.placePiece(result.index)
	})
	.then( ()=> {
		board.showBoard()
	})
	.then( () => {
		if(count === 1) finished = true
		count++
	})
	
	