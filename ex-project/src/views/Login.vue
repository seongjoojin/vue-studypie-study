<template>
	<v-container fill-height style="max-width:450px;">
		<v-layout align-center row wrap>
			<v-flex xs12>
				<v-alert
								:value="isError"
								type="error"
								class="mb-3"
				>
					아이디와 비밀번호를 확인해주세요.
				</v-alert>
				<v-alert
								:value="loginSuccess"
								type="success"
								class="mb-3"
				>
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
											@click="login()"
							>
								로그인
							</v-btn>
						</div>
					</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      allUsers: [
        { id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
        { id: 2, name: "lego", email: "lego@gmail.com", password: "123456" }
      ],
      isError: false,
      loginSuccess: false
    };
  },
  methods: {
    login() {
      // 전체 유저에서 해당 이메일로 유저를 찾는다
      let selectedUser = null;
      this.allUsers.forEach(user => {
        if (user.email === this.email) selectedUser = user;
      });
      selectedUser === null
        ? (this.isError = true)
        : selectedUser.password !== this.password
          ? (this.isError = true)
          : (this.loginSuccess = true);
      // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
    }
  }
};
</script>

<style scoped>
</style>
