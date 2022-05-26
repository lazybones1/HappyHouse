<template>
  <div>
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "aptView",
  components: {
    HeaderNav,
  },
};
</script>

<style></style>
