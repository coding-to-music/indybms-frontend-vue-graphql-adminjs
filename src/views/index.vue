<template>
  <div>
    <v-carousel cycle>
      <v-carousel-item v-for="(event, i) in events" :key="i" :src="event.src" cover></v-carousel-item>
    </v-carousel>
    <SearchBar />
    <v-container>
      <v-row>
        <v-col cols="12" md="4" :lg="12 / categories.length" v-for="(category, i) in categories" :key="i" rounded="xl">
          <Card id="d" :name="category.name" :srcImg="category.src" />
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions class="justify-center pb-8 mx-auto">
      <v-btn color="primary" prepend-icon="fa:fas fa-plus" append-icon="fa:fas fa-arrow-right" variant="tonal"
        size="small">
        Add your own event
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import SearchBar from '../components/search_bar.vue'
import Card from '../components/card.vue'

export default {
  name: 'home',
  components: {
    SearchBar,
    Card,
  },
  data: () => ({
    events: [
      {
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      },
    ],
    loaded: false,
    loading: false,
    categories: [
      {
        name: "Movies",
        src: "https://picsum.photos/500/300?image=1"
      },
      {
        name: "Music",
        src: "https://picsum.photos/500/300?image=2"
      },
      {
        name: "Sports",
        src: "https://picsum.photos/500/300?image=3"
      },
      {
        name: "Arts",
        src: "https://picsum.photos/500/300?image=4"
      },
      {
        name: "Exhibition",
        src: "https://picsum.photos/500/300?image=3"
      },
      {
        name: "Career Fair",
        src: "https://picsum.photos/500/300?image=4"
      },
    ],
  }),
}
</script>

<style scoped>

</style>
