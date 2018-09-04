const container = document.getElementById('container');

// create a number of cell to fit in the container div
var gridSize = 14;
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


// WIP trying to adapt cell sizes as a function of the grid size 
const grid = document.querySelectorAll('.cell');
// var cellWidth = (1/gridSize)*100;
// console.log(cellWidth);
// for (var i = 0; i < grid.length; i++) {
// 	grid[i].style.width = grid.[i].style.height;
// }


// the grid cell changes color when moused over
grid.forEach((cell) => {
  cell.addEventListener('mouseover', (e) => {
    cell.classList.add('hovered');
  });
});


// reset button clears the grid
const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) =>
		{
			grid.forEach((cell) => {
				cell.classList.remove('hovered');
			});
		});