<template>
  <svg
    viewBox="0 0 944 865"
    version="1.1"
    id="feature-image_clip"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMin meet"
  >
    <defs>
      <clipPath id="featureImage">
        <ellipse cx="50%" cy="50%" rx="50%" ry="50%" />
      </clipPath>
    </defs>
    <image
      width="1600"
      height="900"
      href="/youth_retreat_2023_16x9.png"
      id="tileImage"
      preserveAspectRatio="xMinYMin meet"
      clip-path="url(#featureImage)"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullWidthFeatureContainerTop",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";

#feature-image_clip {
  position: absolute;
  left: min(-4%, calc(1464px - 1600px));
  max-width: calc($content-max-width + 8vw);
  top: clamp(-8rem, -10vh, -2rem);
  height: 70vh;
  height: clamp(350px, 70vh, 966px);

  @media all and (max-width: 980px) {
    left:unset;
    right: 0px;
}


  @media (orientation: portrait) {
    position: relative;
    left: unset;
    margin: auto;
    // width: 70%;
    // height: clamp(269px, 70vh, 861px);
    top: clamp(-5rem, -7vh, -2rem);
    width: auto;
    height: auto;
    max-height: 28vmax;
    display: flex;
  }

}
</style>
