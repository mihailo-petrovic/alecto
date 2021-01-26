const slides = document.querySelectorAll(".carouselItem");
const totalSlides = slides.length;
const carouselNav = document.getElementById("carouselNav");
const hamLabel = document.getElementById("label-ham");
const check = document.getElementById("check");
const heading = document.querySelector(".heading");
const menu = document.getElementById("meni");
let counter = 0;

slideNav();

function display(c) {
  for (let i = 0; i < totalSlides; i++) {
    i === c
      ? slides[i].classList.add("visible")
      : slides[i].classList.remove("visible");
  }
}

window.onload = () => display(counter);

function next() {
  if (counter < totalSlides - 1) {
    counter++;
  } else {
    counter = 0;
  }
  display(counter);
}

function prev() {
  if (counter === 0) {
    counter = totalSlides - 1;
  } else {
    counter--;
  }
  display(counter);
}

function slideNav() {
  for (let slide = 0; slide < totalSlides; slide++) {
    let span = document.createElement("span");
    if (slide === counter) {
      span.classList.add("nav-current");
    }
    carouselNav.append(span);
    span.addEventListener("click", function () {
      counter = slide;
      display(slide);
      display(slide);
    });
  }
}

setInterval(next, 5000);

let x = window.matchMedia("(max-width: 600px)");
if(x.matches){
  menu.childNodes.forEach(m => {
    m.addEventListener("click", () => {
      // menu.style.transform = "translateY(-100px)";
      // hamLabel.style.transform = "translateY(20px)";
      check.checked = false;
    })
  });
}