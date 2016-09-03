<template>
  <div class="task-show">
    <div class="task">
      <div class="header">
        <div class="page-title">Task Show</div>
        <div class="page-desc">The task details.</div>
      </div>
      <div class="task-body">
        <div class="edit-task">
          <button @click="edit()" class="button-success pure-button">Edit</button>
        </div>
        <h4>Title</h4>
        <p>{{ task.title }}</p>

        <h4>Description</h4>
        <p>{{ task.desc }}</p>

        <h4>Host</h4>
        <p>{{ host.hostname }}</p>

        <h4>Script</h4>
        <pre>{{ task.script }}</pre>

        <h4>Result</h4>
        <p>{{ task.result || '-' }}</p>
      </div>
  </div>
</template>

<script>
import server from '../model'
import store from '../store'

export default {
  name: 'TaskShow',
  data () {
    return {
      taskId: this.$route.params.id,
      task: {},
      host: {}
    }
  },

  methods: {
    edit () {
      store.currentTask = this.task
      this.$router.go('/task/' + this.task.id + '/edit')
    }
  },

  route: {
    activate () {
      this.task = {}
      console.log('route changed')
      server.fetchTaskById(this.$route.params.id)
        .done((data) => {
          this.task = data.content.task

          // Get host info
          server.fetchHostById(this.task.host)
            .done((data) => {
              this.host = data.content.host
            })
        })
    }
  },

  created () {
    console.log('created')
  }
}
</script>


<style>
.edit-task {
  float: right;
}
</style>
