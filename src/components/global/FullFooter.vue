<template>
  <footer>
    <div clas="container">
      <div class="location"></div>
      <div class="office_hours"></div>
      <nav class="quick_links">
        <ul>
          <li>Ministry</li>
          <li>The Cove</li>
          <li>Give</li>
          <li>About Us</li>
          <li>Storehouse Ministries</li>
          <li>Calendar</li>
          <li>Get Involved</li>
          <li>Nazarene</li>
        </ul>
      </nav>
      <div class="disclaimer">
        &copy; Copyright {{ new Date().getFullYear() }} Hendersonville Church of
        the Nazarene, All Rights Reseerved
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a>
        <img
          src="@/assets/images/robros-logo-optimized.png"
          alt="Robros Tech"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
