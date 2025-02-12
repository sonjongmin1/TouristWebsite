const images = document.querySelectorAll(".sp3-galImgBox");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.getElementById("closeBtn");

const modalImagePaths = {
  1: "../img/autumn/가을야구1.jpg",
  2: "../img/autumn/추석1.jpg",
  3: "../img/autumn/수능1.jpg",
  4: "../img/autumn/한글날1.jpg",
  5: "../img/autumn/독서1.jpg",
  6: "../img/autumn/할로윈1.jpg",
};

const imageDescriptions = {
  1: "정규시즌이 끝나고 최종 우승을 결정하기 위한 포스트시즌이 가을에 펼쳐진다. 야구팬들은 본인의 팀이 가을에도 야구를 하기를 무척이나 바라고 있으며 모든 팀들의 1년목표에는 가을에 야구하는 것이다.",
  2: "추석은 음력 8월 15일이기에 보통 가을에 맞이하는 한민족의 명절이다. 전통적으로 대한민국에서 가장 큰 명절중 하나로 추수를 하기 전, 농사의 중요 고비를 넘겼을 때 풍년을 기원하고자 하였으나 현재는 오랫동안 못 본 가족들과의 만나는 등 즐거운 명절이다.",
  3: "수능은 고등학교 졸업예정자를 대상으로 그간 했던 노력들의 열매를 맺는 날이다. 매년 11월 셋째주 목요일에 시행하며 이 날을 위해 전국의 학생들이 노력을 하는 날이다. 한국에서는 사실상 대학입시 시험의 대명사가 되기도 하였다.",
  4: "한글날은 세종대왕이 1446년 훈민정음 편찬을 널리 선포한날로 매년 10월 9일에 기념한다. 한글날에는 한글을 주제로 하는 다양한 행사가 매년 전국 각지에서 열리며, 기업 브랜드나 외국 문자 표기가 행사성으로 한글로 바뀌기도 한다.",
  5: "가을은 독서의 계절이라고도 불린다. 한 해의 농사가 끝나고 마음의 여유가 생기기도 하고 더위가 끝나고 선선해진 날씨에 공원에 나가 책을 읽기 좋은 분위기를 만들어 주어서 독서의 계절이라 흔히 말한다. 또한, 파란 하늘이 마음을 센치하게 만들어 감성이 풍부해지기 때문이다.",
  6: "불과 몇십년 전까지만 해도 할로윈은 한국의 문화와는 거리가 멀었다. 하지만 최근 들어 이태원, 홍대 등 많은 젊은 사람들이 할로윈 행사에 코스튬을 하고 거리로 나오기 시작하면서 하나의 문화로 자리 잡았다. 우리나라 고유의 명절과 달리 판타지적으로 노는 것에 있어 더욱 더 빠르게 축제의 분위기가 활성화 되었다.",
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
