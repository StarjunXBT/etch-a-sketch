const container = document.querySelector(".container");
let rows = container.childNodes;
const ERASE_BTN = document.getElementById("eraseBtn");
const TWENTY_BTN = document.getElementById("twentyBtn");
const FORTY_BTN = document.getElementById("fortyBtn");

defaultGrid();

function eraseCells() {
  // Get container classname
  const RESIZE = container.className;

  container.replaceChildren();

  switch (RESIZE) {
    case "big":
      createGrid(64 * 64);
      break;
    case "medium":
      createGrid(32 * 32);
      break;
    case "container":
      createGrid(16 * 16);
      break;
  }
}
function twentyThree() {
  container.replaceChildren();
  createGrid(32 * 32);
  container.className = "medium";
}
function fortySix() {
  container.replaceChildren();
  createGrid(64 * 64);
  container.className = "big";
}
function defaultGrid() {
  createGrid(16 * 16);
}
function createGrid(Gridsize) {
  for (r = 0; r < Gridsize; r++) {
    let row = document.createElement("div");
    row.style.border = "1px solid black";
    container.appendChild(row);
  }
  showColor();
}

function showColor() {
  rows.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("cell");
    });
  });
}

ERASE_BTN.onclick = eraseCells;
TWENTY_BTN.onclick = twentyThree;
FORTY_BTN.onclick = fortySix;
