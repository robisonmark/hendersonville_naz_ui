<template>
  <div class="circle-container circle">
    <div
      class="circle-image"
      :style="{ backgroundImage: 'url(' + heroImage + ')' }"
    ></div>
    <header class="page-title">
      <h1>{{heroTitle}}
        <span class="headline_break">{{heroSubtitle}}</span>
      </h1>
      <h2 class="pt-2">{{heroTag}}</h2>
    </header>
  </div>
</template>

<script setup lang="ts">
const heroImage = "/Hero_Image_Placeholder.jpg";
const heroTitle = "Calendar";
const heroSubtitle = "Church Life"
const heroTag = "Building Relationships by Sharing Life"

defineExpose({
  heroImage,
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

$circle-width: 43rem;

.page-title {
  position: absolute;
  text-align: right;
  z-index: 1;
  top: 15rem;
  right: 7rem;
}
.circle-container {
  // max-width: $content-max-width;
  width: $circle-width;
  height: calc(
    $circle-width * 0.963
  ); // set with ems .87 (.963 in secondary pages) is the difference in design
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: -17rem;
  right: -6rem;
  // margin-top: -16rem; // make better  current offset design at 12rem (197 / 16) + 4rem padding | calc, inherit, reset via ems
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
    height: calc(
      $circle-width * 0.963
    ); // set with ems .87 (.963 in secondary pages) is the difference in design

    width: $circle-width;
    // border-radius: 50%;
    clip-path: ellipse(48% 50% at 50% 50%);
    background-color: $secondary-accent;
    mix-blend-mode: multiply;
    position: relative;
    top: 0;
    left: 0;

    // @media (min-width: 1600px) {
    //   height: 45rem;
    //   width: 48rem;
    // }
  }

  &:before {
    content: "";
    background-image: url("src/assets/images/textured_back.svg");
    background-size: 35px;
    clip-path: ellipse(48% 50% at 50% 50%);
    height: calc(
      $circle-width * 0.963
    ); // set with ems .87 (.963 in secondary pages) is the difference in design

    width: $circle-width;
    position: absolute;
    top: 2rem;
    left: 1rem;
    opacity: 0.55;
  }
}
.circle-image {
  width: inherit;
  height: inherit;
  clip-path: ellipse(48% 50% at 50% 50%);
  position: absolute;
  background-size: cover;

  // &:after {
  //   content: "";
  //   height: calc($circle-width * 0.87);
  //   width: 38rem;
  //   border-radius: 50%;
  //   background-color: $secondary-accent;
  //   mix-blend-mode: multiply;
  //   position: relative;
  //   top: 0;
  //   left: 0;

  //   @media (min-width: 1600px) {
  //     height: 45rem;
  //     width: 48rem;
  //   }
  // }
}
</style>
