<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar title="IndyBMS" absolute color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        <v-btn icon="fa:fas fa-search"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer absolute app  class="bg-primary">
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          &copy; {{ new Date().getFullYear() }} — <strong>IndyBMS</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>

</style>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>
