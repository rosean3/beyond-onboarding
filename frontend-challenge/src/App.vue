<template>
  <v-app class="teste">
    <v-main>
      <AppBar/>
      <router-view/>
    </v-main> 
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  components: {
    AppBar
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #222021 !important;
}

div[data-app='true'] {
  background-color: #222021 !important;
}

.teste {
  background-color: #222021 !important;
  background-image: url('./assets/Vector.png') !important;
  background-size: cover !important;
}

.body {
  /* background: url('./assets/Vector.png') no-repeat center center fixed;  */
  /* background-image: url('./assets/Vector.png'); */
  background-color: #222021;
  /* object-fit: cover; */
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
