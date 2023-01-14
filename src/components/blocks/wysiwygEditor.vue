<template>
  <div v-html="props.modelValue" :class="componentClass"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Object,
  componentClass: String,
});
</script>

<style lang="scss" scoped>
</style>
