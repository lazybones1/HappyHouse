<template>
  <div>
    <div id="map"></div>

    <p>
      <input type="checkbox" id="chkUseDistrict" @click="setOverlayMapTypeId" />
      지적편집도 정보 보기
      <input type="checkbox" id="chkTerrain" @click="setOverlayMapTypeId" />
      지형정보 보기
      <input type="checkbox" id="chkTraffic" @click="setOverlayMapTypeId" />
      교통정보 보기
      <input type="checkbox" id="chkBicycle" @click="setOverlayMapTypeId" />
      자전거도로 정보 보기
    </p>

    <apt-search-bar
      class="apt-search-form"
      v-on:searchApt="searchApt"
    ></apt-search-bar>

    <apt-list
      class="apt-list-form"
      v-on:showDetail="showDetail"
      :category="category"
      :areaApts="areaApts"
    ></apt-list>

    <apt-detail
      class="apt-detail-form"
      v-if="detailToggle"
      :apt="apt"
      v-on:closeDetail="closeDetail"
      v-on:printRoadView="printRoadView"
    ></apt-detail>

    <div class="apt-roadview-form" v-show="roadViewToggle">
      <div class="closeRoadView">
        <b-icon
          icon="arrow-right"
          scale="2"
          variant="dark"
          @click="closeRoadView"
          class="roadViewBack"
        ></b-icon>
      </div>
      <div id="roadview" class="apt-roadview"></div>
    </div>

    <div class="atc-info-form">
      <div class="map_wrap">
        <ul id="category">
          <li id="BK9" data-order="0">
            <span class="category_bg bank"></span>
            은행
          </li>
          <li id="MT1" data-order="1">
            <span class="category_bg mart"></span>
            마트
          </li>
          <li id="PM9" data-order="2">
            <span class="category_bg pharmacy"></span>
            약국
          </li>
          <li id="OL7" data-order="3">
            <span class="category_bg oil"></span>
            주유소
          </li>
          <li id="CE7" data-order="4">
            <span class="category_bg cafe"></span>
            카페
          </li>
          <li id="CS2" data-order="5">
            <span class="category_bg store"></span>
            편의점
          </li>
          <li id="MT1" data-order="0">
            <span class="category_bg store"></span>
            대형마트
          </li>
          <li id="PS3" data-order="1">
            <span class="category_bg store"></span>
            어린이집
          </li>
          <li id="SC4" data-order="2">
            <span class="category_bg store"></span>
            학교
          </li>
          <li id="PK6" data-order="3">
            <span class="category_bg store"></span>
            주차장
          </li>
          <li id="SW8" data-order="4">
            <span class="category_bg store"></span>
            지하철역
          </li>
          <li id="AD5" data-order="5">
            <span class="category_bg store"></span>
            숙박
          </li>
          <li id="HP8" data-order="0">
            <span class="category_bg store"></span>
            병원
          </li>
          <li id="FD6 " data-order="1">
            <span class="category_bg store"></span>
            음식점
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script scoped>
import AptSearchBar from "@/components/apt/AptSearchBar.vue";
import AptList from "@/components/apt/AptList.vue";
import AptDetail from "@/components/apt/AptDetail.vue";
import { mapState, mapActions } from "vuex";

const aptStore = "aptStore";
export default {
  name: "aptMap",
  data() {
    return {
      //카카오맵
      markers: {},
      markerPositions: [],
      mapTypes: {},
      //apt 전달 데이터
      apt: "",
      category: [],
      areaApts: [],
      //정보 토글
      infoToggle: false,
      detailToggle: false,
      roadViewToggle: false,
    };
  },
  components: {
    AptSearchBar,
    AptList,
    AptDetail,
  },
  mounted() {
    //카카오맵
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" +
        process.env.VUE_APP_KAKAO_MAP_API_KEY +
        "&libraries=services";
      document.head.appendChild(script);
    }
  },
  computed: {
    ...mapState(aptStore, ["sidos", "guguns", "apts", "sido"]),
  },
  methods: {
    ...mapActions(aptStore, ["getAptList"]),

    getInfo() {
      // 지도의 현재 영역을 얻어옵니다
      let bounds = this.map.getBounds();

      // 영역의 남서쪽 좌표를 얻어옵니다
      let swLatLng = bounds.getSouthWest();

      // 영역의 북동쪽 좌표를 얻어옵니다
      let neLatLng = bounds.getNorthEast();
      this.areaApts = [];
      this.apts.some((item) => {
        if (
          item.La > swLatLng.La &&
          item.Ma > swLatLng.Ma &&
          item.La < neLatLng.La &&
          item.Ma < neLatLng.Ma
        ) {
          this.areaApts.push(item);
        }
      });
      setTimeout(() => {
        console.log(this.areaApts);
      }, 100);
    },
    searchApt(gugunCode) {
      if (gugunCode) {
        this.markerPositions = [];
        let self = this;
        this.closeDetail();
        this.closeRoadView();
        this.getAptList(gugunCode);
        setTimeout(function () {
          self.getAptPositions();
          self.infoToggle = true;
        }, 500);
      }
    },
    //카카오맵
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      this.createCategorySearch();
      this.mapTypes = {
        terrain: kakao.maps.MapTypeId.TERRAIN,
        traffic: kakao.maps.MapTypeId.TRAFFIC,
        bicycle: kakao.maps.MapTypeId.BICYCLE,
        useDistrict: kakao.maps.MapTypeId.USE_DISTRICT,
      };
    },
    displayMarker() {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }
      this.markers = [];

      let imageSrc =
          "https://cdn3.iconfinder.com/data/icons/start-up-4/44/office-512.png",
        imageSize = new kakao.maps.Size(50, 55),
        imageOption = { offset: new kakao.maps.Point(27, 69) };

      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      if (this.markerPositions.length > 0) {
        let self = this;
        for (let i = 0; i < this.markerPositions.length; i++) {
          this.markers[i] = new kakao.maps.Marker({
            map: this.map,
            position: this.markerPositions[i],
            image: markerImage,
          });

          kakao.maps.event.addListener(this.markers[i], "click", function () {
            self.apt = self.apts[i];
            self.showDetail(self.apt);
            self.closeRoadView();
          });
        }

        const bounds = this.markerPositions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    getAptPositions() {
      if (window.kakao && window.kakao.maps) {
        let geocoder = new kakao.maps.services.Geocoder();
        let self = this;
        for (let i = 0; i < this.apts.length; i++) {
          geocoder.addressSearch(
            this.sido +
              " " +
              this.apts[i].도로명 +
              " " +
              this.apts[i].도로명건물본번호코드,
            function (result, status) {
              if (status === kakao.maps.services.Status.OK) {
                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                self.markerPositions[i] = coords;
                self.apts[i].index = i;
                self.apts[i].La = coords.La;
                self.apts[i].Ma = coords.Ma;

                if (i == self.apts.length - 1) {
                  setTimeout(() => {
                    self.displayMarker();
                  }, 500);
                }
              }
            }
          );
        }
      }
    },

    showDetail(apt) {
      this.apt = apt;
      this.detailToggle = true;
      let moveLatLon = new kakao.maps.LatLng(apt.Ma, apt.La);
      this.map.setLevel(2);
      this.map.setCenter(moveLatLon);
    },
    showRoadView(apt) {
      let roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
      let rv = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      let rc = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
      let rvResetValue = {};
      let position = new kakao.maps.LatLng(apt.Ma, apt.La);

      // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
      rc.getNearestPanoId(position, 100, function (panoId) {
        rv.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      });

      kakao.maps.event.addListener(rv, "init", function () {
        // 로드뷰에 올릴 마커를 생성합니다.
        let rMarker = new kakao.maps.Marker({
          position: position,
          map: rv, //map 대신 rv(로드뷰 객체)로 설정하면 로드뷰에 올라갑니다.
        });
        rMarker.setAltitude(10);
        rMarker.setRange(100);
        // 로드뷰 마커가 중앙에 오도록 로드뷰의 viewpoint 조정 합니다.
        let projection = rv.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.

        // 마커의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출합니다.
        let viewpoint = projection.viewpointFromCoords(
          rMarker.getPosition(),
          rMarker.getAltitude()
        );
        rv.setViewpoint(viewpoint); //로드뷰에 뷰포인트를 설정합니다.

        // 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
        let rLabel = new kakao.maps.InfoWindow({
          position: position,
          content: apt.아파트,
        });
        rLabel.open(rv, rMarker);
        //각 뷰포인트 값을 초기화를 위해 저장해 놓습니다.
        rvResetValue.pan = viewpoint.pan;
        rvResetValue.tilt = viewpoint.tilt;
        rvResetValue.zoom = viewpoint.zoom;
      });
    },
    closeDetail() {
      this.detailToggle = false;
    },
    closeRoadView() {
      this.roadViewToggle = false;
    },
    printRoadView(i) {
      this.showRoadView(this.apts[i]);
      this.roadViewToggle = true;
    },
    createCategorySearch() {
      let self = this;
      // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
      let placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 5 }),
        contentNode = document.createElement("div"), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
        markers = [], // 마커를 담을 배열입니다
        currCategory = ""; // 현재 선택된 카테고리를 가지고 있을 변수입니다

      // 장소 검색 객체를 생성합니다
      let ps = new kakao.maps.services.Places(this.map);

      // 지도에 idle 이벤트를 등록합니다
      kakao.maps.event.addListener(this.map, "idle", searchPlaces);
      kakao.maps.event.addListener(this.map, "idle", this.getInfo);

      // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
      contentNode.className = "placeinfo_wrap";

      // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
      // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
      addEventHandle(contentNode, "mousedown", kakao.maps.event.preventMap);
      addEventHandle(contentNode, "touchstart", kakao.maps.event.preventMap);

      // 커스텀 오버레이 컨텐츠를 설정합니다
      placeOverlay.setContent(contentNode);

      // 각 카테고리에 클릭 이벤트를 등록합니다
      addCategoryClickEvent();

      // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
      function addEventHandle(target, type, callback) {
        if (target.addEventListener) {
          target.addEventListener(type, callback);
        } else {
          target.attachEvent("on" + type, callback);
        }
      }

      // 카테고리 검색을 요청하는 함수입니다
      function searchPlaces() {
        if (!currCategory) {
          return;
        }

        // 커스텀 오버레이를 숨깁니다
        placeOverlay.setMap(null);

        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();

        ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
      }

      // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
          self.category = data;

          displayPlaces(data);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
        } else if (status === kakao.maps.services.Status.ERROR) {
          // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
        }
      }

      // 지도에 마커를 표출하는 함수입니다
      function displayPlaces(places) {
        // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
        // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
        let order = document
          .getElementById(currCategory)
          .getAttribute("data-order");

        for (let i = 0; i < places.length; i++) {
          // 마커를 생성하고 지도에 표시합니다
          let marker = addMarker(
            new kakao.maps.LatLng(places[i].y, places[i].x),
            order
          );

          // 마커와 검색결과 항목을 클릭 했을 때
          // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
          (function (marker, place) {
            kakao.maps.event.addListener(marker, "click", function () {
              displayPlaceInfo(place);
            });
          })(marker, places[i]);
        }
      }

      // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
      function addMarker(position, order) {
        let imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
          imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
          imgOptions = {
            spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
            spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          },
          markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imgOptions
          ),
          marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage,
          });

        marker.setMap(self.map); // 지도 위에 마커를 표출합니다
        markers.push(marker); // 배열에 생성된 마커를 추가합니다

        return marker;
      }

      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
      function removeMarker() {
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }

      // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
      function displayPlaceInfo(place) {
        let content =
          '<div class="placeinfo">' +
          '   <a class="title" href="' +
          place.place_url +
          '" target="_blank" title="' +
          place.place_name +
          '">' +
          place.place_name +
          "</a>";

        if (place.road_address_name) {
          content +=
            '    <span title="' +
            place.road_address_name +
            '">' +
            place.road_address_name +
            "</span>" +
            '  <span class="jibun" title="' +
            place.address_name +
            '">(지번 : ' +
            place.address_name +
            ")</span>";
        } else {
          content +=
            '    <span title="' +
            place.address_name +
            '">' +
            place.address_name +
            "</span>";
        }

        content +=
          '    <span class="tel">' +
          place.phone +
          "</span>" +
          "</div>" +
          '<div class="after"></div>';

        contentNode.innerHTML = content;

        placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
        placeOverlay.setMap(self.map);
      }

      // 각 카테고리에 클릭 이벤트를 등록합니다
      function addCategoryClickEvent() {
        let category = document.getElementById("category"),
          children = category.children;

        for (let i = 0; i < children.length; i++) {
          children[i].onclick = onClickCategory;
        }
      }

      // 카테고리를 클릭했을 때 호출되는 함수입니다
      function onClickCategory() {
        self.category = [];
        let id = this.id,
          className = this.className;

        placeOverlay.setMap(null);

        if (className === "on") {
          currCategory = "";
          changeCategoryClass();
          removeMarker();
        } else {
          currCategory = id;
          changeCategoryClass(this);
          searchPlaces();
        }
      }

      // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
      function changeCategoryClass(el) {
        let category = document.getElementById("category"),
          children = category.children,
          i;

        for (i = 0; i < children.length; i++) {
          children[i].className = "";
        }

        if (el) {
          el.className = "on";
        }
      }
    },

    // 체크 박스를 선택하면 호출되는 함수입니다
    setOverlayMapTypeId() {
      let chkTerrain = document.getElementById("chkTerrain"),
        chkTraffic = document.getElementById("chkTraffic"),
        chkBicycle = document.getElementById("chkBicycle"),
        chkUseDistrict = document.getElementById("chkUseDistrict");

      // 지도 타입을 제거합니다
      for (var type in this.mapTypes) {
        this.map.removeOverlayMapTypeId(this.mapTypes[type]);
      }

      // 지적편집도정보 체크박스가 체크되어있으면 지도에 지적편집도정보 지도타입을 추가합니다
      if (chkUseDistrict.checked) {
        this.map.addOverlayMapTypeId(this.mapTypes.useDistrict);
      }

      // 지형정보 체크박스가 체크되어있으면 지도에 지형정보 지도타입을 추가합니다
      if (chkTerrain.checked) {
        this.map.addOverlayMapTypeId(this.mapTypes.terrain);
      }

      // 교통정보 체크박스가 체크되어있으면 지도에 교통정보 지도타입을 추가합니다
      if (chkTraffic.checked) {
        this.map.addOverlayMapTypeId(this.mapTypes.traffic);
      }

      // 자전거도로정보 체크박스가 체크되어있으면 지도에 자전거도로정보 지도타입을 추가합니다
      if (chkBicycle.checked) {
        this.map.addOverlayMapTypeId(this.mapTypes.bicycle);
      }
    },
  },
};
</script>

<style>
#map {
  height: 640px;
  width: 1160px;
  z-index: 1;
}
.apt-list-form {
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 110px;
  z-index: 3;
  width: 450px;
  height: 640px;
  background-color: rgb(255, 255, 255);
}
.apt-detail-form {
  position: absolute;
  right: 0;
  top: 110px;
  z-index: 4;
  width: 450px;
  height: 640px;
  background-color: rgb(255, 255, 255);
}
.apt-roadview-form {
  position: absolute;
  right: 0;
  top: 110px;
  z-index: 5;
  width: 450px;
  height: 640px;
  background-color: rgb(255, 255, 255);
}
.closeRoadView {
  background: #ffffff;
  position: absolute;
  width: 450px;
  left: 0px;
  top: 0px;
  z-index: 10;
  text-align: left;
  padding-left: 15px;
}
.apt-roadview {
  width: 450px;
  height: 640px;
}
.atc-info-form {
  position: absolute;
  top: 100px;
  left: 600px;
  width: 362px;
  z-index: 5;
}
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  font-size: 12px;
}
.map_wrap {
  position: relative;
  width: 362px;
  height: 63px;
}
#category {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  z-index: 2;
}
#category li {
  float: left;
  list-style: none;
  width: 50px;
  border-right: 1px solid #acacac;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
}
#category li.on {
  background: #eee;
}
#category li:hover {
  background: #ffe6e6;
  border-left: 1px solid #acacac;
  margin-left: -1px;
}
#category li:last-child {
  margin-right: 0;
  border-right: 0;
}
#category li span {
  display: block;
  margin: 0 auto 3px;
  width: 27px;
  height: 28px;
}
#category li .category_bg {
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png)
    no-repeat;
}
#category li .bank {
  background-position: -10px 0;
}
#category li .mart {
  background-position: -10px -36px;
}
#category li .pharmacy {
  background-position: -10px -72px;
}
#category li .oil {
  background-position: -10px -108px;
}
#category li .cafe {
  background-position: -10px -144px;
}
#category li .store {
  background-position: -10px -180px;
}
#category li.on .category_bg {
  background-position-x: -46px;
}
.placeinfo_wrap {
  position: absolute;
  bottom: 28px;
  left: -150px;
  width: 300px;
}
.placeinfo {
  position: relative;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  background: #fff;
}
.placeinfo:nth-of-type(n) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.placeinfo_wrap .after {
  content: "";
  position: relative;
  margin-left: -12px;
  left: 50%;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.placeinfo a,
.placeinfo a:hover,
.placeinfo a:active {
  color: #fff;
  text-decoration: none;
}
.placeinfo a,
.placeinfo span {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.placeinfo span {
  margin: 5px 5px 0 5px;
  cursor: default;
  font-size: 13px;
}
.placeinfo .title {
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px 6px 0 0;
  margin: -1px -1px 0 -1px;
  padding: 10px;
  color: #fff;
  background: #d95050;
  background: #d95050
    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
    no-repeat right 14px center;
}
.placeinfo .tel {
  color: #0f7833;
}
.placeinfo .jibun {
  color: #999;
  font-size: 11px;
  margin-top: 0;
}
</style>
