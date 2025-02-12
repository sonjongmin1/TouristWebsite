// const images = document.querySelectorAll(".sp3-galImgBox");
// const modal = document.getElementById("modal");
// const modalImg = document.querySelector(".modal-img");
// const modalText = document.querySelector(".modal-text");
// const closeBtn = document.getElementById("closeBtn");

// const imageDescriptions = {
//   1: "첫 번째 이미지 설명입니다.",
//   2: "두 번째 이미지 설명입니다.",
//   3: "세 번째 이미지 설명입니다.",
//   4: "네 번째 이미지 설명입니다.",
//   5: "다섯 번째 이미지 설명입니다.",
//   6: "여섯 번째 이미지 설명입니다.",
//   7: "일곱 번째 이미지 설명입니다.",
//   8: "여덟 번째 이미지 설명입니다.",
//   9: "아홉 번째 이미지 설명입니다.",
// };

// images.forEach((img) => {
//   img.addEventListener("click", (e) => {
//     const index = e.target.dataset.index;
//     modal.style.display = "flex";
//     modalImg.style.backgroundImage = `url('img${index}.jpg')`;
//     modalText.textContent = imageDescriptions[index];
//   });
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });
const images = document.querySelectorAll(".sp3-galImgBox");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.getElementById("closeBtn");

const modalImagePaths = {
  1: "../img/spring-sub1/springSub2-flower.jpg",
  2: "../img/spring-sub1/springSub2-3.1.jpg",
  3: "../img/spring-sub1/springSub2-nari.jpg",
  4: "../img/spring-sub1/springSub2-sanNflower.jpg",
  5: "../img/spring-sub1/springSub2-fam.jpg",
  6: "../img/spring-sub1/springSub2-school.jpg",
};

const imageDescriptions = {
  1: "봄에는 많은 꽃들이 피어난다. 색색의 아름다운 꽃들을 즐기기 위해 많은 봄꽃 축제들이 열리곤 한다.",
  2: "3.1절은 한국의 5대 국경일 중 하나로, 일본의 식민통치에 항거하고, 독립선언서를 발표하여 한국의 독립 의사를 세계 만방에 알린 날을 기념하는 날이다.",
  3: "3월은 학생들이 1학년씩 진급하여, 새로운 분위기 속에서 학교생활을 시작하는 시기입니다. 첫 등교날에 볼수 있는 학교을 가득 채운 개나리는 학생들의 새학기에 대한 기대감을 표현한다. ",
  4: "봄은 메말라있던 산과 들이 생명을 머금고 가득 꽃들과 새싹들이 피어나는 계절이다. 화사하게 피어나 꽃들을 보기 위해 사람들은 산이나 들로 나들이를 나가곤한다.",
  5: "5월은 가정의 달로, 어린이날과 어버이날을 맞아 많은 사람들이 즐거운 분위기를 만끽합니다. 봄이 오며 피어난 꽃들 속에서 가족뿐만 아니라 연인들 또한 5월의 봄을 즐깁니다.",
  6: "벚꽃의 꽃말은 장난삼아 중간고사라고도 한다. 벚꽃이 만개하는 4월과 5월에는 한국의 학생들의 중간고사(시험)이 항상 있기 때문이다 ",
};

images.forEach((imgBox) => {
  imgBox.addEventListener("click", (e) => {
    const index = imgBox.dataset.index;
    const modalImgSrc = modalImagePaths[index];

    modal.style.display = "flex";
    modalImg.style.backgroundImage = `url('${modalImgSrc}')`;
    modalText.textContent = imageDescriptions[index];
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
