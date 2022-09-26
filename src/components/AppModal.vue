<template>
  <div class="overflow" @click="close"></div>
  <div class="popup">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {defineEmits} from "vue"
const emit = defineEmits(['close'])

const close = () => {
  console.log('close')
  emit('close')
}
</script>

<style scoped lang="scss">

.overflow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    color: white;
  }
}


</style>