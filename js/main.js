/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
<<<<<<< HEAD
function myFunction() {
  var x = document.getElementsByClassName('myLinks');
  const divyArray = Array.from(x);
  divyArray.forEach(currentValue => {
    currentValue.classList.toggle('show');
  });
=======
if ($(window).width() < 1281) {
  function myFunction() {
    var x = document.getElementsByClassName("myLinks");
    const divyArray = Array.from(x);
    let newArray = divyArray.map((currentValue, index, divyArray) => {
      if (currentValue.style.display === "block") {
        currentValue.style.display = "none";
      } else {
        currentValue.style.display = "block";
      }
    });
  }
>>>>>>> development2
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
<<<<<<< HEAD
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
=======
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
>>>>>>> development2
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
<<<<<<< HEAD
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
=======
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Navbar Mobile Menu
const hamburgerIcon = document.querySelector(".hamburger-menu");

const menuDiv = document.querySelector(".mobile-overlay");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", closeMenu);

function toggleMenu() {
  menuDiv.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuDiv.style.display = "none";
  document.body.style.overflow = "visible";
}
>>>>>>> development2
