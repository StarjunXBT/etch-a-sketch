const container = document.querySelector(".container");
let rows = container.childNodes
eraseBtn = document.querySelector('#eraseBtn')
twentyBtn = document.querySelector('#twentyBtn')
fortyBtn = document.querySelector('#fortyBtn')

defaultGrid();

function eraseCells() {
    container.replaceChildren();
    createGrid(16*16);
    container.className = 'container'
}
function twentyThree() {
    container.replaceChildren();
    createGrid(32*32);
    container.className = 'medium'
}
function fortySix() {
    container.replaceChildren();
    createGrid(64*64);
    container.className = 'big'
}
function defaultGrid() {
    createGrid(16*16);
}
function createGrid(Gridsize) {
    for (r = 0; r < Gridsize; r++) {
        let row = document.createElement('div');
        row.style.border = "1px solid black";
        container.appendChild(row);
    }
    showColor();
}

function showColor() {
    rows.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('cell')
        })
      })
}

eraseBtn.onclick = eraseCells;
twentyBtn.onclick = twentyThree;
fortyBtn.onclick = fortySix;
