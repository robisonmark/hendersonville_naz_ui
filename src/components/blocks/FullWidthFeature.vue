<template>
  <!-- <div class="feature--container__oval"> -->

  <svg
    viewBox="0 0 1920 786"
    version="1.1"
    id="fullWidthFeatureContainer"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
  >
    <title id="title6252">FullWidthFeatureBlockHCN</title>
    <defs id="defs2" />
    <g id="layer1" transform="translate(-0.89648438,-147.5)">
      <path
        id="ellipse1954"
        style="display: inline; fill: #366a8f; fill-opacity: 1"
        d="M 960,147.5 A 1768,393 0 0 0 0.89648438,210.98828 V 870.00977 A 1768,393 0 0 0 960,933.5 1768,393 0 0 0 1920.8965,869.76953 V 210.7168 A 1768,393 0 0 0 960,147.5 Z"
      />
      <g transform="translate(-2.9e-5,-1163.5)" id="g1976">
        <text
          transform="translate(1012,1605)"
          fill="#f5d130"
          font-size="80px"
          font-family="Roboto-LightItalic, Roboto"
          font-weight="300"
          font-style="italic"
          letter-spacing="0.019em"
          id="text1962"
        >
          <tspan x="0" y="0" id="tspan1960">{{ featureBlockTitle }}</tspan>
        </text>
        <text
          fill="#f5d130"
          font-size="30px"
          font-family="Montserrat-Regular, Montserrat"
          letter-spacing="0.019em"
          id="text1974"
          transform="translate(1012,1645)"
        >
          <tspan x="0" y="29" id="tspan1964">
            Journey with us as we take a look at the New
          </tspan>
          <tspan x="0" y="66" id="tspan1966">
            Testament passages that changed the world.
          </tspan>
          <tspan x="0" y="103" id="tspan1968">
            We will be studying the women at the well,
          </tspan>
          <tspan x="0" y="140" id="tspan1970">
            the feeding of the 5000, Jesus' feet being
          </tspan>
          <tspan x="0" y="177" id="tspan1972">
            anointed with oil and more.
          </tspan>
        </text>
      </g>
    </g>
  </svg>

  <!-- <svg
      viewBox="0 0 1920 786"
      version="1.1"
      id="fullWidthFeatureBackground"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <g id="layer1" transform="translate(0,-147)">
        <path
          id="rect2437"
          style="fill: #2c5979; fill-opacity: 1"
          d="M 960,147 A 1768,393 0 0 0 0,210.60938 V 869.39062 A 1768,393 0 0 0 960,933 1768,393 0 0 0 1920,869.39062 V 210.08789 A 1768,393 0 0 0 960,147 Z"
        />
      </g>
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
    </svg> -->
  <!-- </div> -->
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
      featureBlockTitle: "Current Series 1",
      featureBlockContent:
        "Journey with us as we take a look at the New Testament passages that changed the world. We will be studying the women at the well, the feeding of the 5000, Jesus' feet being anointed with oil and more.",
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
@import "../../assets/scss/variables";
#fullWidthFeatureContainer {
  width: 100%;
}
.feature--container__oval {
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  &:before {
    content: "";
    position: absolute;
    background-color: $secondary-accent;
    clip-path: ellipse(80% 50% at 50% 50%);
    max-height: 70vh;
    height: 550px;
    width: 100%;
  }
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
