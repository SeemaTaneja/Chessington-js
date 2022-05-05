import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let newMovesArray = [];
        console.log("Starting location is :", location);
//1st quardarant(forward right)
       for(let i = 0 ; i <= 7 -location.col  ; i++){
           const nextLocation = Square.at(location.row + i , location.col + i);
           if(!nextLocation.equals(location)){
            newMovesArray.push(nextLocation);
           }
       }
 //2nd quardarant( forward left)   
       for(let i = 0 ; i <= location.col ; i++){
           const nextLocation = Square.at(location.row + i , location.col - i);
           if(!nextLocation.equals(location)){
            newMovesArray.push(nextLocation);
           }
       }
 //3rd quararant(Backward right) 
        for(let i = 0 ; i <= location.row ; i++){
            const nextLocation = Square.at(location.row - i , location.col + i);
        if(!nextLocation.equals(location)){
        newMovesArray.push(nextLocation);
        }
    }
  //4th quardarant (backward left)
         for(let i = 0 ; i <= location.row ; i++){
             const nextLocation = Square.at(location.row - i , location.col - i);
         if(!nextLocation.equals(location)){
          newMovesArray.push(nextLocation);
    }
} 
        console.log(newMovesArray);
        return newMovesArray;
}
}
