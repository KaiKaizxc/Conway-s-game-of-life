const grid = document.querySelector(".grid");
let numberOfRows = 9;
let numberOfColumns = 9;

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
            node.addEventListener("click", () => toLive(node));
            grid.appendChild(node);
            nodesList[i][j] = node;
        }
    }
    
}

createGrids()

console.log(nodesList);



function gameOfLife(board) {
    duplicate = [];
    for (let i = 0; i < numberOfRows; i++) {
        duplicate[i] = []
        for (let j = 0; j < numberOfColumns; j++) {
            duplicate[i][j] = board[i][j].innerHTML;
        }
    };

    console.log("test",duplicate);
    
    console.log("Actual",board)

}


gameOfLife(nodesList)