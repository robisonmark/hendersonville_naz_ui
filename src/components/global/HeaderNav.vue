<template>
  <header>
    <div class="container container-flex header-container">
      <div class="nav-tophat">
        <a href="https://goo.gl/maps/9uSjb5EEQjSzH6ya6" class="location">
          <!-- <span class="material-icons-two-tone" style='font-variation-settings: "FILL" 0, "wght" 400, "GRAD" -25, "opsz" 48;'>directions_car</span> -->
          <span class="material-icons-outlined">location_on</span>
          <span class="desktop">159 Luna Lane, Hendersonville Tn. 37072</span>
        </a>
      </div>
      <nav id="nav-header">
        <span class="material-icons-two-tone">menu</span>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="flex-spacer"></div>
      <div class="logo-container">
        <img
          alt="Hendersonville Church of the Nazarene Logo"
          class="logo"
          src="@/assets/images/HCNLogo.svg"
        />
      </div>
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
@import "../../assets/scss/variables";

header {
  background-color: $primary;
  width: 100%;
  max-width: 100vw;
  position: fixed;
  height: 60px;
  color: $primary-accent;
  z-index: 1;

  @media (max-width: 600px) {
    bottom: 0;
  }

  @media (min-width: 600px) {
    height: 70px;
    flex-direction: row-reverse;
    top: 0;
  }

  .header-container {
    height: inherit;
    align-items: center;
    @media (min-width: 600px) {
      flex-direction: row-reverse;
      top: 0;
    }
  }
}

.logo-container {
  background-color: $whiteish;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: fixed;
  right: 2rem;
  bottom: 0;
  box-shadow: 0px 0px 2px $primary;
  .logo {
    width: 40px;
    margin: 10px;
  }

  @media (min-width: 600px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    position: relative;
    top: 1.5rem;
    left: 0;
    .logo {
      width: 50px;
    }
  }
}

.location {
  color: $primary-accent;
  fill: $primary-accent;
  font-variation-settings: "wght" 100, "FILL" $primary-accent;
  display: inline-flex;
  align-items: center;
}

#nav-header {
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-flow: row;
  }
}

// Global Styles
// .container {
//   display: flex;
//   max-width: 1640px;
//   padding-left: 1rem;
//   padding-right: 1rem;
//   margin-right: auto;
//   margin-left: auto;
// }

.flex-spacer {
  //move to global if not provided
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
}

.desktop {
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
  }
}
</style>
