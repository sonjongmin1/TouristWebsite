const slideBox = document.querySelector(".sp1-sec1-img-Box");
const leftButton = document.querySelector(".sp-slide-left");
const rightButton = document.querySelector(".sp-slide-right");
const slideItems = document.querySelectorAll(".sp1-sec1-img-Box > li");

// 슬라이드 관련 변수
const slideItemWidth = 430; // li 요소의 너비 (마진 포함)
const totalSlides = slideItems.length;
const visibleSlides = 3; // 한 화면에 보이는 슬라이드 개수
let currentIndex = 0;
const slideBox = document.querySelector(".sp1-sec1-img-Box");
const leftButton = document.querySelector(".sp-slide-left");
const rightButton = document.querySelector(".sp-slide-right");
const slideItems = document.querySelectorAll(".sp1-sec1-img-Box > li");

// 슬라이드 관련 변수
const slideItemWidth = 430; // li 요소의 너비 (마진 포함)
const totalSlides = slideItems.length;
const visibleSlides = 3; // 한 화면에 보이는 슬라이드 개수
let currentIndex = 0;
let isSliding = false; // 슬라이드 중인지 확인하는 플래그

// 초기 클론 생성 (무한 슬라이드 구현)
for (let i = 0; i < visibleSlides; i++) {
  const firstClone = slideItems[i].cloneNode(true);
  const lastClone = slideItems[totalSlides - 1 - i].cloneNode(true);
  slideBox.appendChild(firstClone);
  slideBox.insertBefore(lastClone, slideBox.firstChild);
}

// 초기 슬라이드 위치 설정
const initialOffset = -slideItemWidth * visibleSlides;
slideBox.style.transform = `translateX(${initialOffset}px)`;

// 슬라이드 이동 함수
function moveSlide(direction) {
  if (isSliding) return; // 슬라이드 중일 때는 동작하지 않음
  isSliding = true; // 슬라이드 시작

  if (direction === "left") {
    currentIndex--;
  } else if (direction === "right") {
    currentIndex++;
  }

  slideBox.style.transition = "transform 0.5s ease";
  slideBox.style.transform = `translateX(${
    initialOffset + currentIndex * -slideItemWidth
  }px)`;

  // 무한 슬라이드 처리
  setTimeout(() => {
    if (currentIndex < 0) {
      slideBox.style.transition = "none";
      currentIndex = totalSlides - visibleSlides;
      slideBox.style.transform = `translateX(${
        initialOffset + currentIndex * -slideItemWidth
      }px)`;
    } else if (currentIndex >= totalSlides) {
      slideBox.style.transition = "none";
      currentIndex = 0;
      slideBox.style.transform = `translateX(${initialOffset}px)`;
    }
    isSliding = false; // 슬라이드 끝
  }, 500);
}

// 버튼 이벤트 연결
leftButton.addEventListener("click", () => {
  if (!isSliding) moveSlide("left");
});
rightButton.addEventListener("click", () => {
  if (!isSliding) moveSlide("right");
});

let isSliding = false; // 슬라이드 중인지 확인하는 플래그

// 초기 클론 생성 (무한 슬라이드 구현)
for (let i = 0; i < visibleSlides; i++) {
  const firstClone = slideItems[i].cloneNode(true);
  const lastClone = slideItems[totalSlides - 1 - i].cloneNode(true);
  slideBox.appendChild(firstClone);
  slideBox.insertBefore(lastClone, slideBox.firstChild);
}

// 초기 슬라이드 위치 설정
const initialOffset = -slideItemWidth * visibleSlides;
slideBox.style.transform = `translateX(${initialOffset}px)`;

// 슬라이드 이동 함수
function moveSlide(direction) {
  if (isSliding) return; // 슬라이드 중일 때는 동작하지 않음
  isSliding = true; // 슬라이드 시작

  if (direction === "left") {
    currentIndex--;
  } else if (direction === "right") {
    currentIndex++;
  }

  slideBox.style.transition = "transform 0.5s ease";
  slideBox.style.transform = `translateX(${
    initialOffset + currentIndex * -slideItemWidth
  }px)`;

  // 무한 슬라이드 처리
  setTimeout(() => {
    if (currentIndex < 0) {
      slideBox.style.transition = "none";
      currentIndex = totalSlides - visibleSlides;
      slideBox.style.transform = `translateX(${
        initialOffset + currentIndex * -slideItemWidth
      }px)`;
    } else if (currentIndex >= totalSlides) {
      slideBox.style.transition = "none";
      currentIndex = 0;
      slideBox.style.transform = `translateX(${initialOffset}px)`;
    }
    isSliding = false; // 슬라이드 끝
  }, 500);
}

// 버튼 이벤트 연결
leftButton.addEventListener("click", () => {
  if (!isSliding) moveSlide("left");
});
rightButton.addEventListener("click", () => {
  if (!isSliding) moveSlide("right");
});
