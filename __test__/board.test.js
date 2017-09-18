let { Board } = require('../components/board.js')
let newBoard

beforeEach(()=>{
	newBoard = new Board()
})

test(`Creates new board, looks visually correct`, () => {
	expect(newBoard.pieces.length).toBe(9)
})

test(`Shows board on command, looks visually correct`, () => {
	expect(newBoard.showBoard()).toBe(1)
})

test(`There are two players`, () => {
	expect(newBoard.players.length).toBe(2)
})