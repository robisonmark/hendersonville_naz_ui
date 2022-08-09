<template>
  <header>
    <div class="container container-flex header-container">
      <div class="mobile flex-g-1" @click="openNav = !openNav">
        <!-- <span class="material-icons-two-tone">menu</span> -->
        <GoogleIcon icon="menu" fillName="primary-accent"></GoogleIcon>
      </div>
      <div class="grid flex-g-1">
        <div class="nav-tophat">
          <a href="https://goo.gl/maps/9uSjb5EEQjSzH6ya6" class="location">
            <GoogleIcon icon="location_on" fillName="primary-accent"></GoogleIcon>
            <address class="desktop">159 Luna Lane, Hendersonville Tn. 37072</address>
          </a>
        </div>
        <nav id="nav-header" :class="{ open: openNav }">
          <ul>
            <li class="top-level"><RouterLink to="/">Home</RouterLink></li>
            <li
              class="top-level dropdown"
              :class="{ expand: openMenu.includes('about') }"
              @click.stop.prevent="toggleMenu('about')"
              @mouseenter="toggleMenu('about')"
              @mouseleave="toggleMenu('about')"
            >
              <span class="clickable" >
                Who We Are
                <span class="material-icons-two-tone mobile">add</span>
                <span class="material-icons-two-tone desktop">expand_more</span>
              </span>
              <ul>
                <li><RouterLink to="/">Beliefs</RouterLink></li>
                <li><RouterLink to="/">Ministries</RouterLink></li>
                <li><RouterLink to="/">Leadership</RouterLink></li>
                <li><RouterLink to="/">Mission</RouterLink></li>
              </ul>
            </li>
            <li class="top-level">
              <RouterLink to="/events">Events</RouterLink>
            </li>
            <li><button class="connect">Connect With Us</button></li>
          </ul>
        </nav>
      </div>
      <div class="mobile flex-g-1">
        <a href="tel: 6158244411">
          <GoogleIcon icon="smartphone" fillName="primary-accent"></GoogleIcon>
        </a>
      </div>
      <div class="flex-spacer"></div>
      <a href="/" class="logo-container">
        <img
          alt="Hendersonville Church of the Nazarene Logo"
          class="logo"
          src="@/assets/images/HCNLogo.svg?url"
        />
      </a>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Vue
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Internal
import GoogleIcon from "../elements/googleIcons.vue";

const openMenu = ref<string[]>([]);
const openNav = ref(false);

function toggleMenu(menuName: string) {
  const index = openMenu.value.indexOf(menuName);
  console.log(index)
  if (index === -1) {
    openMenu.value = [...openMenu.value, menuName];
  } else {
    openMenu.value.splice(index, 1);
  }
}
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
  z-index: 2;

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
  font-family: $montserrat;
  color: $primary-accent;
  fill: $primary-accent;
  @media (min-width: 600px) {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    .material-icons-outlined {
      font-size: 0.9rem;
      padding-right: 5px;
    }
  }
}

#nav-header {
  display: flex;
  font-family: $roboto;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 60px;
    background: $secondary;
    max-width: 55%;
    left: 0;
    font-weight: 400;
    height: 0;

    &.open {
      height: calc(100vh - 60px);
    }

    ul {
      overflow-y: scroll;
      padding-left: 1rem;
    }
    .top-level {
      padding-top: 1rem;
      padding-left: 0.5rem;
      font-size: 1.1rem;
      &:not(:first-child):before {
        content: "";
        display: block;
        height: 2px;
        width: calc(100% - 0.5rem);
        background-color: $church-primary;
        margin-bottom: 1rem;
        position: relative;
        left: -0.5rem;
      }
      &:last-child {
        padding-bottom: 1rem;
      }
    }

    .dropdown {
      .clickable {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
      }
      span:not(.clickable) {
        font-size: 1.2rem;
        padding-left: 0.3rem;
        padding-right: 1rem;
        flex-grow: 1;
      }

      ul {
        display: none;
      }

      &.expand {
        ul {
          // remove override
          display: block;
          padding-left: 0rem;
        }
        li {
          text-transform: none;
          font-family: $roboto;
          font-size: 0.9rem;
          padding-bottom: 1rem;
          padding-top: 1rem;
          display: flex;
          align-items: center;
          &:before {
            content: "";
            display: inline-block;
            height: 1px;
            width: 0.7rem;
            margin-right: 0.5rem;
            background-color: $primary-accent;
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    justify-content: flex-end;
    flex-flow: row;
    ul {
      display: flex;
      justify-content: space-between;
      height: inherit;
      align-items: center;
    }

    li {
      display: inline-block;
      height: inherit;
      &:not(:last-child) {
        padding-right: 1rem;
      }
      &:not(:first-child) {
        padding-left: 1rem;
      }
    }

    .dropdown {
      cursor: pointer;
      .clickable {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        height: calc(70px * 0.5);
      }
      span:not(.clickable) {
        font-size: 1.2rem;
        padding-left: 0.3rem;
        flex-grow: 1;
      }

      ul {
        display: none;
      }

      &.expand {
        position: relative;
        background-color: $secondary-accent;
        ul {
          // remove override
          display: block;
          padding-left: 0rem;
          position: absolute;
          left: 0;
          background-color: $secondary-accent;
          width: 100%;
        }
        li {
          text-transform: uppercase;
          font-family: $roboto;
          font-size: 0.9rem;
          font-weight: 300;
          padding: 1rem;
          display: flex;
          align-items: center;
          &:hover {
            background-color: $secondary;
          }
        }
      }
    }
  }
}

.connect {
  border: 2px solid $primary-accent;
  padding: 5px;

  @media (max-width: 600px) {
    margin: 1rem auto;
    position: relative;
    transform: translateX(-5%);
  }
}

// Global Styles
.grid {
  @media (max-width: 600px) {
    flex-grow: 1;
  }
  @media (min-width: 600px) {
    display: grid;
    height: inherit;
    grid-template-rows: 45% 45%;
    .nav-tophat {
      grid-row: 1 / 2;
      align-self: end;
      text-align: right;
    }
    #nav-header {
      grid-row: 2 / 2;
      align-self: center;
    }
  }
}
.flex-spacer {
  //move to global if not provided
  flex-grow: 1;
  @media (max-width: 600px) {
    // display: none;
    flex-basis: min-content;
  }
}

.desktop {
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
  }
}
.mobile a {
  display: flex;
}

@media (min-width: 600px) {
  .mobile {
    display: none;
  }
}

.flex-g-1 {
  flex-grow: 1;
}
</style>
