<script setup lang="ts">
import EventCardLarge from "@/components/cards/EventCardLarge.vue";
import EventCardSmall from "@/components/cards/EventCardSmall.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-auto col-sm-6">
        <h2>Events</h2>
        <!-- Event Card -->
        <event-card-large></event-card-large>
        <event-card-large></event-card-large>
        <event-card-large></event-card-large>
      </div>
      <!-- Circle Containter with Header needs order to know where to go ie/ flex row -->
    </div>
    <!-- Feature Block -->
    <div class="row">
      <!-- Picture / Accent Block  -->
      <div class="col-auto offset-8 col-sm-4">
        <h2>Weekly Events</h2>
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
