const btns = document.querySelectorAll(".pageBtn");
let lastBtn = null;

const scrollIntoView = (dom) => {
  // 부모 요소 선택
  const parentElem = dom.offsetParent;

  // 스크롤할 양을 계산하기 위해 자식 요소의 위치와 크기 정보 가져오기
  const childRect = dom.getBoundingClientRect();

  // 부모 요소의 위치와 크기 정보 가져오기
  const parentRect = parentElem.getBoundingClientRect();

  // 자식 요소가 완전히 보이도록 스크롤할 양 계산
  let scrollAmt;

  if (childRect.left < parentRect.left) {
    // 자식 요소가 부모 요소의 왼쪽을 벗어났을 때
    scrollAmt = childRect.left - parentRect.left - 32;
  } else if (childRect.right > parentRect.right) {
    // 자식 요소가 부모 요소의 오른쪽을 벗어났을 때
    scrollAmt = childRect.right - parentRect.right + 32;
  }

  // 스크롤할 양이 존재할 때만 스크롤 수행
  if (scrollAmt !== undefined && scrollAmt !== 0) {
    // 가로로 스크롤하기
    parentElem.scrollBy({
      top: 0,
      left: scrollAmt,
      behavior: "smooth", // 스크롤 애니메이션 적용 (선택 사항)
    });
  }
};

btns.forEach((eachBtn) => {
  eachBtn.onclick = (e) => {
    console.log("target", e.target);
    console.log("cTarget", e.currentTarget);
    lastBtn?.classList.remove("pressed");
    e.currentTarget.classList.add("pressed");
    // e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    scrollIntoView(e.currentTarget);
    lastBtn = e.currentTarget;
  };
});
