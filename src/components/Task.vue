<template>
  <div class="task">

  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>

  </div>
</template>

<script>
export default {
  name: 'Task',
  components: {},
  computed: {}
}
</script>


<style>
</style>
