<template>
  <div class="container">
    <div class="row">
      <template v-for="(card, index) in cards" :key="index">
        <component :is="card.name"></component>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CircleImageColumn from "../cards/CircleImage/CircleImageColumn.vue";
import CircleImageTile from "../cards/CircleImageTile.vue";
import FullImageTile from "../cards/FullImageTile.vue";
import EventCardLarge from "../cards/EventCardLarge.vue";
import EventCardSmall from "../cards/EventCardSmall.vue";

// defineProps(['cards'])

export default defineComponent({
  components: {
    CircleImageColumn,
    CircleImageTile,
    FullImageTile,
    EventCardLarge,
    EventCardSmall,
  },
  props: ["cards"],
});
</script>

<style lang="scss" scoped></style>
