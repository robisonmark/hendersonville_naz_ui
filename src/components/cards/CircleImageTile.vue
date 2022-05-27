<template>
  <div class="col-4 tile-circle">
    <div class="tile-image_circle">
      <img :src="tileImage.url" :alt="tileImage.alt" />
    </div>
    <div class="tile-content">
      <div class="tile-content_flextop">
        <h5 class="tile-headline">{{ tileContent.headline }}</h5>
        <div class="tile-description">{{ tileContent.description }}</div>
      </div>
      <div class="tile-details">
        <template v-for="(line, i) in tileContent.details.lines" :key="i">
          <span>{{ line }}</span>
        </template>
      </div>
    </div>
    <button class="tile-cta" :url="tileButton.url">{{ tileButton.cta }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      tileImage: {
        url: "/SportsAndRecHero.jpg",
        alt: "Softball",
      },
      tileContent: {
        headline: "Men's Softball",
        description:
          "The men of HCN play softball Monday nights in Goodlettsville. Come join us.",
        details: {
          lines: ["Monday Nights", "April - May"],
        },
      },
      tileButton: {
        url: "/",
        cta: "See Schedule",
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
.tile {
  &-circle {
    display: grid;
    grid-template-columns: 45% 10% 45%;
  }
  &-image_circle {
    grid-column: 1/3;
    clip-path: ellipse(50% 50% at 50% 50%);
    height: 150px;
    width: 150px;
  }
  &-content {
    grid-column: 3/3;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  &-description {
    font-family: $montserrat;
    font-weight: 300;
    color: $primary;
    font-size: 0.8rem;
    padding-top: 0.7rem;
  }
  &-details {
    font-family: $montserrat;
    font-style: italic;
    font-weight: 300;
    color: $primary;
    font-size: 0.8rem;
    span {
      display: block;
    }
  }
  &-cta {
    border-radius: 7px;
    font-family: $montserrat;
    font-weight: 500;
    font-size: 0.8rem;
    text-transform: uppercase;
    background-color: $primary;
    color: $primary-accent;
    width: 100%;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
    margin: 1rem auto;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    &:hover {
      mix-blend-mode: darken;
    }
  }
}
</style>
