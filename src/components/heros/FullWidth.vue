<template>
  <div class="hero_full" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
    <div class="container">
      <div class="content-container__circle">
        <div class="hero_content">
          <h1>
            {{ headline }}
            <span class="headline_break">{{ headlineSecondLine }}</span>
          </h1>
          <div class="p2">
            <h2 v-for="(line, i) in tagline" :key="i" class="tagline">
              {{ line }}
            </h2>
            <h3>{{ information }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      heroImage: "/Hero_Image_Placeholder.jpg",
      headline: "Hendersonville",
      headlineSecondLine: "Church of the Nazarene",
      tagline: ["To Seek", "To Serve", "To Share"], // define rules and use polymorphism to break or keep together(?) or always send as list
      information: "Sunday School 9:30a | Worship Gathering 10:30a", // needs not in admin saying the style of this will be all lower case
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.hero_full {
  background: right/cover no-repeat;
  position: relative;
  width: 100%;
  height: 82vh;
  .content-container__circle {
    max-width: $content-max-width;
    height: 82vh;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    &:after {
      position: absolute;
      right: -6rem;
      bottom: -8rem;
    }
  }
}

.hero_content {
  z-index: 1;
  text-align: right;
  margin-top: 7rem;
}
.tagline {
  display: inline;
  line-height: 0.9;
  &:not(:first-child):before {
    content: "•";
    display: inline;
    vertical-align: middle;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

h1 {
  display: flex;
  flex-flow: column;
  text-align: right;
  z-index: 1;
}
// Probably Global
// Remember Circle can extend out of view box but content should never move past edge of top nav
.content-container__circle:after {
  content: "";
  height: 38rem;
  width: 40rem;
  border-radius: 50%;
  background-color: $secondary-accent;
  mix-blend-mode: multiply;
}

.p2 {
  padding-top: 2rem;
}
</style>
