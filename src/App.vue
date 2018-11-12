<template>
  <div id="app">

    <nav class="navbar docs-navbar is-spaced has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" exact-active-class="is-active" to="/">{{ appName }}</router-link>
          <span class="navbar-burger burger"><span></span> <span></span> <span></span></span>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" exact-active-class="is-active" to="/">Main</router-link>
            <router-link class="navbar-item" exact-active-class="is-active" to="/about">About</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column">
              <p>
                Contains a sample set of data which may be not completely accurate.
              </p>
              <p>
                <small>
                  v{{ version }}.
                  Identifier's source code is licensed under
                  <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a>.
                </small>
              </p>
              <div class="field">
                <p class="control"><a href="https://github.com/vflyson/identifier-js" class="button"><span>GitHub</span></a></p>
              </div>
            </div>
            <div class="column">
              <router-link class="navbar-item has-text-weight-semibold" exact-active-class="is-active" to="/">Main</router-link>
              <router-link class="navbar-item has-text-weight-semibold" exact-active-class="is-active" to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>


<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'Identifier',
  data() {
    return {
      appName: 'Identifier',
      version: require('../package.json').version,
    };
  },
});

</script>


<style lang="scss">

label {
  display: block;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  }
}

</style>
