<template><v-runtime-template :template="template" /></template>


<script lang="ts">

import Vue from 'vue';
import VRuntimeTemplate from 'v-runtime-template';
import { templates, Item } from '../data';

export default Vue.extend({
  name: 'ListItem',
  props: ['item'],
  components: {
    VRuntimeTemplate,
  },
  data: () => ({
    template: '<span class="list-item">' + templates.list + '</span>',
  }),
});

</script>


<style lang="scss">

.list-item {
  display: inline-block;
}

</style>
