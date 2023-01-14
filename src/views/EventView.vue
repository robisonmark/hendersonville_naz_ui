<script setup lang="ts">
import EventCardLarge from "@/components/cards/EventCardLarge.vue";
import EventCardSmall from "@/components/cards/EventCardSmall.vue";
import ContentCircle from "@/components/elements/contentCircle.vue";
</script>

<template>
  <div class="container container__noHero">
    <h4>Events</h4>
    <div class="row">
      <div class="col-auto col-sm-6">
        <!-- Event Card -->
        <event-card-large></event-card-large>
        <event-card-large></event-card-large>
        <event-card-large></event-card-large>
      </div>
      <content-circle></content-circle>
      <!-- Circle Containter with Header needs order to know where to go ie/ flex row -->
    </div>
    <!-- Feature Block -->
    <div class="row">
      <!-- Picture / Accent Block  -->
      <div class="col-auto offset-7 col-sm-5 text-right">
        <h4>Weekly Events</h4>
        <!-- Event Card -->
        <event-card-small></event-card-small>
        <event-card-small></event-card-small>
        <event-card-small></event-card-small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
