let cards = document.querySelectorAll(".card");
console.log(cards);
// // 1. for 구문 이용
// for (let i = 0; i < cards.length; i++) {
//   cards[i].onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       "card-selected"
//     );
//   };
// }
// // 2. 더 간지나는 forEach 이용
// cards.forEach((c) => {
//   c.onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       "card-selected"
//     );
//   };
// });
// // 3. 덜 헷갈리는 함수 분리
// let cardClickEvt = (e) => {
//   e.currentTarget.classList.toggle(
//     "card-selected"
//   );
// };
// cards.forEach((c) => {
//   c.onclick = cardClickEvt;
// });
// 4. 덜 헷갈리는 함수 분리 + addEventListener
let cardClickEvt = (e) => {
  e.currentTarget.classList.toggle(
    "card-selected"
  );
};
cards.forEach((c) => {
  c.addEventListener("click", cardClickEvt);
});
// https://ko.javascript.info/introduction-browser-events#ref-1221
// https://opentutorials.org/course/1375/6761
