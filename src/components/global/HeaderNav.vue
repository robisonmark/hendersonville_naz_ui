<template>
  <header>
    <div class="nav-tophat">
      <a href="">159 Luna Lane, Hendersonville Tn. 37072</a>
    </div>
    <nav id="nav-header">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div class="flex-spacer"></div>
    <div class="logo-container">
      <img
        alt="Hendersonville Church of the Nazarene Logo"
        class="logo"
        src="@/assets/images/HCNLogo.svg"
        width="125"
        height="125"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
// import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

// export default defineComponent({
//   name: 'nav-main',
//   setup() {
//     return {};
//   },
// });
</script>

<style scoped lang="scss">
header {
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-flow: row;
  @media (min-width: 600px) {
    flex-direction: row-reverse;
  }
}

#nav-header {
  display: flex;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-flow: row;
  }
}

.flex-spacer {
  //move to global if not provided
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
}
</style>
