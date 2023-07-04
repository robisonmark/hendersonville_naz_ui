<template>
  <button class="button__ghost">
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

    @media (orientation: portrait) or (max-width: 400px) {
      width: 100%;
      border-radius: 0;
      background-color: $primary-accent;
      color: $primary;
      margin-bottom: 3rem;
    }
  }
}
</style>
