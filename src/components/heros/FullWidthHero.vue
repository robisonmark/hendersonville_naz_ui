<template>
  <div class="hero_full" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
    <div class="container">
      <FullWidthHeroHeadlineCircle class="content-container__circle">
      </FullWidthHeroHeadlineCircle>
      <!-- <div class="content-container__circle"> -->
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
      <!--</div> -->
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
      tagline: ["To Seek", "To Serve", "To Share"], // define rules and use polymorphism to break or keep together(?) or always send as list
      information: "Sunday School 9:30a | Worship Gathering 10:30a", // needs note in admin saying the style of this will be all lower case
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
  }
  .content-container__circle {
    max-width: $content-max-width;
    height: 100vh;
    max-height: calc(100vw * 1.09);
    position: absolute;
    top: calc((100vw * 1.5) - (100vw * 1.09) + 4rem);
    @media (min-width: 600px) {
      top: 4vh;
      right: -20vw;
    }
  }

  @media (min-width: 1080px) {
    max-height: calc(100vw * 1.7778);
    .content-container__circle {
      max-height: calc(100vw * 1.7778);
      right: -12vw;
    }
  }
}

.hero_content {
  z-index: 1;
  text-align: right;
  position: relative;
  top: 35vh;
  right: 1rem;
}

h1 {
  display: flex;
  flex-flow: column;
  text-align: right;
  z-index: 1;
}
</style>
