<template>
  <div class="item view">{{item}}</div>
</template>


<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'Item',
  props: [
    'base64data',
  ],
  data() {
    return {
      item: JSON.parse(atob(this.base64data)),
    };
  },
  computed: {
  },
});

</script>
