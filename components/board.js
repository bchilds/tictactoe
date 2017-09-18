let { Player } = require('./player.js')
let { Piece } = require('./piece.js')


class Board {

	constructor(){
		this.players = [new Player('x')]
		this.players.push(new Player('o'))
		this.pieces = []
		for(let i = 0; i < 9; i++) {
			this.pieces.push(new Piece('.', i))
		}
		this.board = 
		`
		|   |   |   |
		| ${this.pieces[0].getChar()} | ${this.pieces[1].getChar()} | ${this.pieces[2].getChar()} | 
		|___|___|___|
		|   |   |   |
		| ${this.pieces[3].getChar()} | ${this.pieces[4].getChar()} | ${this.pieces[5].getChar()} |
		|___|___|___|
		|   |   |   |
		| ${this.pieces[6].getChar()} | ${this.pieces[7].getChar()} | ${this.pieces[8].getChar()} |
		|   |   |   |
		`
		this.showBoard()
	}

	showBoard() {
		console.log(this.board)
		return 1
	}

	checkWinOrDraw(symbol) {

	}



}
exports.Board = Board