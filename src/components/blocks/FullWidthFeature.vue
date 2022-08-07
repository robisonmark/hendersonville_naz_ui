<template>
  <div class="feature--container__oval">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="feature-image_clip">
            <img class="feature-image" :src="featureImage" />
          </div>
        </div>
        <div class="col content">
          <h3 class="feature-title">{{ featureBlockTitle }}</h3>
          <div class="feature-content" v-html="featureBlockContent"></div>
          <ghost-two-line-button
            v-model="featureBlockCTA.content"
          ></ghost-two-line-button>
        </div>
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
@import "../../assets/scss/variables";
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
