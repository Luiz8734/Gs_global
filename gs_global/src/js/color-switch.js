function changeBackground(color) {
  document.body.style.background = color;

  if (color === 'lightyellow') {
    document.body.style.color = 'black';
  }
  if (color === 'black') {
    document.body.style.color = 'white';
  }
  if (color === 'lightgreen') {
    document.body.style.color = 'black';
  }
  if (color !== 'lightyellow' && color !== 'black' && color !== 'lightgreen') {
    document.body.style.color = 'gray';
  }
}