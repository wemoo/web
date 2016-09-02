<template>
  <div id="wrapper">
    <div id="layout">

      <a href="#menu" id="menuLink" class="menu-link" @click="menuClick">
        <span></span>
      </a>

      <div id="menu">
        <div class="pure-menu"  @click="menuClick">
          <a class="pure-menu-heading" href="#">Wemoo</a>
          <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="/#!/task/index" class="pure-menu-link">Task</a></li>
            <li class="pure-menu-item"><a href="/#!/monitor" class="pure-menu-link">Host</a></li>
            <li class="pure-menu-item"><a href="/#!/logs" class="pure-menu-link">Log</a></li>
          </ul>
        </div>
      </div>

      <div class="content">
        <router-view class="view" keep-alive transition transition-mode="out-in"> </router-view>
      </div>

    </div>
  </div>
</template>

<script>
import $ from '../lib/zepto'

export default {
  name: 'App',
  methods: {
    menuClick () {
      var active = 'active'

      $('#layout').toggleClass(active)
      $('#menu').toggleClass(active)
      $('#menuLink').toggleClass(active)
    }
  },
  ready () {}
}
</script>

<style>
.page-title {
    font-size: 25px;
    font-weight: bold;
}

.page-desc {
    font-size: 15px;
}

</style>
