<script setup lang="ts">
import FullHero from "../components/heros/FullWidthHero.vue";
import ContentLeft from "../components/blocks/ContentLeft.vue";
import FullWidthFeature from "@/components/blocks/FullWidthFeature.vue";
import CircleImageTile from "@/components/cards/CircleImageTile.vue";
import FullImageTile from "@/components/cards/FullImageTile.vue";
</script>

<template>
  <full-hero></full-hero>
  <content-left></content-left>
  <full-width-feature></full-width-feature>
  <content-left></content-left>
  <div class="row">
    <full-image-tile></full-image-tile>
    <circle-image-tile></circle-image-tile>
  </div>
</template>
