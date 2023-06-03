const indicator = document.querySelector(".progressBar .indicator");
const main = document.querySelector("main");

document.onscroll = () => {
  const mainBCR = main.getBoundingClientRect();
  //   console.log("mainBCR", mainBCR);
  const progress = (1 - mainBCR.bottom / mainBCR.height) * 100;
  //   console.log("progress", progress);
  const right = 100 - progress;
  if (right <= 100 && right >= 0) indicator.style.right = right + "%";
};
