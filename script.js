const container = document.getElementById("container");
let rows = container.childNodes
eraseBtn = document.querySelector('#eraseBtn')

defaultGrid();
eraseCells();

function eraseCells() {
    container.replaceChildren();
    createGrid(16*16);
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
