const container = document.getElementById('container');

// create a number of cell to fit in the container div
var gridSize = 16;
var i;
var j;
for (i = 0; i < gridSize ; i++) {
	for (var j = 0; j < gridSize; j++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		container.appendChild(cell);
	}
}


// WIP trying to adapt cell sizes as a function of the grid size 
const grid = document.querySelector('.cell');
var cellWidth = 1/gridSize;
console.log(cellWidth);
grid.style.width = cellWidth;   
