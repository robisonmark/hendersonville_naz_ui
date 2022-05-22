<template>
  <div class="button__ghost">
    <div class="action">{{ content.action }}</div>
    <div class="description">{{ content.description }}</div>
  </div>
</template>

<script setup lang="ts">
const content = defineProps(["content"]);

console.log(content);
</script>

<style lang="scss" scoped></style>
