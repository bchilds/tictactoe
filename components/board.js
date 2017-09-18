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
		this.currentPlayer = 0
		this.board = 
		`


		The current player is Player ${this.players[this.currentPlayer].getSymbol()}
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

	switchPlayer() {
		this.currentPlayer = (this.currentPlayer + 1) % 2
	}

	placePiece(index) {
		const char = this.players[this.currentPlayer].getSymbol()
		if(this.pieces[index].place(char)) {
			this.switchPlayer()
			console.log(this.currentPlayer)
		} else {
			console.log('error')
		}
		return	
	}



}
exports.Board = Board