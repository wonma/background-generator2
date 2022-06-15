var body = document.querySelector('body');
var colorPicker1 = document.querySelector('#favColor1');
var colorPicker2 = document.querySelector('#favColor2');
var hexLeft = document.querySelector('#hexLeft');
var hexRight = document.querySelector('#hexRight');
var initialCol1 = '#e66465';
var initialCol2 = '#9198e5';

function initializeGradient(col1, col2) {
  colorPicker1.value = col1;
  colorPicker2.value = col2;

  body.style.background =
    'linear-gradient(to right,' + col1 + ', ' + col2 + ')';
  hexLeft.textContent = col1;
  hexRight.textContent = col2;
}

function changeColor(location, newValue) {
  if (location === 'left') {
    body.style.background =
      'linear-gradient(to right, ' + newValue + ', ' + colorPicker2.value + ')';
    hexLeft.textContent = newValue;
  } else {
    body.style.background =
      'linear-gradient(to right, ' + colorPicker1.value + ', ' + newValue + ')';
    hexRight.textContent = newValue;
  }
}

initializeGradient(initialCol1, initialCol2);

colorPicker1.addEventListener('input', e => {
  changeColor('left', e.target.value);
});

colorPicker2.addEventListener('input', e => {
  changeColor('right', e.target.value);
});
