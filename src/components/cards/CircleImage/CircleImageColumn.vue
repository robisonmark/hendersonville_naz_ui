<template>
  <div class="col-3 card tile-circle__column">
    <div class="tile-image_circle">
      <CircleImageContainer></CircleImageContainer>
    </div>
    <div class="tile-content">
      <h5>Mark Robison</h5>
      <h6>Community Life Pastor</h6>
      <section class="tile-details">
        <b>Phone:</b> 502.381.2552 <br />
        <b>Email:</b> mark@hendersonvillenaz.org
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import CircleImageContainer from "./CircleImageContainer.vue";

export default defineComponent({
  components: {
    CircleImageContainer,
  },
  setup() {
    return {
      tileImage: {
        url: "/SportsAndRecHero.jpg",
        alt: "Softball",
      },
      tileContent: {
        headline: "Men's Softball",
        description:
          "The men of HCN play softball Monday nights in Goodlettsville. Come join us.",
        details: {
          lines: ["Monday Nights", "April - May"],
        },
      },
      tileButton: {
        url: "/",
        cta: "See Schedule",
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables";

.tile-content {
  font-weight: 500;
}

h6 {
  font-family: $montserrat;
  font-style: italic;
  font-size: 0.9em;
  font-weight: 300;
  color: $primary;
}
b {
  font-weight: 400;
}

.tile-details {
  // font-size: 1rem;
  // margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  // color: inherit;
  font-weight: 300;
  // line-height: inherit;
  font-size: 0.9em;
  color: $primary;
  padding-top: 1.5rem;
}
</style>
