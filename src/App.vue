<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar absolute color="indigo" density="comfortable">
      <v-btn variant="plain" to="/" color="white">
        <v-app-bar-title>IndyBMS</v-app-bar-title>
      </v-btn>
      <template v-slot:append>
        <v-btn color="white" variant="plain" class="mx-4" size="medium" to="/login">Login</v-btn>
        <v-btn color="white" variant="plain" class="mx-2 ml-4" size="medium" to="/register">Register</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer absolute app class="bg-indigo">
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-4 btn-text">
          {{ link.title }}
        </v-btn>
        <v-col class="text-center mt-0" cols="12">
          &copy; {{ new Date().getFullYear() }} — <strong> &copy; IndyBMS</strong>
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
      { title: 'About Us', path: "/#" },
      { title: 'Team', path: "/#" },
      { title: 'Services', path: "/#" },
      { title: 'Blog', path: "/#" },
      { title: 'Contact Us', path: "/#" },
    ],
  }),
}
</script>

<style scoped>
.btn-text {
  font-size: 0.8rem;
}
</style>