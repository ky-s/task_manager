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
          <task-lane :title="'TODO'" :tasks="todos" />
          <task-lane :title="'In Progress'" :tasks="inProgresses" />
          <task-lane :title="'Done'" :tasks="dones" />
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
    var tasks = {
      todos: [],
      inProgresses: [],
      dones: []
    }

    for (let i = 1; i <= 20; i++) {
      tasks.todos = tasks.todos.concat([
        { name: 'test' + i,  description: 'test を test が test で test に test する' }
      ])
    }

    for (let i = 1; i <= 20; i++) {
      tasks.inProgresses = tasks.inProgresses.concat([
        { name: 'test' + (i + 20),  description: 'test を test が test で test に test する' }
      ])
    }

    for (let i = 1; i <= 20; i++) {
      tasks.dones = tasks.dones.concat([
        { name: 'test' + (i + 40),  description: 'test を test が test で test に test する' }
      ])
    }

    return tasks
  }
}
</script>
