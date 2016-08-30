<template>
  <div class="task-new">
    <div class="task">
      <div class="header">
        <h1>New task</h1>
        <h2>Create a new task.</h2>
      </div>

      <div class="body">
        <form class="pure-form pure-form-aligned">
          <fieldset>
            <div class="pure-control-group">
                <label for="name">Username</label>
                <input id="name" type="text" placeholder="Username">
            </div>

            <div class="pure-control-group">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password">
            </div>

            <div class="pure-control-group">
                <label for="email">Email Address</label>
                <input id="email" type="email" placeholder="Email Address">
            </div>

            <div class="pure-control-group">
                <label for="foo">Supercalifragilistic Label</label>
                <input id="foo" type="text" placeholder="Enter something here...">
            </div>

            <div class="pure-controls">
                <label for="cb" class="pure-checkbox">
                    <input id="cb" type="checkbox"> I've read the terms and conditions
                </label>

                <button type="submit" class="pure-button pure-button-primary">Submit</button>
            </div>
          </fieldset>
        </form>

        <input type="text" placeholder="Task name">
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
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
