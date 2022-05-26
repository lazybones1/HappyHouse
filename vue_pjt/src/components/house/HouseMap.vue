<template>
  <div>
    <div class="apt-search-form">
      <b-form-select
        v-model="selected_sido"
        :options="optionsSido"
        class="search-option"
        >시도</b-form-select
      >
      <b-form-select
        v-model="selected_gugun"
        :options="optionsGugun"
        class="search-option"
        >구군</b-form-select
      >
      <b-form-select
        v-model="selected_dong"
        :options="optionsDong"
        class="search-option"
        >동</b-form-select
      >
      <b-button variant="outline-primary" class="btn-area-search"
        >검색</b-button
      >
    </div>
    <b-row>
      <b-col cols="9" id="map"></b-col>
      <b-col cols="3" class="info-list">
        <div class="info-list-title">주택 매매 정보</div>
        <div class="info-list-contents">
          <b-row class="info-list-content">
            <b-col cols="4" class="info-list-content-img"
              ><img class="aptImg" src=@/assets/logo.png alt="" /></b-col
            >
            <b-col cols="5" class="info-list-content-name">이름</b-col>
            <b-col cols="3" class="info-list-content-price">거래가</b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "aptMap",
  data() {
    return {
      markers: [],
      selected_sido: "",
      selected_gugun: "",
      selected_dong: "",
      optionsSido: [{ value: null, text: "시도" }],
      optionsGugun: [{ value: null, text: "구군" }],
      optionsDong: [{ value: null, text: "동" }],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=04013d521172d5dd8708bd56e4a64b40";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  },
};
</script>

<style scoped>
#map {
  height: 665px;
  z-index: 1;
}
.info-list {
  background-color: rgb(186, 186, 186);
  padding: 10px;
}
.info-list-title {
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  border-bottom: 1px black dotted;
}
.info-list-contents {
  overflow: auto;
  padding: 10px;
  height: 560px;
}
.info-list-content {
  padding: 3px;
  border-bottom: 1px black dotted;
}
.info-list-content-img,
.info-list-content-name,
.info-list-content-price {
  height: 110px;
  line-height: 110px;
  margin: 0;
}
.aptImg {
  width: 90px;
  height: 90px;
}
.apt-search-form {
  border: 1px black solid;
  position: fixed;
  top: 150px;
  left: 50px;
  z-index: 3;
  width: 300px;
  height: 100px;
}
.search-option {
  margin: 5px;
}
.btn-area-search {
  width: 50px;
  height: 22px;
  font-size: 10px;
  line-height: 10px;
  margin-left: 3px;
}
</style>
