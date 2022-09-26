<template>
  <AppHeader/>
  <main style="margin-top: 82px;">
    <router-view/>
  </main>
</template>

<script setup lang='ts'>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style lang="scss">
@import '@/assets/style';
</style>
