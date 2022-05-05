import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let newMovesArray = [];
        //vertical move
        for(let i= 0 ; i<= 7 ; i++){
            if(i !== location.row){
                newMovesArray.push(Square.at(i , location.col));
            }       
        }
        //horizontal move
        for(let i= 0 ; i<= 7 ; i++){
            if(i !== location.col){
                newMovesArray.push(Square.at(location.row , i));
            }
        }
        //console.log(newMovesArray);
        return newMovesArray;
    }
}
