<template>
  <v-col cols="12" sm="4">
    <h1>{{ title }}</h1>
    <draggable tag="div" :options="{group: 'TASKS'}">
      <task-card v-for="task in tasks" v-bind:key="task.name" :task="task" />
    </draggable>
  </v-col>
</template>

<script>
import draggable from 'vuedraggable'
import TaskCard from '~/components/taskCard.vue'

export default {
  components: {
    draggable,
    TaskCard
  },
  props: {
    title: String,
    tasks: [],
  }
}
</script>
