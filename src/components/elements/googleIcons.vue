<template>
  <div>
    <component :is="icon" :class="fillName"></component>
  </div>
</template>

<script lang="ts">
// Google Font Icons
import Location from "@material-design-icons/svg/outlined/location_on.svg";
import Menu from "@material-design-icons/svg/two-tone/menu.svg";
import Smartphone from "@material-design-icons/svg/outlined/smartphone.svg";

export default {
  setup() {
    return {};
  },
  props: ["icon", "fillName"],
  components: {
    location_on: Location,
    menu: Menu,
    smartphone: Smartphone,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.primary-accent {
  fill: $primary-accent;
}
</style>
