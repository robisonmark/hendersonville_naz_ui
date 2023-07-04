<template>
  <div class="col feature-ministry--image">
    <img src="../../../assets/images/circleBackground.svg" class="background" />
    <img
      src="../../../assets/images/storehouse_min.png"
      alt="Storehouse Ministries"
    />
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
.feature-ministry--image {
  text-align: right;
  img {
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
