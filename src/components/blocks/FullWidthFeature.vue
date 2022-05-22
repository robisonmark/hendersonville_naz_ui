<template>
  <div class="feature--container__oval">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col content">
          <h3 class="feature-title">{{ featureBlockTitle }}</h3>
          <div class="feature-content" v-html="featureBlockContent"></div>
          <ghost-two-line-button
            :content="featureBlockCTA.content"
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
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
.feature--container__oval {
  width: 100%;
  background-color: $secondary-accent;
  clip-path: ellipse(80% 50% at 50% 50%);
  max-height: 70vh;
  height: 510px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  .content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: inherit;
  }
  .feature-content {
    color: $primary-accent;
    font-family: $montserrat;
  }
}
</style>
