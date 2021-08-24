// Import stylesheets
import './style.css';
var data = [{
  z: [[22, 0,0,0,0], [0, 33, 0, 0, 0], [0,0,44,0,0], [0,0,0,55,0], [0,0,0,0,66]],
  x: [18, 19, 20, 25, 30],
  y: [73, 76, 79, 87, 99],
  type: 'contour'
}];

var layout = {
  title: 'Setting the X and Y Coordinates in a Contour Plot'
};

Plotly.newPlot('myDiv', data, layout);

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;