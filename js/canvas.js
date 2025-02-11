const canvas = document.querySelector(".sp1-canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

// 계절별 이미지 경로 설정
const petalImg = new Image();

// 페이지의 클래스에 따라 다른 이미지 경로를 설정
if (document.body.classList.contains("spring")) {
  petalImg.src = "../img/icon/petal.png"; // 봄 이미지
} else if (document.body.classList.contains("summer")) {
  petalImg.src = "../img/icon/water-drop.png"; // 여름 이미지
} else if (document.body.classList.contains("autumn")) {
  petalImg.src = "../img/icon/maple.png"; // 가을 이미지
} else if (document.body.classList.contains("winter")) {
  petalImg.src = "../img/icon/snow.png"; // 겨울 이미지
}

const total = 35;
const petalArray = [];

// Petal 클래스 정의
class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    const baseSize = window.innerWidth <= 768 ? 5 : 10;
    this.size = Math.random() * baseSize + baseSize;

    this.speedX = Math.random() * 2 - 0.5;
    this.speedY = Math.random() * 2 + 0.5;
  }

  animate() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y > canvas.height) {
      this.y = -this.size;
    }
    if (this.x > canvas.width) {
      this.x = -this.size;
    }
    if (this.x < -this.size) {
      this.x = canvas.width;
    }

    ctx.drawImage(petalImg, this.x, this.y, this.size, this.size);
  }
}

petalImg.onload = () => {
  for (let i = 0; i < total; i++) {
    petalArray.push(new Petal());
  }
  render();
};

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petalArray.forEach((petal) => {
    petal.animate();
  });

  window.requestAnimationFrame(render);
}

window.addEventListener("resize", () => {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;

  petalArray.length = 0;
  for (let i = 0; i < total; i++) {
    petalArray.push(new Petal());
  }
});
