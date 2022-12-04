<template>
  <v-row class="py-6">
    <v-col cols="12" md="4" :lg="3" v-for="(event, i) in items" :key="i">
      <Card :name="event.name" :srcImg="event.src" />
    </v-col>
  </v-row>
</template>
<script>
import Card from './category_card.vue'

export default {
  name: 'list_view',
  props: {
    items: [Object],
  },
  components: {
    Card,
  },
}
</script>