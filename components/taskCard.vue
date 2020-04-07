<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card :id="'task-' + task.id" :data-id="task.id" class='teal lighten-2 my-4' :elevation="hover ? 24 : 6">
        <v-card-title class="headline">
          {{ task.name }}
        </v-card-title>
        <v-card-text>
          {{ task.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="cyan accent-4"
            nuxt
            to="/"
            target="_blank"
          >
            Link
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    task: {}
  }
}
</script>
