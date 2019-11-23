const rows = 16;
const columns = 16;

window.addEventListener("DOMContentLoaded", e => {
    createGridContainer();
    createBoard(rows, columns);
});

const main = document.querySelector(".container");
const resetButton = document.getElementById("resetButton");
const randomColorsBg = document.getElementById("randomBg");
const randomColors = document.getElementById("randomColor");

// Create another container inside the main container
// and create elements inside it.
// create boxes

const createGridContainer = () => {
    const content = document.createElement("div");
    content.classList = "container";
    content.setAttribute("id", "gridContainer");
    main.appendChild(content);
};

const createBoard = (rows, columns) => {
    const gridContainer = document.querySelector(".container");
    gridContainer.style.setProperty("--rows", rows);
    gridContainer.style.setProperty("--columns", columns);
    let gridNumbers = rows * columns;

    createBoxes(gridNumbers);
};

const createBoxes = numbers => {
    for (let i = 0; i < numbers; i++) {
        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "gridItem");
        gridItem.setAttribute("id", i);

        document.querySelector("#gridContainer").appendChild(gridItem);
        document.getElementById(i).addEventListener("mouseover", e => {
            gridItem.style.cssText = "background: red";
        });
    }
};

resetButton.addEventListener("click", e => {
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach(item => {
        item.style.background = "";
    });
    e.preventDefault();
});

randomColorsBg.addEventListener("click", e => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;

    const grid = document.querySelectorAll(".gridItem");
    grid.forEach(item => {
        item.style.background = bgColor;
    });
});

randomColors.addEventListener("click", e => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;

    //TODO : Add Random Colors
});

// const randomColor = () => {
//     const x = Math.floor(Math.random() * 256);
//     const y = Math.floor(Math.random() * 256);
//     const z = Math.floor(Math.random() * 256);
//     return `rgb(${x}, ${y}, ${z})`;
// };
