<template>
  <div class="container content_left">
    <div class="row">
      <div class="col content">
        <h4>{{ sectionTitle }}</h4>
        <div v-html="sectionContent"></div>
      </div>
      <div class="col">
        <GhostTwoLineButton
          v-model:content="twoLineButton"
        ></GhostTwoLineButton>
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
      // This will be passed in props
      sectionTitle: "Making Disciples by the Water",
      sectionContent:
        "<p>Hendersonville Church of the Nazarene is located on a peninsula surrounded by Old Hickory Lake.  We believe that God has called us to provide living water to our community. That's why we exist. to make disciples by the water...This is where we craft our story. We want this paragraph to be a consistent story that we tell when we gather in person and online.</p>",
      dynamicComponent: "",
      twoLineButton: {
        line1: "Join Us Live",
        line2: "Next Live Gathering at 10:30a",
      },
    };
  },
});
</script>

<style scoped land="scss">
.content_left {
  padding-top: 2rem;
}
</style>
