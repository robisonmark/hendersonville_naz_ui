<template>
  <div
    class="circle-container circle"
    :style="{ backgroundImage: 'url(' + heroImage + ')' }"
  ></div>
</template>

<script setup lang="ts">
const heroImage = "/Hero_Image_Placeholder.jpg";

defineExpose({
  heroImage,
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.circle-container {
  max-width: $content-max-width;
  height: calc(38rem * 0.87); // set with ems .87 is the difference in design
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  margin-top: -16rem; // make better  current offset design at 12rem (197 / 16) + 4rem padding | calc, inherit, reset via ems
  &:after {
    // content position...need a better set up
    position: absolute;
    right: -10rem;
    bottom: -8rem;
  }
}

.circle {
  &:after {
    content: "";
    height: calc(38rem * 0.87);
    width: 38rem;
    border-radius: 50%;
    background-color: $secondary-accent;
    mix-blend-mode: multiply;
    position: relative;
    top: 0;
    left: 0;

    @media (min-width: 1600px) {
      height: 45rem;
      width: 48rem;
    }
  }

  &:before {
    content: "";
    background-image: url("src/assets/images/textured_back.svg");
    background-size: 45px;
    border-radius: 50%;
    height: calc(38rem * 0.87);
    width: 38rem;
    position: absolute;
    top: 2rem;
    left: -1rem;
    opacity: 0.55;
  }
}
</style>
