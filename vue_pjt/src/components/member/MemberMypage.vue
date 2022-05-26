<template>
  <b-container class="bv-example-row mt-3">
    <b-alert show><h3>마이페이지</h3></b-alert>
    <b-row>
      <b-col cols="4">
        <b-nav vertical class="w-60 mypage-nav">
          <b-nav-item class="mypage-nav-item"
            ><router-link :to="{ name: 'dib' }" class="black-item"
              >찜 목록</router-link
            ></b-nav-item
          >
          <b-nav-item active class="mypage-nav-item"
            ><router-link :to="{ name: 'mypageUpdate' }" class="black-item"
              >내 정보 수정</router-link
            ></b-nav-item
          >
        </b-nav>
      </b-col>
      <b-col cols="8"><router-view></router-view></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.mypage-nav {
  margin: 10px;
  padding: 20px;
  border-right: 1px dotted black;
  height: 500px;
  width: 70%;
}
.mypage-nav-item {
  border: 1px black;
  padding: 10px;
  margin: 5px;
  background-color: rgb(224, 224, 224);
}
.black-item {
  color: black;
  text-decoration: none;
}
</style>
