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
      <div class="text-center">
      </div>

      <v-row>
        <draggable tag="v-col" cols="12" sm="4" :options="{group:'ITEMS'}">
          <h1>TODO</h1>
          <task-card v-for="task in todos" v-bind:key="task.name" :name="task.name" :description="task.description" />
        </draggable>
        <draggable tag="v-col" cols="12" sm="4" :options="{group:'ITEMS'}">
          <h1>In progress</h1>
          <task-card v-for="task in inProgresses" v-bind:key="task.name" :name="task.name" :description="task.description" />
        </draggable>
        <draggable tag="v-col" cols="12" sm="4" :options="{group:'ITEMS'}">
          <h1>Done</h1>
          <task-card v-for="task in dones" v-bind:key="task.name" :name="task.name" :description="task.description" />
        </draggable>
      </v-row>

    </v-flex>
  </v-layout>
</template>

<script>
import draggable from 'vuedraggable'
import TaskCard from '~/components/taskCard.vue'

export default {
  components: {
    draggable,
    TaskCard
  },
  data() {
    var tasks = []

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
