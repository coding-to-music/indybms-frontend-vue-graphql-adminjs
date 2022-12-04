<template>
  <v-container class="py-16" fill-height fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card flat>
          <v-card-title class="font-weight-bold my-2 text-center">Login </v-card-title>
          <v-card-text>
            <v-form v-model="isFormValid" class="my-4">
              <v-text-field :rules="emailRules" outline label="Email Address" type="email" v-model="email"
                required></v-text-field>
              <v-text-field :rules="passwordRules" outline hide-details label="Password" type="password"
                v-model="password" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isFormValid" class="mx-2 mb-4" variant="flat" size="large" color="indigo" @click.prevent="userStore.loginUser(email, password)">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>

<script>
export default {
  name: "login",
  data: () => ({
    isFormValid: false,
    email: "",
    password: "",
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters',
    ],
  })
};
</script>