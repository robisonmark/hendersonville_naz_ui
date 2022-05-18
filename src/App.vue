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

<style></style>
