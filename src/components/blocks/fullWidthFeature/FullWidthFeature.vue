<template>
  <div class="feature--container__oval">
    <FullWidthFeatureContainerTop></FullWidthFeatureContainerTop>
    <!-- <FullWidthFeatureImageCircle></FullWidthFeatureImageCircle> -->
    <div class="backer">
      <div class="container">
        <div class="row">
          <div class="col feature--image">
            <FullWidthFeatureImageCircle></FullWidthFeatureImageCircle>
            <!-- <div class="feature-image_clip">
              <img class="feature-image" :src="featureImage" />
            </div> -->
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
import FullWidthFeatureImageCircle from "./FullWidthFeatureImageCircle.vue";
import GhostTwoLineButton from "../../buttons/GhostTwoLine.vue";

export default defineComponent({
  components: {
    FullWidthFeatureContainerTop,
    FullWidthFeatureContainerBottom,
    FullWidthFeatureImageCircle,
    GhostTwoLineButton,
  },
  setup() {
    return {
      featureBlockTitle: "Youth Winter Retreat 2023",
      featureBlockContent:
        "<p>If you are between 12 and 18, you don't want to miss the Lifeline's winter retreat.  They will be headed to Fall Creek Falls for a time of reset, refreshment, and rebranding themselves in mold of Christ.</p><p><strong>Cost: $75</strong></p><p><strong>Dates: Jan. 27-29</strong></p>",
      featureBlockCTA: {
        type: "GhostTwoLine",
        content: {
          action: "Contact Pastor Nick",
          description: "for More Info",
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
  position: relative;

  .backer {
    background-color: $secondary-accent;
  }

  .container {
    position: relative;

    @media (orientation: portrait) {
      .row {
        flex-direction: column;
      }
    }
  }

  .feature--image {
    order: 1;
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
    order: 2;
    // height: 56vh;
    height: clamp(350px, 49vh, 500px);
    // height: clamp(35vh, calc(50vw - 16vh), 50vh);
    padding-left: 6%;
  }
  .feature-content {
    color: $primary-accent;
    font-family: $montserrat;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    line-height: 1.2;
  }
}
</style>
