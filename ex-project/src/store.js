import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
      { id: 2, name: "lego", email: "lego@gmail.com", password: "123456" }
    ],
    isLogin: false,
    isLoginError: false,
    signUpError: false,
    emailError: false
  },
  mutations: {
    //로그인이 성공했을 때
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.userInfo = payload;
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
    initSingUp(state) {
      state.signUpError = false;
      state.emailError = false;
    },
    // 회원 가입에 실패했을 때
    signUpError(state) {
      state.signUpError = true;
      state.emailError = false;
    },
    // 중복된 이메일을 입력 했을 때
    emailError(state) {
      state.emailError = true;
      state.signUpError = false;
    }
  },
  actions: {
    // 로그인 시도
    login({ commit }, loginObj) {
			axios
					.post("https://reqres.in/api/login",
						loginObj	// 파라메타(body)
					)
					.then(res => {
						// 성공시 token: 블라블라(실제로는 user_id를 받아옴.)
						// 토큰을 헤더에 포함시켜 유저정보를 요청
						let token =  res.data.token
						let config = {
							headers: {
								"access-token": token
							}
						}
						axios
								.get("https://reqres.in/api/users/2",
										config
								)
								.then(response => {
									console.log(response)
									let userInfo = {
										id: response.data.data.id,
										first_name: response.data.data.first_name,
										last_name: response.data.data.last_name,
										avatar: response.data.data.avatar
									}
									commit('loginSuccess', userInfo)
								})
								.catch(() => {
									alert('이메일과 비밀번호를 확인하세요.')
								})
					})
					.catch(() => {
						alert('이메일과 비밀번호를 확인하세요.')
					});
      // let selectedUser = null;
      // state.allUsers.forEach(user => {
      //   if (user.email === loginObj.email) selectedUser = user;
      // });
      // if (selectedUser === null || selectedUser.password !== loginObj.password)
      //   commit("loginError");
      // else {
      //   commit("loginSuccess", selectedUser);
      //   router.push({ name: "mypage" });
      // }
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    },
    singUp({ state, commit, dispatch }, singUpObj) {
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if (user.email === singUpObj.email) selectedUser = user;
      });
      if (selectedUser !== null) {
        commit("emailError");
      } else if (
        singUpObj.name === null ||
        singUpObj.email === null ||
        singUpObj.password === null
      ) {
        commit("signUpError");
      } else {
        state.allUsers.push({
          name: singUpObj.name,
          email: singUpObj.email,
          password: singUpObj.password
        });
        dispatch("login", {
          email: singUpObj.email,
          password: singUpObj.password
        });
      }
    },
    initSingUp({ commit }) {
      commit("initSingUp");
    }
  }
});
