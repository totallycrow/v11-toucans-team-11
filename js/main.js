
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
if ( $(window).width() < 1281) {
function myFunction() {
  var x = document.getElementsByClassName('myLinks');
  const divyArray = Array.from(x);
  let newArray = divyArray.map((currentValue, index, divyArray) => {
    if (currentValue.style.display === 'block')
    {currentValue.style.display = 'none';}
    else {currentValue.style.display = 'block';}
  });}}

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
