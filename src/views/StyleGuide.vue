/* TODO: color block TODO: Add calcs for border on FullWidthFeature TODO: Add
calcs for circle */

<template>
  <div class="container container__noHero full-height">
    <h4>Style Guide</h4>

    <section>
      <h5>Logo</h5>
    </section>

    <section>
      <h5>Content Voice</h5>
    </section>

    <section>
      <h5>All Media Colors</h5>
      <div class="row">
        <div
          class="col-auto col-sm-2"
          v-for="(standardColor, key) in standardColors"
          :key="key"
        >
          <color-block :color="standardColor"></color-block>
        </div>
      </div>

      <h6>Light Theme Web Colors</h6>
      <div class="row">
        <div
          class="col-auto col-sm-2"
          v-for="(lightColor, key) in lightThemeColors"
          :key="key"
        >
          <color-block :color="lightColor" :theme="'light'"></color-block>
        </div>
      </div>

      <h6>Dark Theme Web Colors</h6>
      <div class="row">
        <div
          class="col-auto col-sm-2"
          v-for="(darkColor, key) in darkThemeColors"
          :key="key"
        >
          <color-block :color="darkColor" :theme="'dark'"></color-block>
        </div>
      </div>
    </section>

    <section>
      <h5>Typography</h5>
    </section>

    <section>
      <h5>Picture Requirements</h5>
    </section>

    <section>
      <h5>Web Elements</h5>
      <div class="container">
        <div>hero image should have a minimum aspect ratio of 3:4</div>
        <full-hero></full-hero>
        <!-- <content-left></content-left>
        <full-width-feature></full-width-feature>
        <content-left></content-left> -->

        <h4>Tile with Circle Image</h4>
        <div>
          Cicle Image should be an aspect ratio of 4:3 with minimum height of
          339px and width of 452px
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// All Media Styles
import ColorBlock from "@/components/style_guide/ColorBlock.vue";

// Web Media Components
import FullHero from "../components/heros/FullWidthHero.vue";
import ContentLeft from "../components/blocks/ContentLeft.vue";
import FullWidthFeature from "@/components/blocks/fullWidthFeature/FullWidthFeature.vue";
import CardRow from "@/components/blocks/CardRow.vue";

const standardColors = ["church-primary", "church-secondary"];

const lightThemeColors = [
  "primary",
  "secondary",
  "primary-accent",
  "secondary-accent",
  "font",
];

const darkThemeColors = ["primary", "background", "font"];

const webFonts = ["montserrat", "roboto"];
</script>
