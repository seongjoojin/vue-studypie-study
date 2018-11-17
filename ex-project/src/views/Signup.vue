<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert :value="emailError" type="error" class="mb-3">
          이미 존재하는 이메일입니다.
        </v-alert>
        <v-alert :value="signUpError" type="error" class="mb-3">
          이름, 이메일, 비밀번호를 입력해주세요.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>회원가입</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="name"
              label="이름을 입력해주세요."
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="이메일을 입력해주세요."
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="비밀번호를 입력해주세요."
            ></v-text-field>
            <v-btn
              color="secondary"
              large
              block
              depressed
              @click="
                singUp({
                  name,
                  email,
                  password
                });
              "
            >
              회원가입
            </v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  created() {
    this.initSingUp();
  },
  computed: {
    ...mapState(["signUpError", "emailError"])
  },
  methods: {
    ...mapActions(["singUp", "initSingUp"])
  }
};
</script>

<style scoped></style>
