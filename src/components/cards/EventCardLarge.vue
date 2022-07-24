<template>
  <div class="card">
    <div class="hero-side" :style="{ backgroundImage: 'url(' + heroImage + ')' }"></div>
    <div class="content">
      <h5 class="event-title">Event Name</h5>
      <div class="event-details">9:30 | Cafe</div>
      <p class="event-description">
        This is the event description. It will be controlled by a WYSIWYG editor. If we
        require sign up links will be at the bottom. This should give enough information
        to let people know how to attend but not too much that they won't want to.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroImage = "/Hero_Image_Placeholder.jpg";

defineExpose({
  heroImage,
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.card {
  display: grid;
  grid-template-columns: 150px calc(100% - -1rem - 150px);
  column-gap: 1rem;
  &:first-child {
    padding-top: 0.8rem;
  }

  &:not(:first-child) {
    padding-top: 1rem;
  }

  &:not(:last-child) {
    padding-bottom: 1rem;
  }
}
.hero-side {
  width: 150px;
  min-height: 100px;
  background-size: cover;
  clip-path: inset(0 0 0 0 round 7px);
}
.event-title {
  font-weight: 500;
  color: $primary;
}

.event-details {
  font-family: $montserrat;
  font-style: italic;
  font-size: 0.9em;
  font-weight: 300;
  color: $primary;
}

.event-description {
  font-size: 0.9em;
  color: $primary;
  padding-top: 1.5rem;
}
</style>
