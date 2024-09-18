// An HTML table is built with the following tag structure:

function mountainTable(data){
    const table = document.createElement('table')

    // headerrow
    const header = Object.keys(data[0]);
    const headRow = document.createElement('tr');

    header.forEach( columnTitle =>{
        const headCell = document.createElement('th');
        headCell.textContent = columnTitle;
        headRow.append(headCell);
    });
    table.append(headRow);

    //bodyrow
    data.forEach(datalist =>{
        const row = document.createElement('tr');

        header.forEach(text=> {
            const cell = document.createElement('td');
            cell.textContent = datalist[text];
            cell.style.textAlign = 'right';
            row.append(cell);

        });
        table.append(row);
    });
    return table;
};
  
const mountains = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Mont Blanc", height: 4808, place: "France/Italy" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" }
  ];
 

document.getElementById('mountains').append(mountainTable(mountains));


