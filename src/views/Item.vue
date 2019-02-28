<template>
  <v-runtime-template :template="template" />
</template>


<script lang="ts">

import Vue from 'vue';
import VRuntimeTemplate from 'v-runtime-template';
import { templates, Item } from '../data';

export default Vue.extend({
  name: 'Item',
  props: [
    'base64data',
  ],
  components: {
    VRuntimeTemplate,
  },
  data() {
    return {
      item: JSON.parse(atob(this.base64data)).item,
      template: '<div class="container item view">' + templates.item + '</div>',
    };
  },
});

</script>
