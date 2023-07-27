<template>
  <v-container>
    <h1>Galeria</h1>
    <h3>Flash cards criados pela equipe</h3>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index"
      class="d-flex justify-center align-center">
        <div class="card" @click="onClick(index)">
          <v-sheet
            rounded="xl"
            class="card-face pa-2 ma-2"
            :class="{ 'card-face--front': !card.isFlipped, 'card-face--back': card.isFlipped }"
            :style="`background-image: url(${card.imageUrl})`"
            >
            <div id="frontFace" v-if="!card.isFlipped">{{card.sentence}}</div>
            <div id="backFace" v-else >{{card.translation}}</div>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cards from './data.js'
export default {
  data() {
    return {
      clicked: false,
      isFlipped: false,
      cards: cards
    }
  },
  methods: {
    onClick(index) {
      this.cards[index].isFlipped = !this.cards[index].isFlipped
    },
  }
}
</script>

<style scoped>
.card {
  width: 450px;
  height: 300px;
}
.card-face {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  background-size: cover !important;
  cursor: pointer
}
.card-face--front {
  transform: rotateY(0deg);
}
.card-face--back {
  transform: rotateY(180deg);
  background-image: none !important;
  background-color: rgb(235, 124, 84);
}
#backFace {
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center !important;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
#frontFace{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: bold;
}
h3, h1{
  color: white
}
h3{
  margin-bottom: 2.5rem
}
</style>