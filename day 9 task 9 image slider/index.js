// image file name
const images = [
  { name: "flag.jpg", alt: "Prayer flag" },
  { name: "u.jpg", alt: "u curve road" },
  { name: "rice.jpg", alt: "Rice field" },
  { name: "dog.jpg", alt: "Dog" },
  { name: "choco.jpg", alt: "Chockalate" },
  { name: "mountain.jpg", alt: "Mountain" },
  { name: "genz.webp", alt: "Genz Woman Power" },
];

// getting dom image
const image = document.getElementById("img");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

// counter of index/number to track array position
let counter = 0;
// console.log(images[i]);
// console.log(typeof images[i]);

// src attribute value set to image appended with folder name using template literal
image.setAttribute("src", `images/${images[counter].name}`);
image.setAttribute("alt", `${images[counter].alt}`);

// function for nextImage slider
function nextImage() {
  // preventing from increment when it is at array length -1
  if (counter < images.length - 1) {
    // increment index of array count
    counter++;
  } else {
    // for loop to bring 1st image
    counter = 0;
  }
  //   setting image with array count
  image.setAttribute("class", "img-slide");
  image.setAttribute("src", `images/${images[counter].name}`);
  image.setAttribute("alt", `${images[counter].alt}`);
  indicators();
  setTimeout(() => {
    // removing class 'img-slide' from image dom.
    if (image.hasAttribute("class", "img-slide")) {
      image.removeAttribute("class", "img-slide");
    }
  }, 800);
}
// event call when next button is clicked
btnNext.addEventListener("click", nextImage);

// logic for previous button
function prevImage() {
  if (counter === 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  image.setAttribute("src", `images/${images[counter].name}`);
  image.setAttribute("alt", `${images[counter].alt}`);
  image.setAttribute("class", `img-preslide`);
  indicators();
  // for removing class after 800 millisecond for preapplied class
  setTimeout(() => {
    if (image.hasAttribute("class", "img-preslide")) {
      image.removeAttribute("class", "img-preslide");
    }
  }, 800);
}
btnPrev.addEventListener("click", prevImage);

// Auto Sliding
function autoSlide() {
  interval = setInterval(() => {
    nextImage();
    indicators();
  }, 3000);
}
autoSlide();
// access of main container
const container = document.getElementById("container");
// to stop auto scroll when mouse over image
container.addEventListener("mouseover", function () {
  clearInterval(interval);
});
// to continue auto scroll when mouse out of image.
container.addEventListener("mouseout", autoSlide);

// Drag to slide function
const slider = document.querySelector(".slider");

let isDragging = false;
let startX;

// Mouse events
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  image.style.cursor = "grabbing";
});
slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  console.log("moving x cord", e.clientX);
  const distanceX = e.clientX - startX;
  console.log("moving disX cord", distanceX);
  if (distanceX < -50) {
    nextImage();
    isDragging = false; // prevent multiple triggers
  }
  if (distanceX > 50) {
    prevImage();
    isDragging = false;
  }
});
slider.addEventListener("mouseup", () => {
  isDragging = false;
  image.style.cursor = "grab";
});

// Indicators;
const dotContainer = document.querySelector(".dotsContainer");
for (let j = 0; j < images.length; j++) {
  dotContainer.insertAdjacentHTML(
    "beforeend",
    `<div class='dot' attr=${j} onclick='switchImage(this)'></div>`
  );
}
let dots = document.querySelectorAll(".dot");
console.log(dots);
function indicators() {
  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  dots[counter].className += " active";
}
// Add click event to the indicator
// function switchImage(currentImage) {
//   currentImage.classList.add("active");
//   let imageId = currentImage.getAttribute("attr");
//   // if (imageId > counter) {
//   //   nextImage();
//   // } else if (imageId === counter) {
//   //   return;
//   // } else {
//   //   prevImage(counter);
//   // }
//   indicators();
// }
