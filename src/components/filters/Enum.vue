<template>
  <div class="multiselect filter">
    <label v-for="(label, i) in options" :key="i">
      <input type="checkbox" @change="changeHandler($event, label)" />{{ label }}
    </label>
  </div>
</template>


<script lang="ts">

import Vue from 'vue';
import store from '@/store';

interface PrevVals {
  [key: string]: (undefined|boolean);
}

export default Vue.extend({
  name: 'EnumFilterComponent',
  props: {
    filterName: String,
  },
  data(): { prevVals: PrevVals } {
    const prevVals: PrevVals = {};
    const options = store.state.values[this.filterName];

    if (options) {
      options.forEach((option: string) => prevVals[option] = undefined);
    }

    return {
      prevVals,
    };
  },
  computed: {
    options(): (undefined|any[]) {
      return store.state.values[this.filterName];
    },
  },
  methods: {
    changeHandler(event: any, optionKey: string) { // TODO change any to some fancy Vue Event
      switch (this.prevVals[optionKey]) {
        case false:
          event.target.checked = false;
          event.target.indeterminate = true;
          this.$delete(this.prevVals, optionKey);
          break;

        default:
          event.target.checked = false;
          this.$set(this.prevVals, optionKey, false);
      }

      this.$store.commit('setEnumFilterVal', {
        name: this.filterName,
        key: optionKey,
        value: this.prevVals[optionKey],
      });
    },
  },
  mounted() {
    setTimeout(() => { // Let the templating engine render the v-for loop first
      const checkboxEls = this.$el.getElementsByTagName('input');
      const currentVals: (undefined|{ [key: string]: any }) = this.$store.state.filters[this.filterName];

      if (currentVals === undefined) {
        for (let i = 0; i < checkboxEls.length; i++) {
          checkboxEls[i].indeterminate = true;
        }
      } else {
        for (let i = 0; i < checkboxEls.length; i++) {
          const values = store.state.values[this.filterName];
          if (values !== undefined) {
            const optionKey: string = values[i];

            if (currentVals.hasOwnProperty(optionKey)) {
              checkboxEls[i].checked = false;
            } else {
              checkboxEls[i].indeterminate = true;
            }
          }
        }

        this.prevVals = currentVals;
      }
    }, 0);
  },
});

</script>


<style lang="scss">

.multiselect.filter {
  label {
    position: relative;

    &:before {
      content: ':';
      position: absolute;
      left: 0.35em;
      top: 0em;
    }
  }

  input {
    cursor: pointer;
    margin-left: 1em;
    margin-right: 0.3em;
  }

}

</style>
