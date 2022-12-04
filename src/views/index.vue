<template>
  <div>
    <v-carousel cycle>
      <v-carousel-item v-for="(event, i) in events" :key="i" :src="event.src" cover></v-carousel-item>
    </v-carousel>
    <SearchBar />
    <v-row class="mx-4">
      <v-col class="mx-2" cols="12" md="4" :lg="2" v-for="(category, i) in categoryStore.categories" :key="i">
        <CategoryCard :id="category.id" :name="category.name" :srcImg="category.image" />
      </v-col>
    </v-row>
    <v-row class="mx-4 my-4 text-center">
      <v-col cols="12">
        <v-btn color="indigo" append-icon="fa:fas fa-arrow-right" variant="flat" size="large" to="/events/add">
          Add Your Own Event
        </v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script setup>
import { useCategoryStore } from "../stores/category";
const categoryStore = useCategoryStore();
categoryStore.getAllCategories();
</script>

<script>
import SearchBar from '../components/search_bar.vue'
import CategoryCard from '../components/category_card.vue'

export default {
  name: 'home',
  components: {
    SearchBar,
    CategoryCard,
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
  }),
}
</script>

<style scoped>

</style>
