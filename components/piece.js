class Piece {
	constructor(char, coords) {
		this.piece = char
		this.i = coords[1]
	}

	getChar() {
		return this.piece
	}

	place(char) {
		if(this.piece === '.') {
			this.piece = char
			return true
		} else {
			console.log('Invalid play!!')
			return false
		}
	}


}
exports.Piece = Piece