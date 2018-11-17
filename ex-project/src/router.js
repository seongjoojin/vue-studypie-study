import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인 된 유저니까 막아야
    alert("이미 로그인을 하였습니다.");
    next("/");
  } else {
    next();
  }
};

const onlytAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 아직 로그인 된 유저가 아니니깐 막아야
    alert("로그인이 필요합니다.");
    next("/");
  } else {
    next();
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser,
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlytAuthUser,
      component: () =>
        import(/* webpackChunkName: "mypage" */ "./views/Mypage.vue")
    }
  ]
});
