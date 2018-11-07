<template>
  <v-container>
    <h1>Home</h1>
		<h4>모든 유저수: {{ $store.getters.allUsersCount }}</h4>
  </v-container>
</template>
