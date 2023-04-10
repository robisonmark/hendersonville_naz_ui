<template>
  <div class="feature-ministry--container__oval">
    <div class="container">
      <div class="row">
        <div class="col-7 content">
          <h4 class="feature-ministry-title">{{ featureBlockTitle }}</h4>
          <div
            class="feature-ministry--content"
            v-html="featureBlockContent"
          ></div>
          <ghost-two-line-button
            v-model="featureBlockCTA.content"
          ></ghost-two-line-button>
        </div>
        <MinistryFeatureImage></MinistryFeatureImage>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import MinistryFeatureImage from "./MinistryFeatureImage.vue";
import GhostTwoLineButton from "../../buttons/GhostTwoLine.vue";

export default defineComponent({
  components: {
    MinistryFeatureImage,
    GhostTwoLineButton,
  },
  setup() {
    return {
      featureBlockTitle: "Storehouse Ministries",
      featureBlockContent: `<p><strong class="accent">Did you know</strong> that there are many children in our community who go to bed hungry every night?</p>
        <p><strong class="accent">According to Feeding America,</strong> one in eight people and one in six children In Tennessee face hunger every single day. Almost 42% of households receiving benefits have children in them.*</p><p>The HCN Food Pantry can help bridge the gap for families and individuals who have a need in our community.Christ calls us to open our arms to those in need and we can do that on a most basic level by feeding hungry stomachs!</p>
        <p><strong>We are open</strong> the 1st Saturday of every month from 10:00-11:30am and the 2nd & 4th Thursday of each month from 4:30pm-6:00pm or by appointment.</p>`,
      featureBlockCTA: {
        type: "GhostTwoLine",
        content: {
          action: "Request",
          description: "More Information",
          modifier: "dark",
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
.feature-ministry--container__oval {
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  position: relative;

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
    @media (orientation: portrait) {
      margin-top: 25px;
    }
  }
  .feature-content {
    color: $primary-accent;
    font-family: $montserrat;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    line-height: 1.2;
  }
}

.feature-ministry--content {
  padding-block-end: 2rem;
}
</style>
