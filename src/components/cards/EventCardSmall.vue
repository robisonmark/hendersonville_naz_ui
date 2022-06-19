<template>
  <div class="col">
    <div class="">
      <img :src="heroImage" :alt="heroImage" />
    </div>
    <div class="content">
      <h5 class="event-title">Event Name</h5>
      <div class="">9:30 | Cafe</div>
      <div class="">
        This is the event description. It will be controlled by a WYSIWYG
        editor. If we require sign up links will be at the bottom. This should
        give enough information to let people know how to attend but not too
        much that they won't want to.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroImage = "/Hero_Image_Placeholder.jpg";
</script>

<style scoped></style>
