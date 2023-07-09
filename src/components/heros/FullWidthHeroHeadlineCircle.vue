<template>
  <svg
    viewBox="0 0 1080 982"
    version="1.1"
    id="heroCircle"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
  >
    <defs id="defs17783" />
    <ellipse
      cx="540"
      cy="491"
      rx="540"
      ry="491"
      fill="#3a7199"
      style="isolation: isolate; mix-blend-mode: multiply"
      id="ellipse17777"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullWidthHeroHeadlineCicle",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

#heroCircle {
  max-width: calc($content-max-width * 0.7);
  mix-blend-mode: multiply;
}
</style>
