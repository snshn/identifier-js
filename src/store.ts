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
    filters: {}, // Filter parameters
    values: {}, // Cached set of all possible values for Multiselect properties
    mode: _VM.LIST, // View mode
  },
  mutations: {
    init(state): void {
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
    setBoolFilterVal(state, options: { name: string; value: any }) {
      if (options.value === undefined) {
        Vue.delete(state.filters, options.name);
      } else {
        state.filters = { ...state.filters, [options.name]: options.value };
      }
    },
    setEnumFilterVal(state, options: { name: string; key: string; value: any }) {
      if (!state.filters.hasOwnProperty(options.name)) {
        Vue.set(state.filters, options.name, {});
      }

      if (options.value === undefined) {
        Vue.delete(state.filters[options.name], options.key);

        // Clean-up
        if (Object.keys(state.filters[options.name]).length === 0) {
          Vue.delete(state.filters, options.name);
        }
      } else {
        Vue.set(state.filters[options.name], options.key, false);
      }
    },
  },
  getters: {
    items(state) {
      let filteredItems = state.items;

      for (const filterKey in state.filters) {
        if (state.filters.hasOwnProperty(filterKey)) {
          const filterValue = state.filters[filterKey];
          const model = filters.find((filter) => filter.name === filterKey);
          const filterType = model ? model.type : undefined;

          switch (filterType) {

            case TYPES.BOOL:
              filteredItems = filteredItems.filter((item) => {
                return item[filterKey] === filterValue;
              });
              break;

            case TYPES.ENUM:
              const subFilters = state.filters[filterKey];
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
    filters(state) {
      return state.filters;
    },
  },
});
