const container = document.getElementById('container');
const getGridSize = document.querySelector('#gSize');
const reset = document.querySelector('#reset');


// function that creates a number of cell to fit in the container div
function makeGrid(gridSize){
	var gridSize = gridSize;

	for (i = 0; i < gridSize ; i++) {
		const line = document.createElement('div')
		line.classList.add('line');
		container.appendChild(line);
		for (var j = 0; j < gridSize; j++) {
			const cell = document.createElement('div');
			cell.classList.add('cell');
			line.appendChild(cell);
		}
	}
}

makeGrid(16);


// the grid cell changes color when moused over
var grid = document.querySelectorAll('.cell');
function addsHovered() {
	this.classList.add('hovered');
}
grid.forEach((cell) => {
  cell.addEventListener('mouseover', addsHovered);
});


// function that clears the grid
function clearGrid(){
	grid.forEach((cell) => {
		cell.classList.remove('hovered');
	});
}

// reset button clears the grid
reset.addEventListener('click', clearGrid);

// function to change grid size
var lines = document.querySelectorAll('.line');
function changeGridSize() {
	// asks user in a prompt what grid size they want
	var gridsize = parseInt(window.prompt('Please, enter a new grid size (for example, 64 will draw a 64x64 sized grid'));
	while (isNaN(gridsize) || gridsize == 0 || gridsize > 100) {
		gridsize = parseInt(window.prompt('Please, enter a number between 1 and 100'));
	}

	// erases the old grid
	lines = document.querySelectorAll('.line');
	lines.forEach((line) => {
		container.removeChild(line);
	});
	// makes a new grid
	makeGrid(gridsize);
	// adds event listeners on each cell
	grid = document.querySelectorAll('.cell');
	grid.forEach((cell) => {
		cell.addEventListener('mouseover', addsHovered);
	  });
}
// event listener on grid size button to call the changeGridSize function
getGridSize.addEventListener('click', changeGridSize);