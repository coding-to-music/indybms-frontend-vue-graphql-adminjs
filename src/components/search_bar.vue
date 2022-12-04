<template>
  <v-row class="mx-4 my-4" justify="center">
    <v-col cols="12" md="6">
      <v-text-field v-model="searchTerm" clearable label="Search for your favourite events" variant="solo"
        append-inner-icon="fa:fas fa-search" @click:append-inner="search"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'searchbar',
  data: () => ({
    searchTerm: '',
  }),
  methods: {
    search() {
      console.log(this.searchTerm);
    },
  },
}
</script>

<style>

</style>

