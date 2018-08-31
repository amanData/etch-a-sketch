const container = document.getElementById('container');

// create a number of cell to fit in the container div
var gridSize = 16;
for (i = 0; i < gridSize ; i++) {
	for (var j = 0; j < gridSize; j++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		container.appendChild(cell);
	}
}


// WIP trying to adapt cell sizes as a function of the grid size 
const grid = document.querySelectorAll('.cell');
var cellWidth = (1/gridSize)*100;
console.log(cellWidth);
for (var i = 0; i < grid.length; i++) {
	grid[i].style.width = '5.5%';
}


// the grid cell changes color when moused over
grid.forEach((cell) => {
  cell.addEventListener('mouseover', (e) => {
    cell.style.backgroundColor = 'black';
  });
});
