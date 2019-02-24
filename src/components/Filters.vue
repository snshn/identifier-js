<template>
  <div class="filters component">

    <ul v-for="filter in nonBooleanFilters" :key="filter.name">
      <li>
        <template v-if="filter.type === TYPES.ENUM">
          <p class="sidebar-label">{{ filter.title }}</p>
          <EnumFilterComponent :filterName="filter.name" />
        </template>
      </li>
    </ul>

    <ul v-for="filter in booleanFilters" :key="filter.name">
      <li>
        <BoolFilterComponent :label="filter.title" :filterName="filter.name" />
      </li>
    </ul>

  </div>
</template>


<script lang="ts">

import Vue from 'vue';
import store from '@/store';
import { filters } from '@/data';
import { TYPES, IdentifierFilter } from '@/types';
import BoolFilterComponent from '@/components/filters/Bool.vue';
import EnumFilterComponent from '@/components/filters/Enum.vue';

export default Vue.extend({
  name: 'Filters',
  components: {
    BoolFilterComponent,
    EnumFilterComponent,
  },
  data() {
    return {
      filters,
      TYPES,
    };
  },
  mounted() {
    store.commit('init');
  },
  computed: {
    booleanFilters(): IdentifierFilter[] {
      return filters.filter((f) => f.type === TYPES.BOOL);
    },
    nonBooleanFilters(): IdentifierFilter[] {
      return filters.filter((f) => f.type !== TYPES.BOOL && [TYPES.ENUM].includes(f.type));
    },
  },
});

</script>


<style lang="scss">

.filters.component {

  .sidebar .sidebar-menu .sidebar-label {
    margin-bottom: .5em;
    color: #7a7a7a;
    font-size: .9em;
    text-transform: uppercase;
    letter-spacing: .1em;
  }

  .multiselect.filter {
    margin-bottom: 2em;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }

}

</style>
