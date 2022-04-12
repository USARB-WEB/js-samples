const boardContainer = document.createElement("div");
boardContainer.id = "board";

let isBlack = true;
for(let i = 1; i <= 64; i++){
    const cell = document.createElement('div');
    cell.classList.add("cell");
    isBlack = !isBlack;
    if(i % 8 === 1){
        isBlack = !isBlack;
    }
    cell.classList.add(isBlack ? "black" : "white");
    boardContainer.append(cell);
}
document.body.append(boardContainer);