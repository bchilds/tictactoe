class Piece {
	constructor(char, coords) {
		this.piece = char
		this.i = coords[1]
	}

	getChar() {
		return this.piece
	}

	place(char) {
		this.piece = char
	}


}
exports.Piece = Piece