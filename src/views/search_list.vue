<template>
  <div>
    <v-row class="my-2 text-center">
      <v-col cols="12">
        <h1 class="text-h5 font-weight-light">Find Events</h1>
      </v-col>
    </v-row>
    <SearchBar :term="this.searchTerm" />
    <v-row class="mx-4 mb-2">
      <v-col class="mx-2" cols="12" md="4" :lg="2" v-for="(event, i) in eventStore.events" :key="i">
        <CategoryCard :id="event.id" :name="event.title" :srcImg="event.coverImage" :url="'/events/' + event.id" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useEventStore } from "../stores/event";
const eventStore = useEventStore();
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
    if (this.searchTerm && this.searchTerm != '' && this.searchTerm != 'null') {
      this.eventStore.searchEvents(this.searchTerm);
    } else {
      this.eventStore.getAllEvents()
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
