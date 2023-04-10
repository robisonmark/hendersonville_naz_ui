<template>
  <div class="container content_left">
    <div class="row">
      <div class="col-auto col-sm-6 order-sm-2">
        <div :class="accent ? 'accent' : null">
          <h4>{{ sectionTitle }}</h4>
          <div class="content" v-html="sectionContent"></div>
        </div>
      </div>
      <div class="col col-sm-6 order-sm-1">
        <component
          v-for="(block, index) in rightSideComponents"
          :key="index"
          :is="block.componentName"
          v-model="block.componentContent"
          :componentClass="block.componentClass"
        ></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import GhostTwoLineButton from "../buttons/GhostTwoLine.vue";
import SingleTaglineCta from "../blocks/SingleTaglineCta.vue";
import wysiwygEditor from "../blocks/wysiwygEditor.vue";

export default defineComponent({
  components: {
    GhostTwoLineButton,
    SingleTaglineCta,
    wysiwygEditor,
  },
  setup() {
    return {
      accent: false,
      // This will be passed in props
      sectionTitle: "Making Disciples by the Water",
      sectionContent:
        "<p>Hendersonville Church of the Nazarene is located on a peninsula surrounded by Old Hickory Lake.  We believe that God has called us to provide living water to our community. That's why we exist. to make disciples by the water...This is where we craft our story. We want this paragraph to be a consistent story that we tell when we gather in person and online.</p>",
      rightSideComponents: [
        {
          componentName: "SingleTaglineCta",
          componentContent: [
            {
              componentName: "WysiwygEditor",
              componentContent:
                "<p>There is no <em class='italic'>US</em> without <em class='italic'>U</em></p>",
              componentClass: "tagline__cta",
            },
            {
              componentName: "GhostTwoLineButton",
              componentContent: {
                action: "Join Us Live",
                description: "Next Live Gathering at 10:30a",
                overlap: true,
                modifier: "primary",
              },
            },
          ],
          componentClass: "",
        },
      ],
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
.content {
  color: $secondary;
  line-height: 1.2;
  letter-spacing: 0.2px;
  padding-top: 0.5rem;
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
    // cut off bottom for title display
    clip-path: inset(0% 0% 52% 0%);
  }

  h4 {
    position: relative;
    left: 0;
  }
}
</style>
