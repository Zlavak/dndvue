<template>
  <div class="home">
    <div class="parchment" @mouseover="showPopUp = true" @mouseleave="showPopUp = false">
      Текст
    </div>
    <PopUp v-if="showPopUp"/>
  </div>
</template>

<script setup lang="ts">
import PopUp from '@/views/HomeView/components/PopUp';
import { ref } from "vue";

const showPopUp = ref(false);
</script>

<style scoped lang="scss">
.home {
  background: url("@/assets/home_background.jpg") center no-repeat;
  width: 100%;
  min-height: 100vh;
  background-size: cover
}

.parchment {
  margin: 0 auto;
}
</style>
