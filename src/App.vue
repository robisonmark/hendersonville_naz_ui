<script setup lang="ts">
import { RouterView } from "vue-router";
import FullHeader from "@/components/global/HeaderNav.vue";
</script>

<template>
  <FullHeader></FullHeader>

  <main>
    <RouterView />
  </main>
</template>

<style></style>
