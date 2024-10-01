let rows = 0;
let columns = 1;
let color = 'blue';
function addRow() {
  rows++;
  let table = document.getElementById('dynamicTable');

  const row = document.createElement('tr'); 
  for (let x = 0; x < columns; x++) {
    const cell = document.createElement('td');
    cell.onclick = function () {
      colorChange(this);
    };

    row.appendChild(cell);
    table.appendChild(row);
  }
}

function resetTable() {
  table = document.getElementById('dynamicTable');
  table.innerHTML = '';
  rows = 0;
  columns = 1;
}

function colorChange(cell) {
  cell.style.backgroundColor = color;
}