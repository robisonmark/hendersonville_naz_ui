<template>
  <div class="container content_left">
    <div class="row">
      <div class="col">
        <div :class="accent ? 'accent' : null">
          <h4>{{ sectionTitle }}</h4>
          <div class="content" v-html="sectionContent"></div>
        </div>
      </div>
      <div class="col">
        <component :is="dynamicComponent" v-model="twoLineButton"></component>
        <!-- <GhostTwoLineButton
          v-model:content="twoLineButton"
        ></GhostTwoLineButton> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import GhostTwoLineButton from "../buttons/GhostTwoLine.vue";

export default defineComponent({
  components: {
    GhostTwoLineButton,
  },
  setup() {
    return {
      accent: true,
      // This will be passed in props
      sectionTitle: "Making Disciples by the Water",
      sectionContent:
        "<p>Hendersonville Church of the Nazarene is located on a peninsula surrounded by Old Hickory Lake.  We believe that God has called us to provide living water to our community. That's why we exist. to make disciples by the water...This is where we craft our story. We want this paragraph to be a consistent story that we tell when we gather in person and online.</p>",
      dynamicComponent: "GhostTwoLineButton",
      twoLineButton: {
        line1: "Join Us Live",
        line2: "Next Live Gathering at 10:30a",
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
.content_left {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.accent {
  &:before {
    content: "";
    background-image: url("src/assets/images/textured_back.svg");
    background-size: 50px;
    border-radius: 50%;
    height: 45px;
    width: 100px;
    position: absolute;
    top: -1.2rem;
    // left: -1rem;
    // opacity: 0.55;
  }

  h4 {
    background-color: $background;
    position: relative;
    left: 0;
  }
}
</style>
