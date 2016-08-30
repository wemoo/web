<template>
  <div class="task-index">
    <div class="task">
      <div class="header">
          <h1>Task Index</h1>
          <h2>All tasks list here.</h2>
      </div>
      <a v-link="{ path: '/task/new' }">New task here</a>
    </div>
  </div>
</template>


<script>
import server from '../model'

export default {
  name: 'TaskIndex',
  components: {},
  data () {
    return {
      tasks: null
    }
  },
  computed: {},
  ready: () => {
    console.log(server.fetchAllTasks())
  }
}
</script>

<style>

</style>
