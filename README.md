Task 1: Here is a sample html file with a submit button. Modify the style of the paragraph text through javascript code.
Sample HTML file:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>
Make the font, font size, and colour of the paragraph text will be changed when you click the button.
Task 2: Write a JavaScript function to get the values of First and Last names of the following form.
Sample HTML file :

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>

Task 3:  Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
Sample HTML file :

<!DOCTYPE html>
<html><head><meta charset=utf-8 />
<title>Change the content of a cell</title>
</head><body>
<table id="myTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
<tr><td>Row3 cell1</td>
<td>Row3 cell2</td></tr>
</table><form>
<input type="button" onclick="changeContent()" value="Change content">
</form></body></html>

Task 4:  Write a JavaScript program to remove items from a drop-down list.
Sample HTML file :

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Remove items from a dropdown list</title>
</head><body><form>
<select id="colorSelect">
<option>Red</option>
<option>Green</option>
<option>White</option>
<option>Black</option>
</select>
<input type="button" onclick="removecolor()" value="Select and Remove">
</form>
</body>
</html>

Task 5: An HTML table is built with the following tag structure:
<table>
<tr>
<th>name</th>
<th>height</th>
<th>place</th>
</tr>
<tr>
<td>Kilimanjaro</td>
<td>5895</td>
<td>Tanzania</td>
</tr>
</table>

For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>). Given  a data set of mountains, an array of objects with name, height, and place properties,generates the DOM structure for a table that enumerates the objects. It should have one column per key, one row per object, plus a header row with <th> elements at the top, listing the column names.
Write this so that columns are automatically derived from the objects, by taking the property names of the first object in data.
Add the resulting table to the element with an id attribute of “mountains” so that it becomes visible in the document. Once you have this working, right-align cells that contain number values by setting their style.textAlign property to “right”