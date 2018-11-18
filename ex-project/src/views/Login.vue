<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert :value="isLoginError" type="error" class="mb-3">
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert :value="isLogin" type="success" class="mb-3">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="email"
              label="이메일을 입력하세요."
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요."
            ></v-text-field>
            <v-btn
              color="primary"
              large
              block
              depressed
              @click="
                login({
                  email,
                  password
                });
              "
            >
              로그인
            </v-btn>
						<v-btn @click="test">테스트</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import  axios from "axios"

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
		test() {
			axios.get('https://reqres.in/api/users?page=2')
					.then(res => {
						// handle success
						console.log(res);
					})
					.catch(err => {
						// handle error
						console.log(err);
					})
					.then(() => {
						console.log("test")
						// always executed
					});
		}
  }
};
</script>

<style scoped></style>
