<template>
  <div>
    <v-carousel cycle>
      <v-carousel-item
        v-for="(event, i) in events"
        :key="i"
        :src="event.src"
        cover></v-carousel-item>
    </v-carousel>
    <SearchBar />
    <v-row
      class="mx-4 mb-2"
      justify="center">
      <v-col
        class="mx-2"
        cols="12"
        md="4"
        :lg="2"
        v-for="(category, i) in categoryStore.categories"
        :key="i">
        <CategoryCard
          :id="category.id"
          :name="category.name"
          :srcImg="category.image"
          :url="'/categories/' + category.id" />
      </v-col>
    </v-row>
    <v-row
      v-if="userStore.user && userStore.user.privilege !== 'USER'"
      class="mx-4 my-4 text-center">
      <v-col cols="12">
        <v-btn
          color="indigo"
          append-icon="fa:fas fa-arrow-right"
          variant="flat"
          size="large"
          to="/events/add">
          Add Your Own Event
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { useCategoryStore } from "../stores/category";
  import { useUserStore } from "../stores/user";
  const categoryStore = useCategoryStore();
  const userStore = useUserStore();
  categoryStore.getAllCategories();
  if (userStore.token) {
    userStore.getUser(userStore.id);
  }
</script>

<script>
  import SearchBar from "../components/search_bar.vue";
  import CategoryCard from "../components/category_card.vue";

  export default {
    name: "home",
    components: {
      SearchBar,
      CategoryCard,
    },
    data: () => ({
      events: [
        {
          src: "https://my-site-images-test.s3.us-east-1.amazonaws.com/1647749488819.jpeg",
        },
        {
          src: "https://my-site-images-test.s3.us-east-1.amazonaws.com/1647749692739.jpg",
        },
        {
          src: "https://my-site-images-test.s3.us-east-1.amazonaws.com/1647750384115-1.jpeg",
        },
        {
          src: "https://my-site-images-test.s3.us-east-1.amazonaws.com/1647750384115.jpeg",
        },
      ],
    }),
  };
</script>
