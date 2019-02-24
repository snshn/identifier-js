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
    template: '<div class="list-item">' + templates.list + '</div>',
  }),
});

</script>
