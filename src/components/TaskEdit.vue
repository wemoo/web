<template>
<div class="task-edit">
  <div class="task">
    <div class="header">
      <div class="page-title">Edit task</div>
      <div class="page-desc">update task.</div>
    </div>
    <div class="body">
      <form class="pure-form pure-form-stacked">
        <fieldset>
          <div class="pure-control-group">
            <label>Title</label>
            <input id="title" v-model="taskTitle" type="text" class="pure-input-1" placeholder="Your task title">
          </div>
          <div class="pure-control-group">
            <label>Host</label>
            <select v-model="selectedHost">
              <option v-for="option in hosts" v-bind:value="option.value">
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="pure-control-group">
            <label for="description">Description</label>
            <input id="description" v-model="taskDesc" type="text" class="pure-input-1" placeholder="Maybe a short description">
          </div>
          <div class="pure-control-group">
            <label for="email">Script</label>
            <textarea id="script" v-model="taskScript" class="pure-input-1" placeholder="Type your scipt here."></textarea>
          </div>

        </fieldset>
      </form>

      <button @click="update()" class="pure-button pure-button-primary">Update</button>
    </div>
  </div>

  <pre>
      {{ task | json }}
    </pre>
</div>
</template>


<script type="text/javascript">
import $ from '../lib/zepto'
import server from '../model'
import store from '../store'

export default {
  name: 'TaskNew',
  components: {},

  data () {
    return {
      taskTitle: null,
      taskDesc: null,
      taskScript: null,
      selectedHost: null,
      hosts: []
    }
  },

  methods: {
    update () {
      console.log('create task')
      let taskId = this.$route.params.id
      server.updateTask(
        taskId,
        {
          'title': this.taskTitle,
          'desc': this.taskDesc,
          'script': this.taskScript,
          'host': this.selectedHost
        })
        .done((data) => {
          console.log(data.content)
          this.$router.go('/task/' + taskId)
        })
    },
    updateView (data) {
      this.taskTitle = data.title
      this.taskDesc = data.desc
      this.taskScript = data.script
      this.selectedHost = data.host
    }
  },

  route: {
    activate () {
      // check task from store
      if (this.$route.params.id === store.currentTask.id) {
        console.log('found currentTask')
        this.task = store.currentTask
        this.updateView(this.task)
      } else {
        console.log('store.currentTask not found')
        server.fetchTaskById(this.$route.params.id)
          .done((data) => {
            this.task = data.content.task
            this.updateView(this.task)
          })
      }

      // Fetch hosts
      server.fetchAllHosts()
        .done((data) => {
          $.each(data.content.hosts, (index, item) => {
            let host = {}
            host['name'] = item.hostname + ', ' + item.system + ', ' + item.release
            host['value'] = item.id
            this.hosts.push(host)
          })
        })
    }
  },

  ready () {}
}
</script>


<style>
</style>
