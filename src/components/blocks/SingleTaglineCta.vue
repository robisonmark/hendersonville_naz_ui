<template>
  <div :class="components['GhostTwoLineButton'].componentContent.overlap ? 'circle--overlap__centered' : null">
    <template v-html="components['WysiwygEditor'].componentContent" :class="components['WysiwygEditor'].componentClass" v-hoist></template>
    <GhostTwoLine v-model="components['GhostTwoLineButton'].componentContent"></GhostTwoLine>
  </div>
</template>

<script setup lang="ts">
import GhostTwoLine from "../buttons/GhostTwoLine.vue";

// types 
type ComponentObject = {
  key: keyof ComponentObject;
  componentName: string;
  componentContent: string;
  componentClass?: string;     
}

const props = defineProps({
  modelValue: Object,
  componentClass: String,
});

const components = props.modelValue?.reduce((acc: ComponentObject, curr: ComponentObject) => {
  const mv: {[index:string]:any} = {...acc};
  mv[curr['componentName']] = curr

  return mv;
}, {})
</script>

<style lang="scss" scoped>
// .circle--overlap__centered {
//   position: absolute;
//   right: calc((45rem - 10rem) / (2 * 3.14));
// }
// xl size
@media screen and (min-width: 1600px) {
  .circle--overlap__centered {
    position: absolute;
    right: calc((48rem - 10rem) / (2 * 3.14));
  }
}
</style>