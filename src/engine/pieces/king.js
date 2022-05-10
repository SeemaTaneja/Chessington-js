import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let newMovesArray = [];
        let i =location.row;
        let j = location.col;
        if(i >= 0 && i < 8 && j >= 0 && j < 8){
            newMovesArray.push(Square.at( i = location.row + 1 , j = location.col)),
             newMovesArray.push(Square.at( i = location.row - 1 , j = location.col)),
             newMovesArray.push(Square.at(i = location.row , j = location.col + 1 )),
             newMovesArray.push(Square.at(i = location.row , j = location.col - 1 )),
             newMovesArray.push(Square.at( i = location.row + 1 , j = location.col + 1)),
             newMovesArray.push(Square.at( i = location.row + 1 , j = location.col - 1)),
             newMovesArray.push(Square.at(i = location.row - 1 , j = location.col - 1 )),
             newMovesArray.push(Square.at(i = location.row - 1 , j = location.col + 1 ))
        }
        return newMovesArray;
    }
}
