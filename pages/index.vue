<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-container>
        <v-row>
          <task-lane
           v-for="taskLane in taskLanes"
           :title="taskLane.title"
           :tasks="taskLane.tasks"
           :col="taskLane.col"
          />
        </v-row>
      </v-container>

    </v-flex>
  </v-layout>
</template>

<script>
import draggable from 'vuedraggable'
import TaskLane from '~/components/taskLane.vue'

export default {
  components: {
    draggable,
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
