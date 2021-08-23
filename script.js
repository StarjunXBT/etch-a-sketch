const container = document.getElementById("container");
let rows = container.childNodes

function defaultGrid() {
    createRows(16);
    createColumns(16);
}
function createRows(rowsNum) {
    for (r = 0; r < 16; r++) {
        let row = document.createElement('div');
        row.style.border = "1px solid black";
        container.appendChild(row);
    }
}
function createColumns(columnsNum) {
    for (i = 0; i < 16; i++) {
        createRows(16);
    }
}

defaultGrid();

console.log(container.childNodes)
rows.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('cell')
    })
  })