<template>
  <div class="hero_full" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
    <div class="container">
      <FullWidthHeroHeadlineCircle class="content-container__circle">
      </FullWidthHeroHeadlineCircle>
      <!-- See about moving below into svg circle -->
      <div class="hero_content">
        <h1>
          {{ headline }}
          <span class="headline_break">{{ headlineSecondLine }}</span>
        </h1>
        <div class="pt-2">
          <h2 v-for="(line, i) in tagline" :key="i" class="tagline">
            {{ line }}
          </h2>
          <h3 class="lower thin">{{ information }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import FullWidthHeroHeadlineCircle from "./FullWidthHeroHeadlineCircle.vue";

export default defineComponent({
  setup() {
    return {
      heroImage: "/Hero_Image_Placeholder.jpg",
      headline: "Hendersonville",
      headlineSecondLine: "Church of the Nazarene",
      tagline: ["Loving", "Serving", "Sharing", "Becoming"], // define rules and use polymorphism to break or keep together(?) or always send as list
      information: "Connect Groups 9:30a | Worship Gathering 10:30a", // needs note in admin saying the style of this will be all lower case
    };
  },

  components: {
    FullWidthHeroHeadlineCircle,
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.hero_full {
  background: right/cover no-repeat;
  position: relative;
  width: 100%;
  height: 80vh;
  max-height: calc(100vw * 1.5);
  .container {
    position: relative;
    height: inherit;
  }

  // this should move to the circle component itself
  .content-container__circle {
    max-width: $content-max-width;
    height: 100%;
    max-height: calc(100vw * 1.09);
    position: absolute;
    bottom: clamp(-10rem, -17vh, -4rem);
    right: clamp(-13rem, -15vw, -8rem);
  }

  @media (min-width: 1080px) and (orientation: landscape) {
    max-height: calc(100vw * 0.7778);
    .content-container__circle {
      max-height: calc(100vw * 0.7778);
    }
  }

  @media (min-width: 1080px) and (orientation: portrait) {
    max-height: calc(100vw * 1.7778);
    .content-container__circle {
      max-height: calc(100vw * 1.7778);
    }
  }
}

.hero_content {
  z-index: 1;
  text-align: right;
  position: absolute;
  bottom: clamp(4rem, 13%, 10rem);
  right: 1rem;
}

h1 {
  display: flex;
  flex-flow: column;
  text-align: right;
  z-index: 1;
}
</style>
