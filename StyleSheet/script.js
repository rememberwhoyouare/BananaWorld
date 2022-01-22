var slideIndex = -1;
showSlides();

function showSlides() {
  let container = document.getElementsByClassName("slideshow-container")[0];
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  renderDots();
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  container.scroll(container.offsetWidth * slideIndex, 0);
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(slide) {
  let container = document.getElementsByClassName("slideshow-container")[0];
  var dots = document.getElementsByClassName("dot");
  renderDots();
  slideIndex = slide;
  container.scroll(container.offsetWidth * slideIndex, 0);
  dots[slideIndex].className += " active";
}

function renderDots() {
  var i;
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
}