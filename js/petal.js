const canvas = document.querySelector(".sp1-canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

// 벚꽃잎 개수
const total = 35;
const petalArray = [];

const petalImg = new Image();
petalImg.src = "../img/icon/petal.png";

// Petal 클래스 정의
class Petal {
  constructor() {
    this.x = Math.random() * canvas.width; // 랜덤한 x 위치
    this.y = Math.random() * canvas.height; // 랜덤한 y 위치
    this.size = Math.random() * 10 + 10; // 꽃잎의 크기
    this.speedX = Math.random() * 2 - 1; // x축 속도
    this.speedY = Math.random() * 2 + 1; // y축 속도
  }

  // 꽃잎 애니메이션 메소드
  animate() {
    this.x += this.speedX;
    this.y += this.speedY;

    // 꽃잎이 화면을 벗어나면 다시 위쪽으로 돌아옴
    if (this.y > canvas.height) {
      this.y = -this.size;
    }
    if (this.x > canvas.width) {
      this.x = -this.size;
    }
    if (this.x < -this.size) {
      this.x = canvas.width;
    }

    // 꽃잎 그리기
    ctx.drawImage(petalImg, this.x, this.y, this.size, this.size);
  }
}

petalImg.onload = () => {
  // 꽃잎 객체 배열에 추가
  for (let i = 0; i < total; i++) {
    petalArray.push(new Petal());
  }
  render();
};

// 애니메이션을 렌더링하는 함수
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화
  petalArray.forEach((petal) => {
    petal.animate(); // 각 꽃잎 애니메이션 실행
  });

  window.requestAnimationFrame(render); // 애니메이션을 계속 실행
}

// 창 크기 조정 시 캔버스 크기 재조정
window.addEventListener("resize", () => {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
});

console.log(window.scrollY);
