<template>
  <v-row class="py-6">
    <v-col cols="12" md="4" :lg="3" v-for="(event, i) in items" :key="i">
      <Card :id="event.id" :name="event.title" :srcImg="event.coverImage" :url="'/events/' + event.id" />
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