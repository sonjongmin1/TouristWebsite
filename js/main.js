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
