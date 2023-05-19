let aBox = document.getElementById("box1");
// aBox.onclick = function () {
//   aBox.classList.toggle("box--clicked");
// };
// function () {} 는 () => {} 와 같다.
aBox.onclick = () => {
  aBox.classList.toggle("box--clicked");
};
