AOS.init({ once: true, duration: 800 });

const footer = document.querySelector("footer");

document.addEventListener("scroll", (e) => {
  if (window.innerWidth < 576) {
    footer.style.backgroundPosition = "center";
  } else {
    footer.style.backgroundPosition = `0px ${-(window.scrollY / 10) + 450}px`;
  }
});

const clientFeedbackSection = document.querySelector(
  ".client-feedback-section"
);
const clientFeedbackIndicatorButton = document.querySelector(
  ".client-feedback-indicator-button"
);

const observer1 = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      if (item.target.className.includes("client-feedback-section")) {
        clientFeedbackIndicatorButton.style.background = "#fff";
      }
    } else {
      clientFeedbackIndicatorButton.style.background = "transparent";
    }
  });
});

observer1.observe(clientFeedbackSection);

const footerSection = document.querySelector(".footer-section");
const footerIndicatorButton = document.querySelector(
  ".footer-indicator-button"
);

const observer2 = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      if (item.target.className.includes("footer-section")) {
        footerIndicatorButton.style.background = "#fff";
      }
    } else {
      footerIndicatorButton.style.background = "transparent";
    }
  });
});

observer2.observe(footerSection);

function move(x, y) {
  window.scrollTo(x, y);
}

window.addEventListener("scroll", function (e) {
  console.log(this.window.scrollY);
});
