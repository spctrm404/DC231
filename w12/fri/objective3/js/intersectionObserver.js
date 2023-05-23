let options = {
  root: null,
  rootMargin: "0px",
  threshold: [1],
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
    } else {
    }
  });
}, options);

let targets = document.querySelectorAll(".content");
targets.forEach((target) => {
  observer.observe(target);
});
