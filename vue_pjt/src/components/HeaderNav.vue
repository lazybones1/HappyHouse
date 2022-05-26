<template>
  <b-container fluid>
    <b-row class="nav">
      <b-col cols="3"
        ><h3 class="nav-center">
          <router-link :to="{ name: 'home' }" class="Logo"
            >HappyHouse</router-link
          >
        </h3></b-col
      >
      <b-col cols="5" offset-md="4">
        <b-nav small class="nav-center">
          <b-nav-item active class="nav-center"
            ><router-link :to="{ name: 'apt' }" class="navItem"
              >아파트</router-link
            ></b-nav-item
          >
          <b-nav-item active class="nav-center"
            ><router-link :to="{ name: 'board' }" class="navItem"
              >게시판</router-link
            ></b-nav-item
          >
          <b-nav-item class="nav-center"
            ><router-link :to="{ name: 'notify' }" class="navItem"
              >공지사항</router-link
            ></b-nav-item
          >
          <b-nav-item class="nav-center"
            ><router-link :to="{ name: 'news' }" class="navItem"
              >뉴스</router-link
            ></b-nav-item
          >
          <b-nav-item class="nav-center" v-if="!userInfo"
            ><router-link :to="{ name: 'signIn' }" class="navItem"
              >로그인</router-link
            ></b-nav-item
          >
          <b-nav-item class="nav-center" v-if="!userInfo"
            ><router-link :to="{ name: 'signUp' }" class="navItem"
              >회원가입</router-link
            ></b-nav-item
          >
          <b-nav-item
            class="nav-center"
            v-if="userInfo"
            @click.prevent="onClickLogout"
            ><div class="navItem">로그아웃</div></b-nav-item
          >
          <b-nav-item class="nav-center" v-if="userInfo"
            ><router-link :to="{ name: 'myPage' }" class="navItem"
              >마이페이지</router-link
            ></b-nav-item
          >
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
const memberStore = "memberStore";
export default {
  name: "HeaderNaviBar",
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, [
      "SET_IS_LOGIN",
      "SET_USER_INFO",
      "SET_IS_Admin",
    ]),
    onClickLogout() {
      // console.log("memberStore : ", ms);
      this.SET_IS_LOGIN(false);
      this.SET_USER_INFO(null);
      this.SET_IS_Admin();
      sessionStorage.removeItem("access-token");
      if (this.$route.path != "/") this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
/* 태그 */
a {
  text-decoration: none;
}
/* 클래스 */
.nav {
  height: 90px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
}
.nav-center {
  height: 90px;
  line-height: 90px;
  margin: 0;
}
.nav-height {
  height: 90;
}
.Logo {
  color: black;
}
.navItem {
  color: black;
}
/* 아이디 */
#my-nav-dropdown {
  color: black;
}
</style>
