<template>
  <section class="identifier">
    <div class="sidebar-bg"></div>

    <div class="container is-fullhd id-template-horizontal">
      <aside class="sidebar">
        <div class="sidebar-menu">
          <FiltersComponent />
        </div>
      </aside>
      <div class="id-main">
        <div class="id-main-container">
          <ListComponent />
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">

import Vue from 'vue';
import FiltersComponent from '@/components/Filters.vue';
import ListComponent from '@/components/List.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    FiltersComponent,
    ListComponent,
  },
  methods: {
    _updateState(base64state: string): void {
      let newRefinements = {};

      if (base64state) {
        const parsedState = JSON.parse(atob(base64state));
        if ('refinements' in parsedState) {
          newRefinements = parsedState.refinements;
        }
      }

      this.$store.commit('setAllRefinements', newRefinements);
    },
  },
  created(): void {
    this._updateState(this.$route.params.base64state);
  },
  beforeRouteUpdate(to, from, next): void {
    this._updateState(to.params.base64state);

    next();
  },
});

</script>


<style lang="scss">

.sidebar-bg {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 0;
  top: 0;
  background: #f5f5f5;
}

.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 16rem;
  padding: 3rem 1rem;
  background: #f5f5f5;
}

.identifier {
  position: relative;

  .id-template-horizontal {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .id-main {
    position: relative;
    background: #fff;
    overflow: hidden;
    width: 100%;
  }

  .id-main-container {
      padding: 3rem;
  }
}

</style>
