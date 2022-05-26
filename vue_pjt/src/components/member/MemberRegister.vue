<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-card class="text-center mt-3" style="max-width: 60rem" align="left">
          <b-form class="text-left">
            <b-form-group label="아이디:" label-for="userid">
              <b-form-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
                @keyup="idcheck"
              ></b-form-input>
            </b-form-group>
            <div id="idchecker"></div>
            <b-form-group label="비밀번호:" label-for="userpwd">
              <b-form-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                placeholder="비밀번호 입력...."
                @keyup="pwcheck"
              ></b-form-input>
            </b-form-group>
            <div id="pwchecker"></div>
            <b-form-group label="이름:" label-for="username">
              <b-form-input
                type="text"
                id="username"
                v-model="user.username"
                required
                placeholder="이름 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이메일:" label-for="useremail">
              <b-form-input
                type="email"
                id="email"
                v-model="user.email"
                required
                placeholder="이메일 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>

            <b-button
              type="button"
              variant="success"
              class="m-1"
              @click="signUp"
              >회원가입</b-button
            >
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
const memberStore = "memberStore";
export default {
  name: "MemberRegister",
  data() {
    return {
      user: {
        userid: "",
        userpwd: "",
        username: "",
        email: "",
      },
      idchecker: false,
      pwchecker: false,
    };
  },
  methods: {
    ...mapActions(memberStore, ["signup"]),

    async signUp() {
      if (
        this.idchecker &&
        this.pwchecker &&
        this.user.userid != "" &&
        this.user.userpwd != "" &&
        this.user.username != "" &&
        this.user.email != ""
      ) {
        await this.signup(this.user);
        this.$router.push({ name: "home" });
      } else {
        alert("정보를 확인해 주세요");
      }
    },
    idcheck() {
      let checker = document.getElementById("idchecker");
      console.log(this.user.userid);
      if (this.user.userid.length < 6 || this.user.userid.length > 14) {
        this.idchecker = false;
        checker.innerHTML =
          "<div style='color:red'>아이디는 6자 이상 14자 이하여야 합니다.</div>";
      } else {
        this.idchecker = true;
        checker.innerHTML =
          "<div style='color:green'>사용가능한 아이디입니다.</div>";
      }
    },
    pwcheck() {
      let checker = document.getElementById("pwchecker");
      console.log(this.user.userpwd);
      if (this.user.userpwd.length < 6 || this.user.userpwd.length > 14) {
        this.pwchecker = false;
        checker.innerHTML =
          "<div style='color:red'>비밀번호는 6자 이상 14자 이하여야 합니다.</div>";
      } else {
        this.pwchecker = true;
        checker.innerHTML =
          "<div style='color:green'>사용가능한 비밀번호입니다.</div>";
      }
    },
  },
};
</script>

<style></style>
