<template>
  <v-col cols="12" :sm="col">
    <h1>{{ title }}</h1>
    <draggable tag="div" :options="{group: 'TASKS', animation: 200, delay: 50}" @end="taskMoved" :data-id="title" style="height: 100%">
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
    tasks: Array,
    col: Number
  },
  methods: {
    // ここにおいていいものか。
    // この component を複数配置したとき多重定義されて悪さしないか。
    // でも実際使ってみてそうはならなかったから大丈夫なのかも。
    taskMoved(event) {
      let id       = event.item.dataset.id
      let fromLane = event.from.dataset.id
      let toLane   = event.to.dataset.id

      if (fromLane != toLane) {
        console.dir('task: ' + id + ' moved. ' + fromLane + ' => ' + toLane)

        this.$axios.put('/api/task/' + id + '/' + fromLane + '-' + toLane)
          .then(response => { console.dir(response) })
      }
    }
  }
}
</script>
