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

const observer1 = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        if (item.target.className.includes("client-feedback-section")) {
          clientFeedbackIndicatorButton.style.background = "#fff";
        }
      } else {
        clientFeedbackIndicatorButton.style.background = "transparent";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer1.observe(clientFeedbackSection);

const footerSection = document.querySelector(".footer-section");
const footerIndicatorButton = document.querySelector(
  ".footer-indicator-button"
);

const observer2 = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        if (item.target.className.includes("footer-section")) {
          resetIndicatorButtonStyle();
          footerIndicatorButton.style.background = "#fff";
        }
      } else {
        resetIndicatorButtonStyle();
        footerIndicatorButton.style.background = "transparent";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer2.observe(footerSection);

function resetIndicatorButtonStyle() {
  const sideIndicatorButton = document.querySelectorAll(
    ".side-indicator-button"
  );
  Array.from(sideIndicatorButton).forEach((button) => {
    button.style.background = "transparent";
  });
}

function move(element, y) {
  resetIndicatorButtonStyle();
  element.style.background = "#fff";

  window.scrollTo(0, y);
}
