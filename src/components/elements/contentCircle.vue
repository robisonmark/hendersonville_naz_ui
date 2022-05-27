<template>
  <div class="circle-container"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.circle {
  &:before {
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

  &:after {
    content: "";
    background-image: url("src/assets/images/textured_back.svg");
    background-size: 45px;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    position: absolute;
    top: -0.5rem;
    opacity: 0.55;
  }
}
</style>
