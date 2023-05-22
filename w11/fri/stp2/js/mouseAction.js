// let box = document.querySelector("#box2");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

// let box = document.querySelector(".box");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// boxes.forEach(function (grass) {
//   grass.onclick = () => {
//     grass.classList.toggle("boxSelected");
//   };
// });
boxes.forEach((amuirum) => {
  amuirum.onclick = () => {
    amuirum.classList.toggle("boxSelected");
  };
});
