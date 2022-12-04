<template>
  <v-card :to="url">
    <v-img :src="srcImg" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.75)" height="12.5rem" fit>
      <v-card-title class="text-white font-weight-bold text-center" v-text="name"></v-card-title>
    </v-img>
  </v-card>
</template>
<script>
export default {
  name: 'category_card',
  props: {
    name: String,
    srcImg: String,
    id: String,
    url: String,
  },
}
</script>
<style scoped>

</style>