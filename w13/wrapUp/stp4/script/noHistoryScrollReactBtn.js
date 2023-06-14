const btns = document.querySelectorAll("aside>ol>a");
const whenBtnIsClicked = (e) => {
  const link = btnsLinks.get(e.currentTarget);
  const scrollToTarget = document.querySelector(link);
  scrollToTarget.scrollIntoView();
};
const btnsLinks = new Map();
btns.forEach((eachBtn) => {
  const link = eachBtn.getAttribute("href");
  eachBtn.removeAttribute("href");
  btnsLinks.set(eachBtn, link);
  eachBtn.addEventListener("click", whenBtnIsClicked);
});

const pages = document.querySelectorAll("main section");

const pageBtnMap = new Map();
pages.forEach((eachPage, idx) => {
  pageBtnMap.set(eachPage, btns[idx]);
});

let lastTarget;
const whenPageInView = (observeredPaged) => {
  observeredPaged.forEach((eachPage) => {
    if (eachPage.isIntersecting) {
      const pairedElem = pageBtnMap.get(eachPage.target);
      const toggleTarget = pairedElem.querySelector("li");
      toggleTarget.classList.add("pressed");
      lastTarget?.classList.remove("pressed");
      lastTarget = toggleTarget;
    }
  });
};

const observer = new IntersectionObserver(whenPageInView, {
  root: null,
  rootMargin: "-1px 0px -90% 0px",
  threshold: [0],
});

pages.forEach((eachPage) => {
  observer.observe(eachPage);
});
