<template>
  <div class="boolean filter">
    <label><input type="checkbox" @change="changeHandler" />{{ label }}</label>
  </div>
</template>


<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'BoolFilterComponent',
  props: {
    label: String,
    filterName: String,
  },
  data() {
    return {
      prevVal: undefined as (undefined|boolean),
    };
  },
  methods: {
    changeHandler(event: any) { // TODO change to some fancy Vue Event
      switch (this.prevVal) {
        case true:
          event.target.indeterminate = false;
          this.prevVal = false;
          break;

        case false:
          event.target.checked = false;
          event.target.indeterminate = true;
          this.prevVal = undefined;
          break;

        default:
          this.prevVal = true;
      }

      this.$store.commit('setBoolFilterVal', {
        name: this.filterName,
        value: this.prevVal,
      });
    },
  },
  mounted() {
    const checkboxEl = this.$el.getElementsByTagName('input')[0];
    const currentVal = this.$store.state.filters[this.filterName];

    if (currentVal === undefined) {
      checkboxEl.indeterminate = true;
    } else if (currentVal === true) {
      checkboxEl.checked = true;
    }

    this.prevVal = currentVal;
  },
});

</script>


<style lang="scss">

.boolean.filter {

  label {
    position: relative;

    &:before {
      content: '⋮';
      position: absolute;
      left: 0em;
      top: 0.05em;
    }
  }

  input {
    cursor: pointer;
    margin-left: 0.5em;
    margin-right: 0.3em;
  }

}

</style>
