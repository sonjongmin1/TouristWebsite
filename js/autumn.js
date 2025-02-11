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

// 날씨 api
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let intro = document.querySelector("#intro");

let API_Key = "a796bfc95507eaa60eadf9bfdd83b79d";
let cityName = "seoul";

let weather = async () => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`
  );
  let data = await response.json();
  console.log(data);
  temp.textContent = `${data.main.temp}°C`;
  wind.textContent = `${data.wind.speed}m/s`;
  let icon = data.weather[0].main;
  let weatherIcon = "";

  switch (icon) {
    case "Clear":
      weatherIcon =
        "<span style='color: yellow; font-size:2rem;'>&#9728;</span>";
      break;
    case "Wind":
      weatherIcon =
        "<span style='color: gray; font-size:2rem;'>&#127788;</span>";
      break;
    case "Clouds":
      weatherIcon = "<span style='color: gray; font-size:2rem;'>&#9729;</span>";
      break;
    case "Rain":
      weatherIcon = "<span style='color: blue; font-size:2rem;'>&#9748;</span>";
      break;
    case "Snow":
      weatherIcon =
        "<span style='color: white; font-size:2rem;'>&#2603;</span>";
  }
  iconDiv.innerHTML = weatherIcon;
};
weather();
