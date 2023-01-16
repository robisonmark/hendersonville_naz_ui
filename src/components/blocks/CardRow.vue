<template>
  <div class="container">
    <h4 v-html="rowTitle"></h4>

    <div class="row" v-for="(row, key) in rows.values()" :key="key" :class="row.length < cardsPerRow && 'justify-center'" >
      <template v-if="row.length < cardsPerRow"><div class="card" :class="`col-${12 / cardsPerRow}`"></div></template>

      <template v-for="(card, index) in row" :key="index">
          <component :is="card.component" :data="card"></component>
      </template>

      <template v-if="row.length < cardsPerRow"><div class="card" :class="`col-${12 / cardsPerRow}`"></div></template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CircleImageStacked from "../cards/CircleImage/CircleImageStacked.vue";
import CircleImageTile from "../cards/CircleImageTile.vue";
import FullImageTile from "../cards/FullImageTile.vue";
import EventCardLarge from "../cards/EventCardLarge.vue";
import EventCardSmall from "../cards/EventCardSmall.vue";

interface CardData {
  data: {
    component: string,
    id: number,
  }
}

// defineProps(['cards'])

export default defineComponent({
  components: {
    CircleImageStacked,
    CircleImageTile,
    FullImageTile,
    EventCardLarge,
    EventCardSmall,
  },

  props: ["cards", "cardsPerRow", "rowTitle"],

  computed: {
    rows () {
      let rows = new Map();
      this.cards.forEach((card: CardData) => {
        const rowIndex = (Math.ceil((card.data.id + 1) / this.cardsPerRow)) - 1

        let row  = rows.get(rowIndex)
        let newRow = [];

        if (row) {
          newRow = [...row, {...card.data}]
        } else { 
          newRow.push(card.data)
        }
        
        rows.set(rowIndex, newRow)
      });

      return rows;
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
