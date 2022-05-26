<template>
  <b-container class="bv-example-row mt-3">
    <b-alert variant="secondary" show><h3>내 정보 수정</h3></b-alert>
    <b-row>
      <b-card class="text-center mt-3" style="max-width: 60rem" align="left">
        <b-form class="text-left">
          <b-form-group label="아이디:" label-for="userid">
            <b-form-input
              id="userid"
              v-model="user.userid"
              placeholder="아이디 입력...."
              @keyup.enter="confirm"
              disabled
            ></b-form-input>
          </b-form-group>
          <b-form-group label="비밀번호:" label-for="userpwd">
            <b-form-input
              type="password"
              id="userpwd"
              v-model="user.userpwd"
              required
              placeholder="비밀번호 입력...."
              @keyup.enter="confirm"
            ></b-form-input>
          </b-form-group>
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
            @click="updateuser"
            >변경하기</b-button
          >
        </b-form>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(memberStore, ["update"]),
    init() {
      this.user = this.userInfo;
    },
    async updateuser() {
      if (
        this.user.userid != "" &&
        this.user.username != "" &&
        this.user.email != ""
      ) {
        await this.update(this.user);
        this.$router.push({ name: "home" });
      }
    },
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
};
</script>

<style></style>
