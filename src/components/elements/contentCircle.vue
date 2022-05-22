<template>
  <div class="circle-container"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.circle:after {
  content: "";
  height: 42rem;
  width: 45rem;
  border-radius: 50%;
  background-color: $secondary-accent;
  mix-blend-mode: multiply;

  @media (min-width: 1600px) {
    height: 45rem;
    width: 48rem;
  }
}
</style>
