<template>
  <div class="col feature-ministry--image">
    <div class="container">
      <img src="../../../assets/images/circleBackground.svg" class="background" />
      <img
        src="../../../assets/images/storehouse_min.png"
        alt="Storehouse Ministries"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturedMinistryImage",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 80%;
}
.feature-ministry--image {
  text-align: right;
  img:not(.background) {
    height: 80%;
  }
}
.background {
  position: absolute;
  right: 1rem;
  z-index: -1;
  opacity: 0.8;
}
</style>
