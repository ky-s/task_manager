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
    var todos = []
    for (let i = 1; i <= 20; i++) {
      todos = todos.concat([
        { name: 'test' + i,  description: 'test を test が test で test に test する' }
      ])
    }

    var inProgresses = []
    for (let i = 1; i <= 20; i++) {
      inProgresses = inProgresses.concat([
        { name: 'test' + (i + 20),  description: 'test を test が test で test に test する' }
      ])
    }

    var dones = []
    for (let i = 1; i <= 20; i++) {
      dones = dones.concat([
        { name: 'test' + (i + 40),  description: 'test を test が test で test に test する' }
      ])
    }

    return {
      taskLanes: [
        { title: 'TODO',        tasks: todos,        col: 4 },
        { title: 'In Progress', tasks: inProgresses, col: 4 },
        { title: 'Done',        tasks: dones,        col: 4 },
      ]
    }
  }
}
</script>
