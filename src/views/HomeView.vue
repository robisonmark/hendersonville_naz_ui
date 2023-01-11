<script setup lang="ts">
import FullHero from "../components/heros/FullWidthHero.vue";
import ContentLeft from "../components/blocks/ContentLeft.vue";
import FullWidthFeature from "@/components/blocks/fullWidthFeature/FullWidthFeature.vue";
import CardRow from "@/components/blocks/CardRow.vue";

const cards = [
  {
    name: "CircleImageColumn",
  },
  {
    name: "CircleImageColumn",
  },
  {
    name: "CircleImageColumn",
  },
  {
    name: "CircleImageColumn",
  },
];

const tiles = [
  {
    name: "FullImageTile",
  },
  {
    name: "FullImageTile",
  },
  {
    name: "FullImageTile",
  },
];
</script>

<template>
  <full-hero></full-hero>
  <content-left></content-left>
  <full-width-feature></full-width-feature>
  <div class="container">
    <h4>Staff</h4>
    <card-row :cards="cards"></card-row>
  </div>
  <!-- <card-row :cards="tiles"></card-row> -->
</template>
