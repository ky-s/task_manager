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
        <v-col cols="12" sm="4" v-for="task in tasks" v-bind:key="task.name">
          <task-card :name="task.name" :description="task.description" />
        </v-col>
      </v-row>

    </v-flex>
  </v-layout>
</template>

<script>
import TaskCard from '~/components/taskCard.vue'

export default {
  components: {
    TaskCard
  },
  data() {
    var tasks = []

    for (var i = 0; i < 100; i++) {
      tasks = tasks.concat([
        { name: 'test' + i,  description: 'test を test が test で test に test する' }
      ])
    }
    return { tasks }
  }
}
</script>
