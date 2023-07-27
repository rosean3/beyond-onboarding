<template>
  <v-app-bar height="85" color="#222021">
    <template v-slot:prepend>
        <img alt="round flashi logo" :src="require('../assets/flashi_redondo.png')" width="70"/>
        <router-link to="/" class="linkTexts" id="home">Home</router-link>
    </template>

    <template v-slot:append>
      <a class="linkTexts" href="https://github.com/maikermenezes/cria-comp-autoral">Repositório</a>
      <router-link class="linkTexts" :to="{name: 'members'}">Integrantes</router-link>
    </template>

  </v-app-bar>
</template>

<script>
</script>

<style scoped>
.linkTexts{
  font-size: 1rem;
  margin-right: 1rem;
  color: white;
  text-decoration: none;
}
#home{
  margin-left: 1rem
}
.router-link-active{
  color: rgb(235, 124, 84);
  font-weight: bold;
  text-decoration: underline;
}
</style>