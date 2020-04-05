<template>
  <v-card>
    <v-card-title class="headline">
      {{ task.name }}
    </v-card-title>
    <v-card-text>
      {{ task.description }}
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        nuxt
        to="/"
        target="_blank"
      >
        Link
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    task: {}
  }
}
</script>
