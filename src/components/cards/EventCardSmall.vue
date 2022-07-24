<template>
  <div class="event-card">
    <div class="event-card-image_container">
      <div
        class="event-card-image"
        :style="{ backgroundImage: 'url(' + heroImage + ')' }"
      ></div>
      <!-- <img :src="heroImage" :alt="heroImage" /> -->
    </div>
    <div class="event-card-content">
      <h5 class="event-title">Event Name</h5>
      <div class="">9:30 | Cafe</div>
      <div class="">
        This is the event description. It will be controlled by a WYSIWYG editor. If we
        require sign up links will be at the bottom. This should give enough information
        to let people know how to attend but not too much that they won't want to.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroImage = "/Hero_Image_Placeholder.jpg";
</script>

<style scoped lang="scss">
.event-card {
  display: grid;
  grid-template-columns: 130px 1rem calc(100% - 130px - 1rem);

  &-image_container {
    // width: 130px;
    grid-area: 1/1;
  }

  &-image {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  &-content {
    // width: calc(100% - 130px - 1rem);
    grid-area: 1/3;
  }
}
</style>
