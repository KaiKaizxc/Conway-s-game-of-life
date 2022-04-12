const grid = document.querySelector(".grid");
let numberOfRows = 9;
let numberOfColumns = 9;
const startButton = document.querySelector(".start");
let sumOfNeighbours;

var nodesList= [];

for (let i = 0; i < numberOfRows ; i++) {
    nodesList[i] = [];
    for (let j = 0 ; j < numberOfColumns ; j++) {
        nodesList[i][j] = 0;
    }
}



function toLive(button) {
    button.innerHTML = "1";
    button.classList.add("live");

}
function createGrids() {
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfColumns; j++) {

            
            const node = document.createElement("div");
            node.setAttribute("id", i+1);
            node.classList.add("node");
            node.innerHTML = "0";
            node.addEventListener("mouseover", () => toLive(node));
            grid.appendChild(node);
            nodesList[i][j] = node;
        }
    }
    
}

createGrids()

console.log(nodesList);



//============================== start button configuration here ==============================

startButton.addEventListener('click', ()=> gameOfLife(nodesList));


// ================ Game deployed here =====================================


function checkNeighbours(duplicatedBoard, row, column) {
    var neighbours = [];

    // if it is live cell then add to neighbours
    //check all surrounding 5~8 neighbours
    
    //check left and right 
    if (column > 0 && duplicatedBoard[row][column-1] == 1) {

        neighbours.push(1);
    }
        
        
    
    if (column < (duplicatedBoard[0]).length - 1 && duplicatedBoard[row][column+1] == 1) {
        neighbours.push(1);
    }
        
    
    //check top and bottom 
    
    if (row > 0 && duplicatedBoard[row-1][column] == 1) {
        neighbours.push(1);
    }
        
        
        
    if (row < (duplicatedBoard[0]).length - 1 && duplicatedBoard[row+1][column] == 1) {
        neighbours.push(1);
    }
        
    
    //check diagonals 
    
    //top diagonal 
    //top left diagonal
    
    if (column > 0 && row > 0 && duplicatedBoard[row-1][column-1] == 1) {
        neighbours.push(1);
    }
        
    
    
    //top right diagonal
    if (column < (duplicatedBoard[0]).length - 1 && row > 0 && duplicatedBoard[row-1][column+1] == 1) {
        neighbours.push(1);
    } 
        
    
    //bottom left 
    if (column > 0 && row < (duplicatedBoard[0]).length - 1 && duplicatedBoard[row+1][column-1] == 1) {
        neighbours.push(1);
    }
        
    
    //bottom right
    
    if (column < (duplicatedBoard[0]).length - 1 && row < (duplicatedBoard).length - 1 && duplicatedBoard[row+1][column+1] == 1) {
        neighbours.push(1);
    }

    return neighbours;


}
function gameOfLife(board) {
    duplicate = [];
    for (let i = 0; i < numberOfRows; i++) {
        duplicate[i] = []
        for (let j = 0; j < numberOfColumns; j++) {
            duplicate[i][j] = board[i][j].innerHTML;
        }
    };

    // first instance of the game, keep iterating through the whole board 

    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0 ; j < numberOfColumns ; j++) {
            neighbours = checkNeighbours(duplicate, i, j);
            if (neighbours.length > 0) {
                sumOfNeighbours = neighbours.reduce((previousValue, currentValue) => previousValue + currentValue);
                console.log(sumOfNeighbours);

            }
            else {
                sumOfNeighbours = 0;
            }

            if (sumOfNeighbours == 2) {
                continue; // this lives on 
            }

            if (sumOfNeighbours == 3) {
                board[i][j].innerHTML = "1";
                board[i][j].classList.add("live");
            }
            else {
                board[i][j].innerHTML = "0";
                board[i][j].classList.remove("live");
            }

        }
    }

}


