const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.75],
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let animatingTargets = entry.target.querySelectorAll(".content");
      animatingTargets.forEach((animatingTarget) => {
        animatingTarget.classList.add("animate");
      });
    } else {
      let animatingTargets = entry.target.querySelectorAll(".content");
      animatingTargets.forEach((animatingTarget) => {
        animatingTarget.classList.remove("animate");
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const observingTargets = document.querySelectorAll("section");
observingTargets.forEach((observingTarget) => {
  observer.observe(observingTarget);
});
