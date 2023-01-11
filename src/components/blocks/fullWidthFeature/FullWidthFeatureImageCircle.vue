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
    <defs id="defs2">
      <clipPath id="a">
        <ellipse
          cx="467.5"
          cy="430.5"
          rx="467.5"
          ry="430.5"
          transform="translate(79.24,1379.405)"
          fill="#54a3db"
          stroke="#707070"
          stroke-width="1"
          style="isolation: isolate; mix-blend-mode: multiply"
          id="ellipse1946"
        />
      </clipPath>
    </defs>
    <g id="layer1" transform="translate(40.000031,-109.50004)">
      <g id="layer2">
        <g
          transform="matrix(1.0096257,0,0,1.0046458,-120.00277,-1276.3134)"
          clip-path="url(#a)"
          id="g1958"
          style="
            mix-blend-mode: multiply;
            fill: #f5d130;
            fill-opacity: 1;
            stroke: none;
          "
        >
          <rect
            width="1088"
            height="911"
            transform="translate(2.24,1379.405)"
            fill="url(#b)"
            id="rect1956"
            x="0"
            y="0"
            style="
              display: inline;
              mix-blend-mode: multiply;
              fill: #f5d130;
              fill-opacity: 1;
              stroke: none;
            "
          />
        </g>
      </g>
    </g>
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
  left: -8vw;
  max-width: calc($content-max-width + 8vw);
  top: -4vh;
  // height: calc(50vw + 8vh);
  // height: 79vh;
  height: 70vh;
  img {
    clip-path: ellipse(50% 50% at 50% 50%);
    max-height: 630px;
  }

  @media (orientation: portrait) {
    position: relative;
    left: unset;
    margin: auto;
    width: 70%;
    height: clamp(269px, 70vh, 861px);
  }
}

// position: absolute;
//     left: -8vh;
//     max-width: calc(50vw + 8vh);
//     top: 0;
//     height: calc(50vw + 8vh);
//     width: auto;
// }
</style>
