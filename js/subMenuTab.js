$(document).ready(function () {
  $("#hi-mainMenu-web").hide();
  $("#hi-mainMenu-app").hide();
  $("#hi-mainMenu-web").removeClass("hideMenu");
  $("#hi-mainMenu-app").removeClass("hideMenu");
  $(".sp1-hamBar").click(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (window.innerWidth < 770) {
      $("#hi-mainMenu-app").fadeIn();
    } else {
      $("#hi-mainMenu-web").fadeIn();
    }
    $("body").addClass("no-scroll");
  });
  $("#hi-menuBox-Close").click(() => {
    $("#hi-mainMenu-web").fadeOut();
    $("body").removeClass("no-scroll");
  });
  $("#hi-accordionMenu-Close").click(() => {
    $("#hi-mainMenu-app").fadeOut();
    $("body").removeClass("no-scroll");
  });
});
//앱메뉴
let hiAccordionMenu = document.querySelectorAll(".hi-accordionMenu");
hiAccordionMenu.forEach((item) => {
  item.addEventListener("click", function () {
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
