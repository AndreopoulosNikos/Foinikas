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

    if (headingPosition < windowHeight / 1.5) {
      heading.classList.add("animated");
    } else {
      heading.classList.remove("animated");
    }
  });
}

checkScrolling();

window.addEventListener("scroll", checkScrolling);
