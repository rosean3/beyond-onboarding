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

export default {
  data() {
    return {
      clicked: false,
      isFlipped: false,
      cards: [
        {
          imageUrl: 'https://drive.google.com/uc?id=1vvSBaTWk-G0ZhBT10p-WGAmyDWjB2Zv6',
          sentence: "Please, don't tear the letter.",
          translation: "Por favor, não rasgue a carta.",
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1ufLykyXwPNSO5EkjUqR7ymIz8UO48f2P',
          sentence: 'I need to go to the bank to withdraw some money.',
          translation: 'Eu preciso ir ao banco para sacar algum dinheiro.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1CbRoxIdtRVRdNqJfmoX1VNQfLafs_5De',
          sentence: 'We had a picnic on the bank of the river.', 
          translation: 'Nós tivemos um piquenique na margem do rio.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1p0sH13vy2ddK6xlg5eV49MZYPOllxYqb',
          sentence: 'The cross on the church is very tall.',
          translation: 'A cruz na igreja é muito alta.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1kvFLpU1gFCwymKT0I7-XPisQVLa-kMWo',
          sentence: 'I need to deposit some money at the bank.',
          translation: 'Eu preciso depositar dinheiro no banco.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1O7aRmT9bYeIm9QBigmKtonK12ziESmis',
          sentence: 'The actress shed a tear during the emotional scene.',
          translation: 'A atriz derramou uma lágrima durante a cena emocionante.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1pLYskK11gj_grJ2g6zOj7OFcfnU0xtxu',
          sentence: 'They had to cross the river using a narrow bridge.',
          translation: 'Eles tiveram que atravessar o rio usando uma ponte estreita.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1hiMtOR7vz15m7YCsgFKubjTUQYHw_W3H',
          sentence: 'She sat on the bank of the river enjoying the peaceful view.',
          translation: 'Ela sentou na margem do rio apreciando a vista pacífica.',
          isFlipped: false
        },
        {
          imageUrl: 'https://drive.google.com/uc?id=1Ec2dLdgP5CcmPHyCaGov-n11c2Jo9cJC',
          sentence: 'The cat was sleeping on the top of the book bank.',
          translation: 'O gato estava dormindo no topo de uma pilha de livros.',
          isFlipped: false
        },
      ]
    }
  },
  methods: {
    onClick(index) {
      this.cards[index].isFlipped = !this.cards[index].isFlipped
    }
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