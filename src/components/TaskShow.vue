<template>
  <div class="task-show">
    <div class="task">
      <div class="header">
        <h1>Task Show</h1>
        <h2>The task details.</h2>
      </div>
      <div class="body">
        <h3>Title</h3>
        <p>{{ task.title }}</p>

        <h3>Description</h3>
        <p>{{ task.desc }}</p>

        <h3>Script</h3>
        <pre>{{ task.script }}</pre>

        <h3>Result</h3>
        <p>{{ task.result || '-' }}</p>
      </div>
  </div>
</template>

<script>
import server from '../model'

export default {
  name: 'TaskShow',
  data () {
    return {
      taskId: this.$route.params.id,
      task: {}
    }
  },
  components: {},
  computed: {},
  ready () {
    console.log(this.taskId)
    server.fetchTaskById(this.taskId)
      .done((data) => {
        this.$set('task', data.content.task)
      })
  }
}
</script>


<style>
</style>
