<script setup lang="ts">
import { RouterView } from "vue-router";
import FullHeader from "@/components/global/HeaderNav.vue";
import FullFooter from "./components/global/FullFooter.vue";
</script>

<template>
  <FullHeader></FullHeader>

  <main>
    <RouterView />
  </main>

  <FullFooter></FullFooter>
</template>

<style></style>
