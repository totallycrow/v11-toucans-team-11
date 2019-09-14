
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementsByClassName('myLinks');
  const divyArray = Array.from(x);
  divyArray.forEach(currentValue => {
    currentValue.classList.toggle('show');
  });
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.addEventListener('load', () => {
  if ($(window).width() < 1281) {
    document.getElementById('myFunction').addEventListener('click', myFunction);
  }
});

window.addEventListener('resize', () => {
  if ($(window).width() < 1281) {
    document
      .getElementById('myFunction')
      .removeEventListener('click', myFunction);
    document.getElementById('myFunction').addEventListener('click', myFunction);
  }
});
