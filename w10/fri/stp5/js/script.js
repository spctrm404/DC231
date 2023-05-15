let elem = document.getElementById("boxA");
console.log(elem);
elem.onclick = () => {
  elem.classList.toggle("box--clicked");
};
