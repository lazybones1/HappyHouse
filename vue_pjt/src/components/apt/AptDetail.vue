<template>
  <div>
    <div class="closeDetail">
      <b-icon
        icon="arrow-right"
        scale="2"
        variant="dark"
        @click="closeDetail"
      ></b-icon>
    </div>
    <div class="apt-detail-info">
      <hr />
      <p class="apt-detail-title">{{ apt.아파트 | aptName }}</p>
      <hr />
      <p class="apt-detail-price">금액 : {{ apt.거래금액 | addMillionWon }}</p>
      <p class="apt-detail-build">건축연도 : {{ apt.건축년도 }}</p>
      <p class="apt-detail-address-road">
        주소 : {{ apt.도로명 }}
        {{ apt.도로명건물본번호코드 | removeZeroAddress }}
      </p>
      <p class="apt-detail-floar">층 : {{ apt.층 }}</p>
      <hr />
    </div>
    <div v-if="userInfo">
      <div v-if="dibToggle" @click="remove" class="heart">
        <b-icon icon="heart-fill" variant="danger"></b-icon> 매물 찜 취소
      </div>
      <div v-if="!dibToggle" @click="addNewDib" class="heart">
        <b-icon icon="heart" variant="danger"></b-icon> 매물 찜
      </div>
    </div>
    <p @click="printRoadView" class="openRoadView">로드뷰</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
const dibStore = "dibStore";
export default {
  name: "aptDetail",
  props: {
    apt: Object,
  },
  data() {
    return {
      dibToggle: "false",
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(dibStore, ["dibList"]),
  },
  created() {
    if (this.userInfo) {
      this.getList(this.userInfo.userid);
      this.toggleDib();
    }
  },
  filters: {
    aptName(aptName) {
      return aptName + " 아파트";
    },
    addMillionWon(price) {
      return price + " 만원";
    },
    removeZeroAddress(address) {
      return Number(address);
    },
  },
  methods: {
    ...mapActions(dibStore, ["addDib", "getList", "removeDib"]),
    closeDetail() {
      this.$emit("closeDetail");
    },
    printRoadView() {
      this.$emit("printRoadView", this.apt.index);
    },
    async addNewDib() {
      let dib = {
        userid: this.userInfo.userid,
        aptName: this.apt.아파트,
        la: this.apt.La,
        ma: this.apt.Ma,
        buildyear: this.apt.건축년도,
        floor: this.apt.층,
        address: this.apt.도로명,
        addressCode: this.apt.도로명건물본번호코드,
        serialNumber: this.apt.일련번호,
      };
      this.addDib(dib);
      this.getList(this.userInfo.userid);
      setTimeout(() => {
        this.getList(this.userInfo.userid);
        setTimeout(() => {
          this.toggleDib();
        }, 100);
      }, 100);
    },
    remove() {
      let dib = {
        floor: this.apt.층,
        serialNumber: this.apt.일련번호,
      };
      this.removeDib(dib);
      setTimeout(() => {
        this.getList(this.userInfo.userid);
        setTimeout(() => {
          this.toggleDib();
        }, 100);
      }, 100);
    },
    toggleDib() {
      if (
        this.dibList.some(
          (item) =>
            item.serialNumber == this.apt.일련번호 && item.floor == this.apt.층
        )
      ) {
        this.dibToggle = true;
      } else {
        this.dibToggle = false;
      }
    },
  },
};
</script>

<style scoped>
.closeDetail {
  position: absolute;
  left: 20px;
  top: 5px;
}
.apt-detail-info {
  margin-top: 10px;
  padding: 15px;
}
.apt-detail-title {
  font-weight: bold;
  font-size: 30px;
  padding: 30px;
}
.apt-detail-price {
  text-align: left;
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
}
.apt-detail-build {
  text-align: left;
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
}
.apt-detail-address-road {
  text-align: left;
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
}
.apt-detail-floar {
  font-size: 15px;
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
}
.openRoadView {
  padding: 20px;
  background-color: rgb(233, 233, 233);
  font-size: 20px;
  font-weight: bold;
}
.heart {
  text-align: center;
  width: 100%;
  height: 40px;
}
</style>
