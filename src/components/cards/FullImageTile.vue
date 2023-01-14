<template>
  <div class="col-4 card full-image_container">
    <div
      class="full-image"
    >
    <!-- <div
      class="full-image"
      :style="{ backgroundImage: 'url(' + cardImage + ')' }"
    > -->
      <img :src="cardImage" />
      <h6>{{ cardTitle }}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      cardImage: "YoungAdultMin.jpg",
      cardTitle: "Young Adult Ministry",
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
.full-image {
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: content-box;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  &_container {
    height: 350px;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: $church-primary;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    mix-blend-mode: darken;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -40px;
    background-color: $primary;
    height: 200px;
    width: 100%;
    mix-blend-mode: darken;
    clip-path: ellipse(85% 50% at 50% 50%);
  }
}
img {
  position: absolute;
  width: auto;
  // height: 100%;
}
h6 {
  position: absolute;
  bottom: 2.8rem;
  border-top: 3px solid $church-primary;
  border-bottom: 3px solid $church-primary;
  z-index: 1;
  padding: 0.75rem;
}
</style>
