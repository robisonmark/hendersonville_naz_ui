<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col left_col">
          <div class="social">
            <h3>Follow Us <span class="accent">On Social</span></h3>
            <div class="social-links">
              <a href="https://www.facebook.com/HendersonvilleNaz"
                ><img src="" alt="Facebook"
              /></a>
              <a href="https://www.instagram.com/hendersonvillenaz/"
                ><img src="" alt="Instagram"
              /></a>
            </div>
          </div>
          <div class="location">
            <div class="street">159 Luna Lane</div>
            <div class="city_state_zip">Hendersonville, Tn 37072</div>
          </div>
          <div class="pt-1">
            <a href="tel: 6159475067" class="">615.947.5067</a>
            <a href="email: office@henderonvillenaz.org"
              >office@henderonvillenaz.org</a
            >
          </div>
        </div>
        <div class="col middle_col">
          <div class="office_hours">
            <h3>Office <span class="accent">Hours</span></h3>
            <ul>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li class="pt-1"></li>
              <li>Sunday: Connect Groups</li>
              <li>Sunday: Worship Gathering</li>
            </ul>
          </div>
        </div>
        <nav class="col quick_links">
          <h3>Quick <span class="accent">Links</span></h3>
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
      </div>
      <div class="disclaimers pt-1">
        &copy; {{ new Date().getFullYear() }} Hendersonville Church of the
        Nazarene, All Rights Reserved
        <div class="legal">
          <a href="">Privacy Policy</a> | <a href="">Terms and Conditions</a>
        </div>
        <img
          class="themed-by-logo"
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

<style scoped lang="scss">
@import "../../assets/scss/variables";

footer {
  background-color: $church-primary;
  padding-top: 2rem;
  padding-bottom: 2rem;
  & > :not(h3) {
    color: $church-secondary;
    font-weight: 500;
    font-family: $montserrat;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  h3 {
    font-weight: 300;
    line-height: 1;
    .accent {
      font-family: $roboto;
      font-weight: 600;
      &:before {
        content: attr(data-text);
        white-space: pre;
      }
    }
  }

  a {
    display: block;
  }

  nav {
    text-align: right;
  }
}

.disclaimers {
  text-align: center;
  font-size: 0.85em;
  & > * {
    display: block;
  }
  a {
    display: inline-block;
  }
}
// Global
.pt-1 {
  padding-top: 1rem;
}

.themed-by-logo {
  width: 100px;
  mix-blend-mode: overlay;
  // display: block;
  margin: auto;
}
</style>
