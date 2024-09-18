function changeContent() {
    // Get the row, column, and the new content from the user
    let row = prompt("Enter the row number (starting from 1):");
    let column = prompt("Enter the column number (starting from 1):");
    let newContent = prompt("Enter the new content for the cell:");

    // Convert row and column to zero-based index
    row = parseInt(row) - 1;
    column = parseInt(column) - 1;

    // Get the table
    let table = document.getElementById("myTable");

    // Check if the row and column are within the bounds of the table
    if (row >= 0 && row < table.rows.length && column >= 0 && column < table.rows[row].cells.length) {
        // Update the cell content
        table.rows[row].cells[column].innerHTML = newContent;
    } else {
        alert("Invalid row or column number!");
    }
}

