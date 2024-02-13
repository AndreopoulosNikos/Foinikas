"use strict";
// add smooth scrolling
const navLinks = document.querySelectorAll(".navigation");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// add transition effect on scroll on headings
const animateHeading = document.querySelectorAll("h1");
function checkScrolling() {
  animateHeading.forEach(function (heading) {
    const headingPosition = heading.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (headingPosition < windowHeight / 1.1) {
      heading.classList.add("animated");
    } else {
      heading.classList.remove("animated");
    }
  });
}

checkScrolling();

window.addEventListener("scroll", checkScrolling);

//Adding slideshow functionality
let currentSlideLoc = 1;
let currentSlideRooms = 1;

const slidesImages = document.querySelectorAll(".slidesImg");

const nextButton = document.querySelectorAll(".next");
const prevButton = document.querySelectorAll(".previous");

const imageLoc = document.querySelector("#locImg");
const imageRooms = document.querySelector("#roomsImg");

function addSlideIndex(buttonId, direction) {
  if (buttonId === "nextLoc" || buttonId === "prevLoc") {
    if (currentSlideLoc == 4 && direction == 1) {
      currentSlideLoc = 1;
    } else if (currentSlideLoc == 1 && direction == -1) {
      currentSlideLoc = 4;
    } else {
      currentSlideLoc += direction;
    }
  } else if (buttonId === "nextRoom" || buttonId === "prevRoom") {
    if (currentSlideRooms == 12 && direction == 1) {
      currentSlideRooms = 1;
    } else if (currentSlideRooms == 1 && direction == -1) {
      currentSlideRooms = 12;
    } else {
      currentSlideRooms += direction;
    }
  }
}

nextButton.forEach(function (element) {
  element.addEventListener("click", function () {
    addSlideIndex(element.id, 1);
    setImageLoc(element.id);
    console.log(element.id);
    console.log(currentSlideLoc);
    console.log(currentSlideRooms);
  });
});

prevButton.forEach(function (element) {
  element.addEventListener("click", function () {
    addSlideIndex(element.id, -1);
    setImageLoc(element.id);
    console.log(element.id);
    console.log(currentSlideLoc);
    console.log(currentSlideRooms);
  });
});

function setImageLoc(buttonId) {
  if (buttonId === "nextLoc" || buttonId === "prevLoc") {
    let imageLocSource = "Images/Location/Image" + currentSlideLoc + ".jpg";
    imageLoc.setAttribute("src", imageLocSource);
    imageLoc.classList.add("fade");
    setTimeout(() => {
      imageLoc.classList.remove("fade");
    }, 1500);
  } else if (buttonId === "nextRoom" || buttonId === "prevRoom") {
    let imageRoomsSource = "Images/Rooms/Image" + currentSlideRooms + ".jpg";
    imageRooms.setAttribute("src", imageRoomsSource);
    imageRooms.classList.add("fade");
    setTimeout(() => {
      imageRooms.classList.remove("fade");
    }, 1500);
  }
}
