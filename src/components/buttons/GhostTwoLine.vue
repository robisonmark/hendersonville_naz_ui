<template>
  <button
    class="button__ghost"
    :class="props?.modelValue?.modifier && props?.modelValue?.modifier"
  >
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
  &__ghost {
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
      text-transform: uppercase;
    }

    .description {
      font-family: $roboto;
      font-weight: 300;
      font-size: 0.9rem;
      text-transform: lowercase;
    }
    &.dark {
      background-color: $primary;
      border: 2px solid $primary;
      .description {
        color: $church-primary;
      }
    }
  }
}
</style>
