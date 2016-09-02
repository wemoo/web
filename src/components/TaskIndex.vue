<template>
  <div class="task-index">
    <div class="task">
      <div class="header">
        <div class="page-title">Task Index</div>
        <div class="page-desc">All tasks list here.</div>
      </div>
      <div class="jump-link">
        <a v-link="{ path: '/task/new' }">New task here</a>
      </div>
      <div class="task-list">
        <div class="pure-g">
          <div class="pure-u-md-1-1">
            <table class="pure-table pure-table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Desc</th>
                  <th>Done?</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="task in tasks">
                  <tr class="{{ $index % 2 == 0  ? 'pure-table-even' : 'pure-table-odd' }}">
                    <td>{{ $index + 1 }}</td>
                    <td><a @click="showTask(task)">{{ task.title }}</a></td>
                    <td>{{ task.desc }}</td>
                    <td>{{ task.finished == null || task.finished == false ? 'NOT' : 'done' }}</td>
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
  methods: {
    showTask (task) {
      console.log(task)
      this.$router.go('/task/' + task.id)
    }
  },
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
