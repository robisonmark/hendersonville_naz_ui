<script setup lang="ts">
import { RouterView } from "vue-router";
import FullHeader from "@/components/global/HeaderNav.vue";
</script>

<template>
  <FullHeader></FullHeader>

  <body>
    <RouterView />
  </body>
</template>

<style>
/* @import "@/assets/base.css"; */

body {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;

  font-weight: normal;
}
</style>
