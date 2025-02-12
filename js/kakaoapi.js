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
