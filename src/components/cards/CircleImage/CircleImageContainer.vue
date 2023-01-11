<template>
  <svg
    width="226"
    height="226"
    viewBox="0 0 226 226"
    version="1.1"
    id="tileImageCircle"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <clipPath id="circle">
        <circle cx="113" cy="113" r="113" />
      </clipPath>
    </defs>
    <image
      width="452"
      height="339"
      href="/SportsAndRecHero.jpg"
      id="tileImage"
      style="display: inline"
      preserveAspectRatio="xMinYMin meet"
    />
    <circle
      style="mix-blend-mode: overlay; fill: #3a7199; fill-opacity: 1"
      cx="113"
      cy="113"
      r="113"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullWidthHeroHeadlineCicle",
  setup() {
    return {
      backgroundImage: "/SportsAndRecHero.jpg",
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";

#heroCircle {
  max-width: calc($content-max-width * 0.7);
}
svg {
  clip-path: url("#circle");
}
</style>
