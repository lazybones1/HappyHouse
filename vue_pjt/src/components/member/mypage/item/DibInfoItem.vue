<template>
  <b-container class="wrapper">
    <b-row>
      <b-col cols="4" v-html="dib.aptName"></b-col>
      <b-col cols="1" v-html="dib.floor"></b-col>
      <b-col cols="1">{{ dib.buildyear }}</b-col>
      <b-col cols="4">{{ dib.address }} {{ dib.addressCode }}</b-col>
      <b-col cols="2" @click="toggleMap">지도</b-col>
    </b-row>
    <div :id="dib.dibsNo" class="staticMap" v-show="mapToggle"></div>
  </b-container>
</template>

<script>
export default {
  name: "dibInfoItem",
  data() {
    return {
      mapToggle: true,
    };
  },
  props: {
    dib: Object,
  },
  mounted() {
    console.log("dib", this.dib);
    if (window.kakao && window.kakao.maps) {
      this.createDibMap();
    } else {
      const script = document.createElement("script");

      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" +
        process.env.VUE_APP_KAKAO_MAP_API_KEY +
        "&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    createDibMap() {
      console.log("test", this.dib.aptName);
      /*global kakao */
      // 이미지 지도에서 마커가 표시될 위치입니다
      let markerPosition = new kakao.maps.LatLng(this.dib.ma, this.dib.la);

      // 이미지 지도에 표시할 마커입니다
      // 이미지 지도에 표시할 마커는 Object 형태입니다
      let marker = {
        position: markerPosition,
      };

      let staticMapContainer = document.getElementById(this.dib.dibsNo), // 이미지 지도를 표시할 div
        staticMapOption = {
          center: new kakao.maps.LatLng(this.dib.ma, this.dib.la), // 이미지 지도의 중심좌표
          level: 3, // 이미지 지도의 확대 레벨
          marker: marker, // 이미지 지도에 표시할 마커
        };

      // 이미지 지도를 생성합니다
      this.staticMap = new kakao.maps.StaticMap(
        staticMapContainer,
        staticMapOption
      );
    },
    toggleMap() {
      if (this.mapToggle) {
        this.createDibMap();
      }

      this.mapToggle = !this.mapToggle;
    },
  },
};
</script>

<style scoped>
.staticMap {
  width: 300px;
  height: 150px;
}
.wrapper {
  padding: 5px;
}
</style>
