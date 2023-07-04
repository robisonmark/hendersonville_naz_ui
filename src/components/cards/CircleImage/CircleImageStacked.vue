<template>
  <div class="col-3 card tile-circle__stacked">
    <div class="tile-image_circle">
      <CircleImageContainer></CircleImageContainer>
    </div>
    <div class="tile-content">
      <h5>{{data.tileContent.headline}}</h5>
      <h6>{{data.tileContent.description}}</h6>
      <section class="tile-details">
        <!-- <b>Phone:</b> 502.381.2552 <br />
        <b>Email:</b> mark@hendersonvillenaz.org -->
        <a :href="`${data.tileButton.url}`"><button class="tile-cta">{{data.tileButton.cta}}</button></a>

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

  props: ['data'],

  setup() {
    return {
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
a {
  text-decoration: none;
}

.tile {
  &-description {
    font-family: $montserrat;
    font-weight: 300;
    color: $primary;
    font-size: 0.8rem;
    padding-top: 0.7rem;
  }
  &-details {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
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
    padding-block-end: 1rem;
    padding-block-start: 1rem;
    &:hover {
      mix-blend-mode: darken;
    }
  }
}
</style>
