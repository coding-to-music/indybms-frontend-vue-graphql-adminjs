<template>
  <div>
    <v-row class="my-2 text-center">
      <v-col cols="12">
        <h1 class="text-h5 font-weight-light">Find {{ categoryStore.getCurrentCategory?.name }} Events</h1>
      </v-col>
    </v-row>
    <SearchBar :term="this.searchTerm" />
    <v-row class="mx-4 mb-2">
      <v-col v-if="this.$route.params.categoryId" class="mx-2" cols="12" md="4" :lg="2"
        v-for="(event, i) in categoryStore.categoryEvents" :key="event.id">
        <CategoryCard :id="event.id" :name="event.title" :srcImg="event.coverImage" :url="'/events/' + event.id" />
      </v-col>
      <v-col v-else class="mx-2" cols="12" md="4" :lg="2" v-for="(event, i) in eventStore.events" :key="i">
        <CategoryCard :id="event.id" :name="event.title" :srcImg="event.coverImage" :url="'/events/' + event.id" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useCategoryStore } from "../stores/category";
import { useEventStore } from "../stores/event";
const categoryStore = useCategoryStore();
const eventStore = useEventStore();
categoryStore.getAllCategories();
</script>

<script>
import SearchBar from '../components/search_bar.vue'
import CategoryCard from '../components/category_card.vue'

export default {
  name: 'home',
  props: {
    searchTerm: String,
    default: ''
  },
  components: {
    SearchBar,
    CategoryCard,
  },
  mounted() {
    console.log(this.$route.params.categoryId);
    if (this.$route.params.categoryId && this.$route.params.categoryId != 'null' && this.$route.params.categoryId != 'undefined') {
      this.categoryStore.getCategoryEvents(this.$route.params.categoryId)
    } else {
      if (this.searchTerm && this.searchTerm != '' && this.searchTerm != 'null') {
        this.eventStore.searchEvents(this.searchTerm);
      } else {
        this.eventStore.getAllEvents()
      }
    }

  },
  beforeUpdate() {
    if (this.searchTerm && this.searchTerm != '' && this.searchTerm != 'null') {
      this.eventStore.searchEvents(this.searchTerm);
    } else {
      this.eventStore.getAllEvents()
    }
  },
}
</script>
