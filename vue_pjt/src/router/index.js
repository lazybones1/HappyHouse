import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";

import store from "@/store/index.js";

Vue.use(VueRouter);

const onlyAuthUser = async (to, from, next) => {
  // console.log(store);
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const getUserInfo = store._actions["memberStore/getUserInfo"];
  let token = sessionStorage.getItem("access-token");
  if (checkUserInfo == null && token) {
    await getUserInfo(token);
  }
  if (checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    next({ name: "signIn" });
    // router.push({ name: "signIn" });
  } else {
    // console.log("로그인 했다.");
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/apt",
    name: "apt",
    component: () => import("@/views/AptView.vue"),
    redirect: "/apt/aptMap",
    children: [
      {
        path: "aptMap",
        name: "aptMap",
        component: () => import("@/components/apt/AptMap.vue"),
      },
    ],
  },
  {
    path: "/house",
    name: "house",
    component: () => import("@/views/HouseView.vue"),
    redirect: "/house/houseMap",
    children: [
      {
        path: "houseMap",
        name: "houseMap",
        component: () => import("@/components/house/HouseMap.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/MemberView.vue"),
    children: [
      {
        path: "singin",
        name: "signIn",
        component: () => import("@/components/member/MemberLogin.vue"),
      },

      {
        path: "singup",
        name: "signUp",
        component: () => import("@/components/member/MemberRegister.vue"),
      },
      {
        path: "mypage",
        name: "myPage",
        redirect: "mypage/dib",
        component: () => import("@/components/member/MemberMypage.vue"),
        children: [
          {
            path: "update",
            name: "mypageUpdate",
            component: () =>
              import("@/components/member/mypage/MemberInfoUpdate.vue"),
          },
          {
            path: "dib",
            name: "dib",
            component: () => import("@/components/member/mypage/DibInfo.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsView.vue"),
    redirect: "/news/list",
    children: [
      {
        path: "list",
        name: "newsList",
        component: () => import("@/components/news/NewsList.vue"),
      },
    ],
  },
  {
    path: "/notify",
    name: "notify",
    component: () => import("@/views/NotifyView.vue"),
    redirect: "/notify/list",
    children: [
      {
        path: "list",
        name: "notifyList",
        component: () => import("@/components/notify/NotifyList.vue"),
      },
      {
        path: "write",
        name: "notifyRegister",
        component: () => import("@/components/notify/NotifyRegister.vue"),
      },
      {
        path: "detail/:articleno",
        name: "notifyDetail",
        component: () => import("@/components/notify/NotifyDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "notifyModify",
        component: () => import("@/components/notify/NotifyModify.vue"),
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/views/BoardView.vue"),
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardList",
        component: () => import("@/components/board/BoardList"),
      },
      {
        path: "/board/detail/:board_no",
        name: "BoardDetail",
        component: () => import("@/components/board/BoardDetail"),
      },
      {
        path: "/board/create/:board_no?",
        name: "BoardCreate",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/board/BoardCreate"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
