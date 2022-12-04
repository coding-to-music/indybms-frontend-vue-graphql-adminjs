<template>
  <div>
    <v-container>
      <v-row class="py-6">
        <v-col cols="12" md="4" :lg="3" v-for="(event, i) in events" :key="i">
          <Card :name="event.name" :srcImg="event.src" />
        </v-col>
      </v-row>
    </v-container>
    <v-pagination v-model="currentPage" :length="totalPages" @input="handlePageChange"></v-pagination>
  </div>
</template>
<script>
import Card from './category_card.vue'

export default {
  name: 'pagination',
  components: {
    Card,
  },
  data: () => ({
    events: [
      {
        name: "Hulk",
        src: "https://picsum.photos/500/300?image=1"
      },
      {
        name: "Spiderman",
        src: "https://picsum.photos/500/300?image=2"
      },
      {
        name: "Batman",
        src: "https://picsum.photos/500/300?image=3"
      },
      {
        name: "Ironman",
        src: "https://picsum.photos/500/300?image=4"
      },
      {
        name: "Aquaman",
        src: "https://picsum.photos/500/300?image=3"
      },
      {
        name: "Antman",
        src: "https://picsum.photos/500/300?image=4"
      },
      {
        name: "Superman",
        src: "https://picsum.photos/500/300?image=3"
      },
      {
        name: "Thor",
        src: "https://picsum.photos/500/300?image=4"
      },
    ],
    totalEvents: 16,
    currentPage: 1,
    eventsPerPage: 8,
    totalPages: 6,
  }),
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
    }
  }
}
</script>

<style>

</style>