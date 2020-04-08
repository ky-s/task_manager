<template>
  <v-layout
    column
    justify-center
    align-center
    class="teal darken-4 py-4"
  >
    <v-text class="display-1">Project-X</v-text>
    <v-container class="teal darken-2 ma-2">
      <v-row>
        <task-lane
         v-for="taskLane in taskLanes"
         :title="taskLane.title"
         :tasks="taskLane.tasks"
         :col="taskLane.col"
        />
      </v-row>
    </v-container>

  </v-layout>
</template>

<script>
import TaskLane from '~/components/taskLane.vue'

export default {
  components: {
    TaskLane
  },
  data() {
    return { taskLanes: [] }
  },
  mounted() {
    this.$axios.get('api/task_lanes')
      .then(response => {
        this.taskLanes = response.data
      })
  }
}
</script>
