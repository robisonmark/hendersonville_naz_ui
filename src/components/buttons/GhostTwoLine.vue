<template>
  <button class="button__ghost" :class="props?.modelValue?.overlap ? 'circle--overlap__centered' : null">
    <div class="action">{{ props?.modelValue?.action }}</div>
    <div class="description">{{ props?.modelValue?.description }}</div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Object,
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.button {
  &__ghost{
    border: 2px solid $primary-accent;
    border-radius: 7px;
    color: $primary-accent;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    min-width: 250px;

    .action {
      font-family: $montserrat;
      font-weight: 500;
      font-size: 1.3rem;
    }

    .description {
      font-family: $roboto;
      font-weight: 300;
      font-size: .9rem;
      text-transform: lowercase;
    }
  }
}

.circle--overlap__centered {
  position: absolute;
  right: calc((45rem - 10rem) / (2 * 3.14));
}
</style>
