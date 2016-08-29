<template>
  <div class="task">
    <div class="header">
      <h1>Task list</h1>
      <h2>All tasks are here.</h2>
    </div>

    <a v-link="{ path: '/task/new' }">New task here</a>

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
