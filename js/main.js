let jmMainPrevBtn = document.querySelector(".jm-mainPrevBtn");
let jmMainNextBtn = document.querySelector(".jm-mainNextBtn");
let jmMainImgEl = document.querySelectorAll(".jm-mainImgs > li");
let jmCurrentIndex = 0;

function jmUpdateImages(index) {
  jmMainImgEl.forEach((img, i) => {
    img.classList.toggle("on", i === index); // 현재 인덱스에만 'on' 클래스 추가
  });
}

jmMainPrevBtn.addEventListener("click", function () {
  jmCurrentIndex =
    (jmCurrentIndex - 1 + jmMainImgEl.length) % jmMainImgEl.length; // 이전 이미지로 이동 (첫 이미지에서 마지막으로 돌아감)
  jmUpdateImages(jmCurrentIndex);
});

// 다음 버튼 클릭 이벤트
jmMainNextBtn.addEventListener("click", function () {
  jmCurrentIndex = (jmCurrentIndex + 1) % jmMainImgEl.length; // 다음 이미지로 이동 (마지막 이미지에서 처음으로 돌아감)
  jmUpdateImages(jmCurrentIndex);
});

// 초기화
jmUpdateImages(jmCurrentIndex);

// 슬라이드 시키기

document.addEventListener("DOMContentLoaded", () => {
  const slideContainer = document.querySelector(".jb-mainImgWrapper");
  const slides = document.querySelectorAll(".jb-mainImgWrapper > div");
  let index = 0;
  const totalSlides = slides.length;
  const visibleSlides = 3; 
  const slideWidth = 280 + 16;

  function slideImages() {
    index = (index + 1) % (totalSlides - visibleSlides + 1);

    // 슬라이드 이동 적용
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  setInterval(slideImages, 3000);
});

// 기록,리뷰 페이지 버튼누르기

$(document).ready(function () {
  // 모든 버튼에 대한 클릭 이벤트 설정
  $("button").click(function () {
      let season = $(this).attr("id").replace("jb-", "").replace("Btn", ""); 
      $(".jb-reBox:visible").fadeOut(500, function () { 
          $(".jb-reBox." + "jb-reBox" + (["spring", "summer", "autumn", "winter"].indexOf(season) + 1)).fadeIn(500); // 해당 시즌 박스를 페이드인
      });
  });
});
