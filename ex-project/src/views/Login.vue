<template>
	<v-container fill-height style="max-width:450px;">
		<v-layout align-center row wrap>
			<v-flex xs12>
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
			password: null
		}
	}
};
</script>

<style scoped>
</style>
