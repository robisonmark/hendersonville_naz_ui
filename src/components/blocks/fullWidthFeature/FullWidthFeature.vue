<template>
  <div class="feature--container__oval">
    <FullWidthFeatureContainerTop></FullWidthFeatureContainerTop>
    <div class="backer">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="feature-image_clip">
              <img class="feature-image" :src="featureImage" />
            </div>
          </div>
          <div class="col-5 content">
            <h3 class="feature-title">{{ featureBlockTitle }}</h3>
            <div class="feature-content" v-html="featureBlockContent"></div>
            <ghost-two-line-button
              v-model="featureBlockCTA.content"
            ></ghost-two-line-button>
          </div>
        </div>
      </div>
    </div>

    <FullWidthFeatureContainerBottom></FullWidthFeatureContainerBottom>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import FullWidthFeatureContainerTop from "./FullWidthFeatureContainerTop.vue";
import FullWidthFeatureContainerBottom from "./FullWidthFeatureContainerBottom.vue";
import GhostTwoLineButton from "../../buttons/GhostTwoLine.vue";

export default defineComponent({
  components: {
    FullWidthFeatureContainerTop,
    FullWidthFeatureContainerBottom,
    GhostTwoLineButton,
  },
  setup() {
    return {
      featureBlockTitle: "Current Series",
      featureBlockContent:
        "<p>Journey with us as we take a look at the New Testament passages that changed the world. We will be studying the women at the well, the feeding of the 5000, Jesus' feet being anointed with oil and more.</p>",
      featureBlockCTA: {
        type: "GhostTwoLine",
        content: {
          action: "Watch",
          description: "Last Weeks Sermon",
        },
        link: "/",
      },
      featureImage: "/current_series.png",
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";
.feature--container__oval {
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .backer {
    background-color: $secondary-accent;
    position: relative;
  }

  // &:before {
  //   content: "";
  //   position: absolute;
  //   display: block;
  //   background-color: transparent;
  //   top: -50px;
  //   z-index: -1;
  //   // clip-path: ellipse(80% 50% at 50% 50%);
  //   // max-height: 70vh;
  //   // height: 550px;
  //   background-image: url("../../assets/images/fullWidthFeatureTop.svg");
  //   background-position: center;
  //   width: 100%;
  //   height: 85px;
  // }
  // &:after {
  //   content: "";
  //   position: absolute;
  //   bottom: -50px;
  //   z-index: -1;
  //   display: block;
  //   background-color: transparent;
  //   // clip-path: ellipse(80% 50% at 50% 50%);
  //   // max-height: 70vh;
  //   // height: 550px;
  //   background-image: url("../../assets/images/fullWidthFeatureBottom.svg");
  //   background-position: center;
  //   width: 100%;
  //   height: 85px;
  // }
  .content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    height: inherit;
    height: 550px;
  }
  .feature-content {
    color: $primary-accent;
    font-family: $montserrat;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    line-height: 1.2;
  }

  .feature-image_clip {
    position: absolute;
    top: -3rem;
    left: -5rem;
    img {
      clip-path: ellipse(50% 50% at 50% 50%);
      max-height: 630px;
    }
  }
}
</style>
