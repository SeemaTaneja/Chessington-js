import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let newMovesArray = [];
        for(let i= 0 ; i<= 7 ; i++){
            if(i !== location.row){
                newMovesArray.push(Square.at(i , location.col));
            }       
        }
        for(let i= 0 ; i<= 7 ; i++){
            if(i !== location.col){
                newMovesArray.push(Square.at(location.row , i));
            }
        }
        for(let i = 0 ; i <= 7 -location.col  ; i++){
            const nextLocation = Square.at(location.row + i , location.col + i);
            if(!nextLocation.equals(location)){
             newMovesArray.push(nextLocation);
            }
        }
        for(let i = 0 ; i <= location.col ; i++){
            const nextLocation = Square.at(location.row + i , location.col - i);
            if(!nextLocation.equals(location)){
             newMovesArray.push(nextLocation);
            }
        }
        for(let i = 0 ; i <= location.row ; i++){
            const nextLocation = Square.at(location.row - i , location.col + i);
            if(!nextLocation.equals(location)){
            newMovesArray.push(nextLocation);
        }
    }
    for(let i = 0 ; i <= location.row ; i++){
        const nextLocation = Square.at(location.row - i , location.col - i);
        if(!nextLocation.equals(location)){
        newMovesArray.push(nextLocation);
    }
    }
        return newMovesArray;
    }
}
