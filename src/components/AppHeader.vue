<template>
  <header class="header">
    <nav class="container">
      <div class="header__links">
        <router-link :to="Routes.RacePage">Расы</router-link>
        <router-link :to="Routes.RacePage">Расы</router-link>
        <router-link :to="Routes.RacePage">Расы</router-link>
      </div>
      <router-link :to="Routes.HomePage">
        <img class="img" src="@/assets/logo.png" alt="">
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Routes from "@/router/routes";
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: black;
  border-bottom: 2px solid white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &__links {
    display: flex;
    gap: 20px;

    > a {
      color: white;
      font-size: 24px;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      transition: 200ms;

      &:hover {
        color: darkred;
      }
    }
  }
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img{
  width: 125px;
  height: 80px;
}

</style>
