
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementsByClassName('myLinks');
  const divyArray = Array.from(x);
  let newArray = divyArray.map((currentValue, index, divyArray) => {
    if (currentValue.style.display === 'block')
    {currentValue.style.display = 'none';}
    else {currentValue.style.display = 'block';}
  });}
