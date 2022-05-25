<template>
  <div class="col-4 tile-circle">
    <div class="tile-image_circle">
      <img :src="tileImage.url" :alt="tileImage.alt" />
    </div>
    <div class="tile-content">
      <h5 class="tile-headline">{{ tileContent.headline }}</h5>
      <div class="tile-description">{{ tileContent.description }}</div>
      <div class="tile-details">{{ tileContent.details }}</div>
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
        details: "Monday Nights April - May",
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
  }
  &-image_circle {
    grid-column: 1/2;
    clip-path: ellipse(45% 45% at 50% 50%);
    height: 150px;
    width: 150px;
    margin: auto;
  }
  &-content {
    grid-column: 2/2;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  &-description {
    font-family: $montserrat;
    font-weight: 300;
    color: $primary;
    font-size: 0.8rem;
  }
  &-details {
    font-family: $montserrat;
    font-style: italic;
    font-weight: 200;
    color: $primary;
    font-size: 0.8rem;
  }
  &-cta {
    border-radius: 15px;
    background-color: $primary;
    color: $primary-accent;
    width: 100%;
    text-align: center;
  }
}
</style>
