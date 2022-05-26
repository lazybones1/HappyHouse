<template>
  <div class="info-list-content">
    <b-row class="info-list-content-info">
      <div class="info-list-title">{{ item.place_name }}</div>
      <div class="info-list-price">주소 : {{ item.address_name }}</div>
      <div class="info-list-price">
        <a :href="item.place_url"> 카카오맵 검색 </a>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "aptListItem",
  props: {
    item: Object,
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
