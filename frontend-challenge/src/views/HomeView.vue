<template>
  <div class="home">
    <img alt="flashi logo - your AI powered flsh card generator" src="../assets/opcao_final.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
/* .home{
  background-image: url('../assets/Vector.png');
  background-color: #222021;
  object-fit: cover;
} */
</style>
