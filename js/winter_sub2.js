const images = document.querySelectorAll(".sp3-galImgBox");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.getElementById("closeBtn");

const modalImagePaths = {
  1: "../img/winter/스키1.jpg",
  2: "../img/winter/김장1.png",
  3: "../img/winter/설날1.jpg",
  4: "../img/winter/온천1.jpg",
  5: "../img/winter/얼음낚시1.jpg",
  6: "../img/winter/제야의종1.jpg",
};

const imageDescriptions = {
  1: "겨울 스키와 스노보드는 차가운 겨울 공기 속에서 짜릿한 스릴을 즐길 수 있는 인기 스포츠다. 다양한 난이도의 슬로프와 고급 장비들이 마련되어 있어 초보자부터 전문가까지 모두 즐길 수 있다. 눈 덮인 산을 질주하며 겨울의 아름다운 풍경을 만끽하는 매력적인 활동이다.",
  2: "겨울 김장은 한국의 겨울철 전통적인 행사로, 신선한 채소와 재료를 이용해 저장용 김치를 담그는 과정이다. 이 김장은 추운 겨울철 동안 가족들이 함께 나누어 먹으며 따뜻한 정을 나누는 중요한 문화적 의미가 있다.",
  3: "겨울 설날은 한국의 가장 중요한 명절로, 새해의 시작을 기념하며 가족들이 모여 함께 음식을 나누고 덕담을 주고받는다. 전통적인 설날 음식인 떡국과 함께 조상에게 차례를 지내며, 새로운 한 해의 건강과 행복을 기원한다.",
  4: "겨울 온천은 차가운 날씨 속에서 따뜻한 온천수에 몸을 담그며 몸과 마음을 치유할 수 있는 완벽한 휴식 공간이다. 눈 덮인 풍경 속에서 온천욕을 즐기며 자연과의 힐링을 경험할 수 있는 매력적인 겨울 여행지다.",
  5: "겨울 얼음낚시는 얼어붙은 호수나 강 위에서 구멍을 뚫고 낚시를 즐기는 독특한 겨울 스포츠다. 차가운 공기 속에서도 오랜 시간 기다리며 물고기를 낚는 묘미가 있어 겨울철의 색다른 재미를 선사한다. 얼음 위에서의 고요한 낚시와 함께 겨울의 자연을 만끽하는 특별한 경험이 된다.",
  6: "제야의 종은 한 해를 마무리하고 새해를 맞이하는 중요한 의식으로, 12월 31일 자정에 울리는 종소리로 시작된다. 이 종소리는 1년 동안의 모든 고난과 아쉬움을 씻어내고 새해의 희망과 기원을 담고 있다. 많은 사람들은 제야의 종을 들으며 새해를 맞이하는 순간, 마음속 소망을 품고 새롭게 시작하는 다짐을 다진다.",
};

// 각 이미지 박스 클릭 이벤트
images.forEach((imgBox) => {
  imgBox.addEventListener("click", (e) => {
    const index = imgBox.dataset.index;
    const modalImgSrc = modalImagePaths[index];

    // 모달 열기
    modal.style.display = "flex";

    // 모달 이미지 설정
    modalImg.style.backgroundImage = `url('${modalImgSrc}')`;

    // 추가된 스타일 설정
    modalImg.style.backgroundPosition = "center"; // 이미지를 중앙에 위치
    modalImg.style.backgroundRepeat = "no-repeat"; // 이미지 반복 방지
    modalImg.style.backgroundSize = "cover"; // 이미지 비율 유지하며 전체 영역 채우기

    // 모달 텍스트 설정
    modalText.textContent = imageDescriptions[index];
  });
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 바깥 부분 클릭 시 모달 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
