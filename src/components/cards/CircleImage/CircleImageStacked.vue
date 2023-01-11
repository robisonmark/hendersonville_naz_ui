<template>
  <div class="col-3 card tile-circle__stacked">
    <div class="tile-image_circle">
      <CircleImageContainer></CircleImageContainer>
    </div>
    <div class="tile-content">
      <h5>Mark Robison</h5>
      <h6>Community Life Pastor</h6>
      <section class="tile-details">
        <!-- <b>Phone:</b> 502.381.2552 <br />
        <b>Email:</b> mark@hendersonvillenaz.org -->
        <button class="tile-cta">Contact Mark</button>

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

.tile-circle__stacked {
  text-align: center;
}

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

.tile {
  // &-circle {
  //   display: grid;
  //   grid-template-columns: 45% 10% 45%;
  //   height: 220px;
  // }
  // &-image_circle {
  //   grid-column: 1/3;
  //   clip-path: ellipse(50% 50% at 50% 50%);
  //   height: 150px;
  //   width: 150px;
  // }
  // &-content {
  //   grid-column: 3/3;
  //   display: flex;
  //   flex-flow: column;
  //   justify-content: space-between;
  // }
  &-description {
    font-family: $montserrat;
    font-weight: 300;
    color: $primary;
    font-size: 0.8rem;
    padding-top: 0.7rem;
  }
  &-details {
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
  &-cta {
    border-radius: 7px;
    font-family: $montserrat;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: $primary;
    color: $primary-accent;
    width: 100%;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
    margin: 1rem auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:hover {
      mix-blend-mode: darken;
    }
  }
}
</style>
