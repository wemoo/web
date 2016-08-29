<template>
  <div class="task-new">
    <div class="task">
      <div class="header">
        <h1>New task</h1>
        <h2>Create a new task.</h2>
      </div>
    </div>
  </div>
</template>


<script>
import server from '../model'

export default {
  name: 'TaskNew',
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
