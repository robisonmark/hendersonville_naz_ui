<template>
  <div class="col">
    <div class="" :style="{ backgroundImage: 'url(' + heroImage + ')' }"></div>
    <div class="content">
      <h3>Event Name</h3>
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
