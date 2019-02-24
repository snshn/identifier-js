// src/store.ts

import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { items, filters } from '@/data';
import { RootState, TYPES } from '@/types';

Vue.use(Vuex);

// View modes
const _VM = {
  LIST: 'List',
  GRID: 'Grid',
  TABLE: 'Table',
};

export default new Store<RootState>({
  state: {
    items, // The database
    refinements: {}, // Filter parameters
    values: {}, // Cached set of all possible values for Multiselect properties
    mode: _VM.LIST, // View mode
  },
  mutations: {
    init(state): void {
      // Cache all possible values for Multiselect filters
      for (const model of filters) {
        if (model.type === TYPES.ENUM) {
          const propKey: string = model.name;
          const options = items.map((item) => item[propKey].toString())
                                  .filter((value, index, self) => self.indexOf(value) === index)
                                  .sort();

          state.values = { ...state.values, [propKey]: options };
        }
      }
    },
    setRefinementBool(state, options: { name: string; value: any }) {
      if (options.value === undefined) {
        Vue.delete(state.refinements, options.name);
      } else {
        state.refinements = { ...state.refinements, [options.name]: options.value };
      }
    },
    setRefinementEnum(state, options: { name: string; key: string; value: any }) {
      if (!state.refinements.hasOwnProperty(options.name)) {
        Vue.set(state.refinements, options.name, {});
      }

      if (options.value === undefined) {
        Vue.delete(state.refinements[options.name], options.key);

        // Clean-up
        if (Object.keys(state.refinements[options.name]).length === 0) {
          Vue.delete(state.refinements, options.name);
        }
      } else {
        Vue.set(state.refinements[options.name], options.key, false);
      }
    },
    setAllRefinements(state, options) {
      Vue.set(state, 'refinements', options);
    },
  },
  getters: {
    items(state) {
      let filteredItems = state.items;

      for (const filterKey in state.refinements) {
        if (state.refinements.hasOwnProperty(filterKey)) {
          const filterValue = state.refinements[filterKey];
          const model = filters.find((filter) => filter.name === filterKey);
          const filterType = model ? model.type : undefined;

          switch (filterType) {

            case TYPES.BOOL:
              filteredItems = filteredItems.filter((item) => {
                return item[filterKey] === filterValue;
              });
              break;

            case TYPES.ENUM:
              const subFilters = state.refinements[filterKey];
              const bad: string[] = [];

              for (const subFilterKey in subFilters) {
                if (subFilters.hasOwnProperty(subFilterKey)) {
                  const subFilterValue = subFilters[subFilterKey];

                  if (subFilterValue === false) {
                    bad.push(subFilterKey);
                  }
                }
              }

              if (bad.length) {
                filteredItems = filteredItems.filter((item) => {
                  return !bad.includes(item[filterKey]);
                });
              }
              break;

          }
        }
      }

      return filteredItems;
    },
    refinements(state) {
      return state.refinements;
    },
  },
});
