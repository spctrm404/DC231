const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.75],
};

const callback = (aaaaaaaaaa, observer) => {
  aaaaaaaaaa.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add("triggered");
    } else {
      trigger.target.classList.remove(
        "triggered"
      );
    }
  });
};

const gggggg = new IntersectionObserver(
  callback,
  options
);

const animTriggers = document.querySelectorAll(
  ".animTrigger"
);
animTriggers.forEach((aaaa) => {
  gggggg.observe(aaaa);
});
