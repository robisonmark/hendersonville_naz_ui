<template>
  <svg viewBox="0 0 1080 982" version="1.1" id="heroCircle" xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
    <defs>
      <clipPath id="text-clip">
        <ellipse cx="540" cy="491" rx="540" ry="491" fill="#3a7199" style="isolation: isolate; mix-blend-mode: multiply"
          id="ellipse17777" />
      </clipPath>
      <mask id="text-mask" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="white" />
        <ellipse cx="540" cy="491" rx="540" ry="491" fill="#3a7199" style="isolation: isolate; mix-blend-mode: multiply"
          id="ellipse17777" />
      </mask>
    </defs>
    <ellipse cx="540" cy="491" rx="540" ry="491" fill="#3a7199" style="isolation: isolate; mix-blend-mode: multiply"
      id="ellipse17777" />

    <text class="outside" x="50%" y="100" font-size="2vw" text-anchor="middle" dy=".3em" fill="#333">Text Inside
      Circle</text>
    <!-- Text Inside Circle -->
    <text class="inside" x="50%" y="100" font-size="2vw" text-anchor="middle" dy=".3em" fill="#fff00">Text Inside
      Circle</text>
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

text.inside {
  font-size: 50px;
  /* Adjust font size for smaller screens */
  fill: #ff0000;
  /* Change text color when outside the circle */
  clip-path: url(#text-clip);
  /* Apply clipping path to the text */
}

text.outside {
  font-size: 50px;
  /* Adjust font size for smaller screens */
  fill: #121212;
  /* Change text color when outside the circle */
  /* clip-path: url(#text-clip); */
  mask: url(#text-mask);
  /* Apply clipping path to the text */
}
</style>
