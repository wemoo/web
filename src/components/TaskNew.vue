<template>
<div class="task-new">
  <div class="task">
    <div class="header">
      <div class="page-title">New task</div>
      <div class="page-desc">Create a new task.</div>
    </div>
    <div class="body">
      <form class="pure-form pure-form-stacked">
        <fieldset>
          <div class="pure-control-group">
            <label>Title</label>
            <input id="title" v-model="taskTitle" type="text" class="pure-input-1" placeholder="Your task title">
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

      <button @click="create()" class="pure-button pure-button-primary">Create</button>
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
      taskTitle: null,
      taskDesc: null,
      taskScript: null
    }
  },

  computed: {
    task () {
      return {
        'title': this.taskTitle,
        'desc': this.taskDesc,
        'script': this.taskScript
      }
    }
  },

  methods: {
    create () {
      console.log('create task')
      server.createTask({
        'title': this.taskTitle,
        'desc': this.taskDesc,
        'script': this.taskScript})
        .done((data) => {
          console.log(data.content)
          this.$router.go('/task/index')
        })
    }
  },

  ready () {
    console.log('Load ready.')
  }
}
</script>


<style>
</style>
