<template>
  <AppModal @close="emit('close')">
    <div class="cardInfo">
      <div class="cardText" v-for="(specialty, index) in card.info.specialties">
        <img src="../assets/elf2.jpg" alt="" class="cardImg" v-if="index === 0">
        <p>{{ specialty.title }}</p>
        <h5>{{ specialty.text }}</h5>
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
}

.cardText {
  margin-left: 5px;
  color: black;
  font-size: 20px;
  align-self: center;
}

.cardImg {
  float: right;
  border-radius: 10px;
  width: 300px;
}

</style>
