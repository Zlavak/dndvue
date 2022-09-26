<template>
  <div class="pop-up">
    <div class="pop-up__overflow" @click="emit('close')"></div>
    <div class="pop-up__content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, onBeforeMount, onBeforeUnmount, computed} from "vue"

const emit = defineEmits(['close'])

const html = computed(() => document.querySelector('html') as HTMLElement)

onBeforeMount(() => html.value.style.overflow = 'hidden')
onBeforeUnmount(() => html.value.style.overflow = 'auto')
</script>

<style scoped lang="scss">
.pop-up {
  &__overflow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
