<template>
  <footer>
    <FooterContainerTop></FooterContainerTop>
    <div class="footer__background">
      <div class="container">
        <div class="row">
          <div class="col left_col">
            <div class="social">
              <h3>Follow Us <span class="accent long">On Social</span></h3>
              <div class="social-links">
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <YoutubeIcon></YoutubeIcon>
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
                <li>Monday 8:30 - 3:30</li>
                <li>Tuesday 8:30 - 3:30</li>
                <li>Wednesday 12:30 - 6:00</li>
                <li>Thursday 8:30 - 3:30</li>
                <li>Friday Close</li>
                <li class="pt-1"></li>
                <li>Sunday: Connect Groups 9:30am</li>
                <li>Sunday: Worship Gathering 10:30am</li>
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
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FacebookIcon from "@/components/icons/FacebookIconLink.vue";
import InstagramIcon from "@/components/icons/InstagramIconLink.vue";
import YoutubeIcon from "@/components/icons/YouTubeIconLink.vue";

import FooterContainerTop from "./FooterContainerTop.vue";

export default defineComponent({
  setup() {
    return {};
  },

  components: {
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
    FooterContainerTop,
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

footer {

  .footer__background {
    background-color: $church-primary;
    position: relative;
    padding-block-end: 2rem;
    @media (max-width: 600px) {
      padding-block-end: 5rem;
      .row {
        padding-block-start: 1rem;;
      }
    }
  }
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
    padding-bottom: 1rem;
    .accent {
      font-family: $roboto;
      font-weight: 600;
    }

    .long{
      text-transform: lowercase;
      &:before {
        content: '\a';
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

.social-links {
  display: inline-flex;
  & > a {
    padding-top: .3rem;
    padding-bottom: .3rem;
    &:not(:first-child) {
      padding-left: .5rem;
    }
    &:not(:last-child) {
      padding-right: .5rem;
    }
  }
}

.quick_links {
  @media (max-width: 600px) {
    flex-basis: 100%;
    text-align: left;
    padding-block-start: 2rem;
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
:root {
  --curve_length: {calc(100vw * 1.8416)}
}
.curve {
  width: var(--curve_length);

}
</style>
