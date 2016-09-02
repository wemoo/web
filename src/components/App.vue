<template>
  <div id="main">
    <div class="content">
      <router-view
         class="view"
         keep-alive
         transition
         transition-mode="out-in">
      </router-view>
    </div>
  </div>
</template>

<script>
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
