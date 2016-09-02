<template>
  <div class="task-show">
    <div class="task">
      <div class="header">
        <h3>Task Show</h3>
        <p>The task details.</p>
      </div>
      <div class="body">
        <h4>Title</h4>
        <p>{{ task.title }}</p>

        <h4>Description</h4>
        <p>{{ task.desc }}</p>

        <h4>Script</h4>
        <pre>{{ task.script }}</pre>

        <h4>Result</h4>
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
