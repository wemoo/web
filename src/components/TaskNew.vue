<template>
  <div class="task-new">
    <div class="task">
      <div class="header">
        <h1>New task</h1>
        <h2>Create a new task.</h2>
      </div>

      <div class="body">
        <form class="pure-form pure-form-stacked">
          <fieldset>
            <div class="pure-control-group">
                <label for="name">Task Name</label>
                <input id="name" v-model="taskName"
                  type="text" class="pure-input-1" placeholder="Your task name">
            </div>
            <div class="pure-control-group">
                <label for="description">Description</label>
                <input id="description" v-model="taskDesc"
                  type="text" class="pure-input-1" placeholder="Maybe a short description">
            </div>
            <div class="pure-control-group">
                <label for="email">Script</label>
                <textarea id="script" v-model="taskScript"
                  class="pure-input-1" placeholder="Type your scipt here."></textarea>
            </div>
          </fieldset>
        </form>
      </div>
    </div>

    <pre>
      {{ task | json }}
    </pre>
  </div>
</template>


<script type="text/javascript">
import server from '../model'

export default {
  name: 'TaskNew',
  components: {},

  data () {
    return {
      taskName: null,
      taskDesc: null,
      taskScript: null
    }
  },

  computed: {
    task () {
      return {
        'name': this.taskName,
        'desc': this.taskDesc,
        'script': this.taskScript
      }
    }
  },

  methods: {
  },

  ready: () => {
    console.log(server.fetchAllTasks())
  }
}
</script>


<style>

</style>
