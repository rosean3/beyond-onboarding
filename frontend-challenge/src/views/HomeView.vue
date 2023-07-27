<template>
  <div class="home">
    <img id="mainLogo" alt="flashi logo - your AI powered flsh card generator" :src="require('../assets/opcao_final.png')">
    <v-container id="container">
      <v-row justify="center" class="mb-6 mt-3">
        <h1>Projeto Autoral Grupo 3</h1>
      </v-row>
      <v-row justify="center" class="my-6">
        <h3 id="description">Este site consta de uma galeria com diversas flash cards criados utilizando de modelos como Stable Diffusion, DALL-E 2 e Chat GPT</h3>
      </v-row>
      <v-row justify="center" class="my-6">
        <v-btn href="https://royal-settee-903.notion.site/Documenta-o-56aaf176cf4f4793b0bbe0c603c8d278"
          target="_blank"
          variant="tonal"
          id="button"
          size="x-large"
          rounded="xl">
          Nossa documentação
        </v-btn>
      </v-row>
    </v-container>
    <CardGallery/>
  </div>
</template>

<script lang="ts">
import CardGallery from "../components/CardGallery.vue"
export default {
  components: {
    CardGallery
  }
}
</script>

<style scoped>
#mainLogo {
  width: 40%;
}
#container {
  width: 450px;
  /* padding: 0px 2rem; */
}
h3 {
  color: white;
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 219, 187);
  text-align: center;
}
#button {
  background-color: rgb(235, 124, 84);
  color: white;
}
h1 {
  color: white;
}
</style>
