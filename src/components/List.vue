<template>
  <div class="component-list">
    <div v-if="items.length === 0">
      <p>No items match current filter settings.</p>
    </div>
    <template v-else>
      <ul v-if="mode === 'List'" class="mode-list">
        <li v-for="(item, index) in items" :key="index">
          {{ item.manufacturer }} {{ item.model }} {{ item.size }}" {{ item.technology }} Monitor
        </li>
      </ul>
    </template>
  </div>
</template>


<script lang="ts">

import Vue from 'vue';
import store from '@/store';

export default Vue.extend({
  name: 'List',
  computed: {
    items() {
      return store.getters.items;
    },
    mode() {
      return store.state.mode;
    },
  },
});

</script>


<style lang="scss">

.component-list {

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }

}

</style>
