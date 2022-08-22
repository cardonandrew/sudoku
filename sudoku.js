//define puzzle
//get row (each array inside main array will be the row)
//get column (each column will be the index of the same number on each array. for example. array[0] will ne the first column)
//get section (each section will be a 3x3 grid. no clue about this part yet)
//check for repeats in row, column, and section with includes
//if no repeats: continue, else: return false
//check for every individual number
//if includes every number in all categories without repeats, return true

function getRow(row){
    
    for(let i=0;i<row.length;i++){
       
        if row[i].includes(1,2,3,4,5,6,7,8,9) {return}
    //I don't know how im going to do this

    }
    
}
function getColumn(column){}

function getSection(section){}

let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(puzzle);
// => true

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p8zzle);
// => false