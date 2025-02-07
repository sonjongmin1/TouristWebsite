// jm 메인이미지
let jmMainImgEl = document.querySelectorAll(".jm-mainImg");
let jmMainImgFc = document.querySelector(".jm-mainImgFc");

jmMainImgEl.forEach((img) => {
  img.addEventListener("click", function () {
    let textDiv = img.querySelector("div"); // 현재 이미지 내부의 <div>를 선택

    if (img.classList.contains("on")) {
      // 'on' 클래스가 이미 있을 때 (트랜지션 제거 후 클래스 제거)
      img.style.transition = "none"; // 트랜지션 비활성화
      img.classList.remove("on");
      jmMainImgFc.classList.remove("on"); // jmMainImgFc의 on 클래스도 제거

      // 텍스트 div 클래스 제거
      if (textDiv) textDiv.classList.remove("on");

      // 트랜지션을 다시 활성화
      setTimeout(() => {
        img.style.transition = ""; // 기본 트랜지션 속성 복원
      });
    } else {
      // 다른 요소의 'on' 클래스 제거
      jmMainImgEl.forEach((el) => {
        el.classList.remove("on");
        let otherTextDiv = el.querySelector("div");
        if (otherTextDiv) otherTextDiv.classList.remove("on");
      });
      jmMainImgFc.classList.remove("on"); // jmMainImgFc의 on 클래스 제거

      // 클릭된 요소에 'on' 클래스 추가
      img.classList.add("on");
      jmMainImgFc.classList.add("on"); // jmMainImgFc에 on 클래스 추가

      // 텍스트 div 클래스 추가 (1.5초 뒤)
      if (textDiv) {
        setTimeout(() => {
          textDiv.classList.add("on");
        }, 400); // 0.4초 후
      }
    }
  });
});

// 기록,리뷰 페이지 버튼누르기

$(document).ready(function () {
  // 모든 버튼에 대한 클릭 이벤트 설정
  $("button").click(function () {
    let season = $(this).attr("id").replace("jb-", "").replace("Btn", "");
    $(".jb-reBox:visible").fadeOut(500, function () {
      $(
        ".jb-reBox." +
          "jb-reBox" +
          (["spring", "summer", "autumn", "winter"].indexOf(season) + 1)
      ).fadeIn(500); // 해당 시즌 박스를 페이드인
    });
  });
});

//이벤트 이동
let hiSeasonEventCount = 0;
let hiSeasonEventList = [
  "#hi-seasonEnf-e1",
  "#hi-seasonEnf-e2",
  "#hi-seasonEnf-e3",
  "#hi-seasonEnf-e4",
];

$(document).ready(function () {
  $(".hi-seasonEnf-mainBox > div").hide();
  $(hiSeasonEventList[hiSeasonEventCount]).fadeIn();
  hiSeasonEventCount += 1;

  $("#hi-seasonEnf-btnL").click(function () {
    $(".hi-seasonEnf-mainBox > div").hide();
    hiSeasonEventCount--;
    if (hiSeasonEventCount < 0) {
      hiSeasonEventCount = hiSeasonEventList.length - 1;
    }
    $(hiSeasonEventList[hiSeasonEventCount]).fadeIn();
  });

  $("#hi-seasonEnf-btnR").click(function () {
    $(".hi-seasonEnf-mainBox > div").hide();
    if (hiSeasonEventCount >= hiSeasonEventList.length) {
      hiSeasonEventCount = 0;
    }
    $(hiSeasonEventList[hiSeasonEventCount]).fadeIn();
    hiSeasonEventCount++;
  });
});
