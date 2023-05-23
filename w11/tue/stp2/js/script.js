let aCard = document.querySelector(".card");
console.log(aCard);
aCard.onclick = (e) => {
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
  e.currentTarget.classList.toggle(
    "card-selected"
  );
};

// let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
// elem.onclick = function () {}
