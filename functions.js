function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  data = loadTable('dict.csv', 'csv');
}

function loadData() {
  print(data.getRowCount() + ' total rows in table');
  print(data.getColumnCount() + ' total columns in table');
  print(data.getColumn('name'));
  for (let r = 0; r < data.getRowCount(); r++)
    for (let c = 0; c < data.getColumnCount(); c++) {
      bubbles.push(new Bubble(random(width), random(height), random(10, 20), data.getString(r, c)));
      //bubbles.push(new Bubble(x, y, diameter, label));
    }
}

function mousePressed() {
  let diameter = random(40, 80);
  let label = 'New Label';

  // Append the new JSON bubble object to the array
  bubbles.push(new Bubble(mouseX, mouseY, diameter, label));

  // Prune Bubble Count if there are too many
  if (bubbles.length > 10) {
    bubbles.shift(); // remove first item from array
  }
}