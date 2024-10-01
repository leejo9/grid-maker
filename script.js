let rows = 0;
let columns = 1;
let color = 'blue';
function addRow() {
  rows++;
  let table = document.getElementById('dynamicTable');

  const row = document.createElement('tr');
  for (let x = 0; x < columns; x++) {
    const cell = document.createElement('td');
    cell.style.backgroundColor = 'white';
    cell.onclick = function () {
      colorChange(this);
    };

    row.appendChild(cell);
    table.appendChild(row);
  }
}
function addCol() {
  columns++;
  let row = document.getElementById('dynamicTable').getElementsByTagName('tr');
  for (let i = 0; i < rows; i++) {
    const cell = document.createElement('td');
    cell.style.backgroundColor = 'white';

    cell.onclick = function () {
      colorChange(this);
    };
    row[i].appendChild(cell);

  }
}


function selectColor(){
  let col = document.getElementById('selectedColorId').value;
  color = col;
}


function fillU() {
  let table = document.getElementById('dynamicTable');

  for (let x = 0; x < rows; x++) {
    let cells = table.getElementsByTagName('tr')[x].getElementsByTagName('td');


    for (let y = 0; y < cells.length; y++) {
      let cell = cells[y];

      if (cell.style.backgroundColor === 'white') {
        cell.style.backgroundColor = color;
      }
    }
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