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
// 슬라이드 시키기

document.addEventListener("DOMContentLoaded", () => {
  const slideContainer = document.querySelector(".jb-mainImgWrapper");
  const slides = document.querySelectorAll(".jb-mainImgWrapper > div");
  let index = 0;
  const totalSlides = slides.length;
  const visibleSlides = 3;
  const slideWidth = 280 + 16;

  function slideImages() {
    index = (index + 1) % (totalSlides - visibleSlides + 1);

    // 슬라이드 이동 적용
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  setInterval(slideImages, 3000);
});
// 기록,리뷰 페이지 버튼누르기

$(document).ready(function () {
  // 모든 버튼에 대한 클릭 이벤트 설정
  $("button").click(function () {
    let season = $(this).attr("id").replace("jb-", "").replace("Btn", "");
    if ($(this).attr("id") !== "searchButton") {
      $(".jb-reBox:visible").fadeOut(500, function () {
        $(
          ".jb-reBox." +
            "jb-reBox" +
            (["spring", "summer", "autumn", "winter"].indexOf(season) + 1)
        ).fadeIn(500); // 해당 시즌 박스를 페이드인
      });
    }
  });
});

// 카카오맵 api
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
var map;

document.getElementById("searchButton").addEventListener("click", function () {
  var address = document.getElementById("address").value.trim();

  if (!address) {
    alert("주소를 입력하세요.");
    return;
  }

  if (!map) {
    createMap();
  }

  var ps = new kakao.maps.services.Places();
  ps.keywordSearch(address, placesSearchCB);
});

function createMap() {
  var mapContainer = document.getElementById("map");
  mapContainer.style.display = "block";
  var mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 5,
  };
  map = new kakao.maps.Map(mapContainer, mapOption);
  mapContainer.style.display = "block";
  map.relayout();
}

function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    var bounds = new kakao.maps.LatLngBounds();

    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i]);
      bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    }

    map.setBounds(bounds);
    map.relayout();
  } else {
    alert("검색 결과가 없습니다.");
  }
}

function displayMarker(place) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
  });

  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(
      '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
    );
    infowindow.open(map, marker);
  });
}

//이벤트 이동 + top Btn
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
    hiSeasonEventCount++;
    if (hiSeasonEventCount >= hiSeasonEventList.length) {
      hiSeasonEventCount = 0;
    }
    $(hiSeasonEventList[hiSeasonEventCount]).fadeIn();
  });

  $('#hi-topBtn').click(function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

//메뉴 fade in/out
//웹메뉴
$(document).ready(function(){
  $('#hi-mainMenu-web').hide();
  $('#hi-mainMenu-app').hide();
  $('#hi-mainMenu-web').removeClass("hideMenu");
  $('#hi-mainMenu-app').removeClass("hideMenu");
  $('.jm-mainMenuBtn').click(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
      if(window.innerWidth<770){
        $('#hi-mainMenu-app').fadeIn();
      }else{
        $('#hi-mainMenu-web').fadeIn();
      }
      $('body').addClass('no-scroll');
  });
  $('#hi-menuBox-Close').click(()=>{
    $('#hi-mainMenu-web').fadeOut();
    $('body').removeClass('no-scroll');
  });
  $('#hi-accordionMenu-Close').click(()=>{
    $('#hi-mainMenu-app').fadeOut();
    $('body').removeClass('no-scroll');
  })
});
//앱메뉴
let hiAccordionMenu = document.querySelectorAll(".hi-accordionMenu");
hiAccordionMenu.forEach((item) => {
  item.addEventListener("click", function() {
    // 현재 클릭된 아코디언이 아닌 경우 닫음
    hiAccordionMenu.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("on");
        otherItem.nextElementSibling.style.maxHeight = null;
      }
    });

    // 클릭된 아이템의 아코디언 메뉴 확장/축소
    let hiAppMenu = item.nextElementSibling;
    item.classList.toggle("on");
    if (hiAppMenu.style.maxHeight) {
      hiAppMenu.style.maxHeight = null;
    } else {
      hiAppMenu.style.maxHeight = hiAppMenu.scrollHeight + "px"; // "rem" 대신 "px" 사용
    }
  });
});
