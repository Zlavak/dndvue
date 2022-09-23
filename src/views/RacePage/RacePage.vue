<template>
  <div class="race">
    <div class="align">
      <button class="filter" @click="toggleElement"></button>
      <div
          class="racefilt"
          v-if="isElementVisible"
          @click = "app"
      >
        <button class="campRaces btn_All" data-filter="ALL">Все</button>
        <button class="campRaces btn_PHB" data-filter="PHB">PHB</button>
        <button class="campRaces btn_AI" data-filter="AI">AI</button>
        <button class="campRaces btn_RLW" data-filter="RLW">RLW</button>
        <button class="campRaces btn_GGR" data-filter="GGR">GGR</button>
        <button class="campRaces btn_MTF" data-filter="MTF">MTF</button>
        <button class="campRaces btn_MOT" data-filter="MOT">MOT</button>
        <button class="campRaces btn_VGM" data-filter="VGM">VGM</button>
        <button class="campRaces btn_POA" data-filter="POA">POA</button>
        <button class="campRaces btn_SCC" data-filter="SCC">SCC</button>
        <button class="campRaces btn_WBW" data-filter="WBW">WBW</button>
        <button class="campRaces btn_LR" data-filter="LR">LR</button>
        <button class="campRaces btn_OGA" data-filter="OGA">OGA</button>
        <button class="campRaces btn_TP" data-filter="TP">TP</button>
      </div>
    </div>
    <div class="container_cards">
      <div class="card POA">Ааракокра</div>
      <div class="card VGM">Аасимар</div>
      <div class="card VGM">Багбир</div>
      <div class="card GGR">Ведалкен</div>
      <div class="card AI">Вердан</div>
      <div class="card GGR">Гибрид Симиков</div>
      <div class="card MTF">Гит</div>
      <div class="card PHB">Гном</div>
      <div class="card VGM">Гоблин</div>
      <div class="card VGM">Голиаф</div>
      <div class="card OGA">Грунг</div>
      <div class="card PHB">Дварф</div>
      <div class="card POA">Дженази</div>
      <div class="card PHB">Драконорожденный</div>
      <div class="card WBW">Зайцегон</div>
      <div class="card RLW">Калаштар</div>
      <div class="card VGM">Кенку</div>
      <div class="card GGR">Кентавр</div>
      <div class="card VGM">Кобольд</div>
      <div class="card RLW">Кованый</div>
      <div class="card MOT">Леонинец</div>
      <div class="card LR">Локата</div>
      <div class="card GGR">Локсодон</div>
      <div class="card VGM">Людоящер</div>
      <div class="card GGR">Минотавр</div>
      <div class="card VGM">Орк</div>
      <div class="card PHB">Полуорк</div>
      <div class="card PHB">Полурослик</div>
      <div class="card PHB">Полуэльф</div>
      <div class="card MOT">Сатир</div>
      <div class="card SCC">Совлин</div>
      <div class="card VGM">Табакси</div>
      <div class="card PHB">Тифлинг</div>
      <div class="card TP">Тортл</div>
      <div class="card VGM">Тритон</div>
      <div class="card WBW">Фейри</div>
      <div class="card VGM">Фирболг</div>
      <div class="card VGM">Хобгоблин</div>
      <div class="card RLW">Чейнджлинг</div>
      <div class="card PHB">Человек</div>
      <div class="card RLW">Шифтер</div>
      <div class="card PHB">Эльф</div>
      <div class="card VGM">Юань-ти</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isElementVisible = ref(false)
const toggleElement = () => {
  isElementVisible.value = !isElementVisible.value
}


function app() {
  const buttons = document.querySelectorAll('.campRaces');
  const cards = document.querySelectorAll('.card')

  function filter(category: any, items: any) {
    items.forEach((item: any) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === 'all'

      if (isItemFiltered && !isShowAll) {
        item.classList.add('hide')
      } else {
        item.classList.remove('hide')
      }
    })
  }

  buttons.forEach((button: any) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter
      filter(currentCategory, cards)
    })
  })
}

app()

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

.racefilt {
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
}

.campRaces:hover {
  background: #294F2779;
}

.campRaces:active {
  background: #294F2779;
}


.container_cards {
  display: flex;
  flex-flow: wrap;
  min-width: 1024px;
  justify-content: space-around;
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
