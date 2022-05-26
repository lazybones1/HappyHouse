<template>
  <div class="info-list-content" @click="showDetail">
    <b-row class="info-list-content-info">
      <div class="info-list-title">{{ apt.아파트 }}</div>
      <div class="info-list-price">
        거래 금액 : {{ apt.거래금액 | addMillionWon }}
      </div>
      <div class="info-list-address">
        <span
          >주소 : {{ apt.도로명 }}
          {{ apt.도로명건물본번호코드 | removeZeroAddress }}</span
        >
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "aptListItem",
  props: {
    apt: Object,
  },
  methods: {
    showDetail() {
      this.$emit("showDetail", this.apt);
    },
  },
  filters: {
    addMillionWon(price) {
      return price + " 만원";
    },
    removeZeroAddress(address) {
      return Number(address);
    },
  },
};
</script>

<style scoped>
.info-list-content {
  padding: 11px;
  border-bottom: 1px black dotted;
}
.aptImg {
  width: 100px;
  height: 100px;
}
.info-list-title {
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
}
.info-list-price {
  padding: 1px;
}
.info-list-address {
  padding: 1px;
}
</style>
