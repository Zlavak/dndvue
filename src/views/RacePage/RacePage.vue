<template>
  <div class="race">
    <div class="align">
      <button class="filter" @click="toggleFilters"></button>
      <div class="race-filter" v-if="isFiltersVisible">
        <button class="campRaces" :class="{ active: !filterEdition.length }" @click="filterEdition = []">Все</button>
        <button class="campRaces" :class="{ active: filterEdition.includes(filter) }" v-for="filter in filters"
                @click="toggleFilter(filter)">
          {{ filter }}
        </button>
      </div>
    </div>
    <div class="container_cards">
      <button class="card" :class="card.edition" @click="selectCard(card)" v-for="card in filteredCards">{{
          card.text
        }}
      </button>
    </div>
  </div>
  <teleport to="body">
    <ModalCards :card="cardToModal" v-if="showModal" @close="showModal = false"/>
  </teleport>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {filters} from '@/utils/filters';
import {cards} from "@/utils/cards";
import ModalCards from '@/components/ModalCards.vue';
import ICard from "@/interfaces/ICard";

const isFiltersVisible = ref(false)

const toggleFilters = (): void => {
  isFiltersVisible.value = !isFiltersVisible.value
}

const filterEdition = ref([''])
filterEdition.value.pop()

const toggleFilter = (edition: string): void => {
  if (filterEdition.value.includes(edition)) {
    filterEdition.value = filterEdition.value.filter((item: string): boolean => item !== edition)
  } else {
    filterEdition.value.push(edition)
  }
}

const filteredCards = computed(() => cards.filter((card) => filterEdition.value.includes(card.edition) || !filterEdition.value.length))

const clearCard: ICard = {
  edition: '',
  text: '',
  info: {
    specialties: [
      {
        title: '',
        text: '',
      }
    ]
  }
}
const cardToModal = ref(clearCard)

const showModal = ref(false)

const selectCard = (card: ICard) => {
  cardToModal.value = card
  showModal.value = true
}
</script>

<style scoped lang="scss">
.race {
  background: black url("@/assets/race_back.jpg") center no-repeat fixed;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.align {
  display: flex;
}

.race-filter {
  flex-flow: wrap;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.filter {
  background: #FFFFFF9D url("@/assets/filter.svg") center no-repeat;
  margin-left: 100px;
  margin-top: 20px;
  width: 50px;
  height: 50px;
}

.campRaces {
  background: #A9A7A779;
  border: 1px solid black;
  height: 40px;
  width: 100px;
  text-align: center;
  font-size: large;
  color: white;

  &:hover {
    background: #294F2779;
  }

  &.active {
    background: #294F2779;
  }
}


.container_cards {
  display: flex;
  flex-flow: wrap;
  min-width: 1024px;
}

.card {
  width: calc(20% - 48px);
  margin: 24px;
  min-height: 237px;
  line-height: 237px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  background: black;
}

.hide {
  transform: scale(0);
  opacity: 0
}

</style>
