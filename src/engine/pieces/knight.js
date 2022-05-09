import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let newMovesArray = [];
        console.log("Starting location is :", location);
        //first move forward right
        let i =location.row;
        let j = location.col;
        if(i >= 0 && i < 8 && j >= 0 && j < 8){
             newMovesArray.push(Square.at( i = location.row + 1 , j = location.col + 2)),
             newMovesArray.push(Square.at( i = location.row - 1 , j = location.col + 2)),
             newMovesArray.push(Square.at(i = location.row + 2 , j = location.col + 1 )),
             newMovesArray.push(Square.at(i = location.row + 2 , j = location.col - 1 )),
             newMovesArray.push(Square.at( i = location.row - 2 , j = location.col + 1)),
             newMovesArray.push(Square.at( i = location.row - 2 , j = location.col - 1)),
             newMovesArray.push(Square.at(i = location.row - 1 , j = location.col - 2 )),
             newMovesArray.push(Square.at(i = location.row + 1 , j = location.col - 2 ))
        }
        console.log(newMovesArray);
        return newMovesArray;
    }
}
