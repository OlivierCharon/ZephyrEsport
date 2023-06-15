<template>
  <div>
    <h1 class="text-center uppercase m-12 text-3xl font-bold">
      Our Esport teams
    </h1>
    <div class="flex flex-row items-center justify-around">
      <img
        v-for="game in games"
        :key="game.name"
        class="w-52 transition duration-150 ease-out"
        :class="currentGame==game.name?'':'opacity-50'"
        :src="`/img/games/${game.img}.png`"
        alt=""
        @click="changeGame(game.name)"
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const games = ref([
  {
    name: 'Pokémon Unite',
    img: 'pu',
    txt: "Pokémon Unite est un jeu vidéo d'arène de bataille en ligne multijoueur développé par TiMi Studios et édité par Tencent en partenariat avec The Pokémon Company. Il est le premier jeu de combat stratégique en équipe Pokémon. Il est sorti en juillet 2021 sur Nintendo Switch et en septembre 2021 sur Android et iOS.",
    players: ['player1', 'player2', 'player3', 'player4', 'player5'],
    pastTournaments: [{
      name: 'GA',
      category: 'Arbre professionnel',
      place: 1,
      year: 2020
    }]
  },
  {
    name: 'Super Smash Bros Ultimate',
    img: 'ssbu',
    txt: '',
    players: ['player1', 'player4', 'player5'],
    pastTournaments: [{
      name: 'GA',
      category: 'Arbre professionnel',
      place: 1,
      year: 2020
    }]
  },
  {
    name: 'Fifa 2023',
    img: 'fifa',
    txt: '',
    players: ['player1', 'player2', 'player3', 'player4', 'player5'],
    pastTournaments: [{
      name: 'GA',
      category: 'Arbre professionnel',
      place: 1,
      year: 2020
    }]
  },
  {
    name: 'Trackmania',
    img: 'tm',
    txt: '',
    players: ['player1', 'player2', 'player3', 'player4', 'player5'],
    pastTournaments: [{
      name: 'GA',
      category: 'Arbre professionnel',
      place: 1,
      year: 2020
    }]
  },
  {
    name: 'Dofus',
    img: 'dofus',
    txt: '',
    players: ['player1', 'player2', 'player3', 'player4', 'player5'],
    pastTournaments: [{
      name: 'GA',
      category: 'Arbre professionnel',
      place: 1,
      year: 2020
    }]
  },
  {
    name: 'Grand Tourismo 7',
    img: 'gt7',
    txt: '',
    players: ['player1', 'player2', 'player3', 'player4', 'player5'],
    pastTournaments: [{
      name: 'GA',
      category: 'Arbre professionnel',
      place: 1,
      year: 2020
    }]
  }])

const players = ref([
  {
    firstName: 'John',
    secondName: 'Doe',
    img: 'player1'
  },
  {
    firstName: 'Jeanne',
    secondName: 'Doe',
    img: 'player2'
  }
])
const currentGame = ref(null)

const { titleCase } = useHelpers()

function changeGame (game) {
  this.currentGame = game
  useHead({
    title: `Zephyr Esport - ${titleCase(game)}`
  })
}
</script>

<style>

</style>
