<template>
  <div class="task-index">
    <div class="task">
      <div class="header">
          <h1>Task Index</h1>
          <h2>All tasks list here.</h2>
      </div>
      <div class="jump-link">
        <a v-link="{ path: '/task/new' }">New task here</a>
      </div>

      <div class="task-list table-responsive">
        <div class="pure-g">
          <div class="pure-u-md-1-1">
            <table class="pure-table pure-table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Desc</th>
                  <th>Finished?</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="task in tasks">
                  <tr class="pure-table-odd">
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>

      </div>
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
  ready () {
    server.fetchAllTasks()
      .done((data) => {
        console.log('Finished fetch index')
        console.log(data)
        this.$set('tasks', data.content.tasks)
      })
  }
}
</script>

<style>

</style>
