<template>
  <div class="color color--container" :class="theme">
    <div class="color--displaySquare" :class="color"></div>
    <div class="color--content">
      <dl>
        <dt>{{ color.replace("-", " ") }}</dt>
        <dd></dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    name: "ColorBlock";
  },

  props: ["color", "theme"],
});
</script>

<style lang="scss">
@import "../../assets/scss/variables";
.color {
  &--displaySquare {
    width: 4rem;
    height: 4rem;
  }

  dt {
    text-transform: capitalize;
  }
}

.church-primary {
  background-color: $church-primary;
}
.church-secondary {
  background-color: $church-secondary;
}

.light {
  .primary {
    background-color: $primary;
  }
  .secondary {
    background-color: $secondary;
  }

  .primary-accent {
    background-color: $primary-accent;
  }
  .secondary-accent {
    background-color: $secondary-accent;
  }

  .font {
    background-color: $font;
  }
}

.dark {
  .primary {
    background-color: $primary-dark;
  }
  .background {
    background-color: $background-dark;
  }
  .font {
    background-color: $font-dark;
  }
}
</style>
