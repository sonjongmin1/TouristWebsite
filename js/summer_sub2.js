const images = document.querySelectorAll(".sp3-galImgBox");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.getElementById("closeBtn");

const modalImagePaths = {
  1: "../img/summer/su-img1.png",
  2: "../img/summer/su-img2.png",
  3: "../img/summer/su-img3.jpg",
  4: "../img/summer/su-img4.png",
  5: "../img/summer/su-img9.webp",
  6: "../img/summer/su-sub1-img1.png",
};

const imageDescriptions = {
  1: "롯데월드는 대한민국 서울에 위치한 대형 테마파크로, 가족과 연인들이 함께 즐기기 좋은 공간이다. 실내와 실외로 나뉘어져 있어 사계절 내내 이용 가능하며, 다양한 놀이기구와 퍼레이드, 캐릭터 쇼 등 풍부한 볼거리와 즐길 거리가 가득하다.",
  2: "시그니엘부산은 부산 해운대에 위치한 초호화 호텔로, 아름다운 바다 전망과 최고급 시설을 자랑한다. 휴식을 원하는 여행객들에게 완벽한 선택지로, 미슐랭 스타 셰프가 선보이는 고급 레스토랑과 스파, 루프탑 바 등 다양한 편의 시설을 제공한다.",
  3: "대금굴은 강원도 삼척시에 위치한 천연 석회암 동굴로, 대한민국에서 가장 아름다운 동굴 중 하나로 손꼽힌다. 동굴 내부에는 신비로운 종유석과 석순이 자리하고 있으며, 관광객들은 특별히 제작된 보트를 타고 동굴 탐험을 즐길 수 있다.",
  4: "삼척 솔비치는 강원도 삼척시에 위치한 고급 리조트로, 푸른 바다와 어우러진 아름다운 풍경이 돋보인다. 가족 단위 여행객들에게 인기가 많으며, 깨끗한 해변과 다양한 액티비티, 수영장과 스파 등 편안한 휴식을 위한 시설을 갖추고 있다.",
  5: "스누피 가든은 제주도에 위치한 테마 정원으로, 유명 캐릭터 스누피와 친구들을 주제로 한 독특한 공간이다. 자연과 예술이 어우러진 정원에서 힐링할 수 있으며, 어린이와 어른 모두에게 사랑받는 포토 스팟과 다양한 전시 공간이 마련되어 있다.",
  6: "부산 바다 축제는 매년 여름 부산의 해운대, 광안리 등 주요 해변에서 열리는 대한민국 최대의 해변 축제다. 음악 공연, 서핑 대회, 불꽃놀이 등 다채로운 프로그램이 마련되어 있으며, 뜨거운 여름을 더욱 뜨겁게 즐길 수 있는 대표적인 여름 행사로 자리 잡았다.",
};

const shortDescriptions = {
  1: "롯데월드: 서울의 대형 테마파크",
  2: "시그니엘부산: 해운대 호텔",
  3: "대금굴: 삼척의 신비로운 동굴",
  4: "삼척 솔비치: 강원도 고급 리조트",
  5: "스누피 가든: 제주 테마 정원",
  6: "부산 바다 축제: 여름 대표 축제",
};

// 모바일 크기 확인 함수
function isMobile() {
  return window.innerWidth <= 768; // 모바일 화면 너비 기준
}

// 각 이미지 박스 클릭 이벤트
images.forEach((imgBox) => {
  imgBox.addEventListener("click", (e) => {
    const index = imgBox.dataset.index;
    const modalImgSrc = modalImagePaths[index];

    // 모달 열기
    modal.style.display = "flex";

    // 모달 이미지 설정
    modalImg.style.backgroundImage = `url('${modalImgSrc}')`;
    modalImg.style.backgroundPosition = "center";
    modalImg.style.backgroundRepeat = "no-repeat";
    modalImg.style.backgroundSize = "cover";

    // 텍스트 설정 (모바일과 PC 구분)
    modalText.textContent = isMobile()
      ? shortDescriptions[index]
      : imageDescriptions[index];
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
