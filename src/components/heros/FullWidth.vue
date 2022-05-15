<template>
  <div class="hero_full" :style="{ backgroundImage: heroImage }"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      heroImage: "",
    };
  },
});
</script>

<style scoped>
.hero_full {
  background: center no-repeat;
}
</style>
