<template>
  <div>
    <header-nav></header-nav>
    <main-content></main-content>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import MainContent from "@/components/MainContent.vue";
export default {
  name: "HomeView",
  components: {
    HeaderNav,
    MainContent,
  },
};
</script>
