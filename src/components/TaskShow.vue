<template>
  <div class="task-show">
    <div class="task">
      <div class="header">
        <h1>Task Show</h1>
        <h2>The task details.</h2>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TaskShow',
  data () {
    return {
      taskId: this.$route.params.id,
      task: null
    }
  },
  components: {},
  computed: {},
  ready () {
    console.log(this.taskId)
  }
}
</script>


<style>
</style>
