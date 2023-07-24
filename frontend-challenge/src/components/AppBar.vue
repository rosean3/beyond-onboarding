<template>
  <v-app-bar height="85" color="transparent">
    <template v-slot:prepend>
        <img alt="round flashi logo" src="../assets/flashi_redondo.png" width="70"/>
        <router-link to="/">Home</router-link>
    </template>

  <v-toolbar-title>Title</v-toolbar-title>

  <template v-slot:append>
    <a href="https://github.com/maikermenezes/cria-comp-autoral" class="text">Repositório</a>
    <router-link :to="{name: 'members'}">Integrantes</router-link>
  </template>

  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style scoped>
.text{
    color: pink;
}
</style>