const images = document.querySelectorAll(".sp3-galImgBox");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.getElementById("closeBtn");

const imageDescriptions = {
  1: "첫 번째 이미지 설명입니다.",
  2: "두 번째 이미지 설명입니다.",
  3: "세 번째 이미지 설명입니다.",
  4: "네 번째 이미지 설명입니다.",
  5: "다섯 번째 이미지 설명입니다.",
  6: "여섯 번째 이미지 설명입니다.",
  7: "일곱 번째 이미지 설명입니다.",
  8: "여덟 번째 이미지 설명입니다.",
  9: "아홉 번째 이미지 설명입니다.",
};

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    modal.style.display = "flex";
    modalImg.style.backgroundImage = `url('img${index}.jpg')`;
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
