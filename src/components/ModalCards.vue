<template>
  <AppModal @close="emit('close')">
    <div class="cardInfo">
      <div class="cardText">
        <p>{{ card.info.specialties[0].text }}</p>
      </div>
      <div class="cardImg">
        <img src="../assets/elf2.jpg" alt="" class="cardImg__portrait">
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue"
import AppModal from '@/components/AppModal.vue'
import ICard from "@/interfaces/ICard"

const emit = defineEmits(['close'])

const props = defineProps({
  card: {
    type: Object as () => ICard,
    required: true
  }
})
</script>

<style scoped lang="scss">

.cardInfo {
  background: violet url("@/assets/parchment.jpg") center no-repeat fixed;
  background-size: cover;
  border: 4px ridge #a48989;
  display: grid;
  grid-template-columns: 70% 30%;
}

.cardText {
  margin-left: 5px;
  color: black;
  font-size: 20px;
  top: 0;
  left: 0;
  align-self: center;
  text-align: justify;
}

.cardImg {
  display: flex;
  justify-content: center;

  &__portrait {
    height: 80%;
    align-self: center;
    border-radius: 10px;
  }
}

</style>
