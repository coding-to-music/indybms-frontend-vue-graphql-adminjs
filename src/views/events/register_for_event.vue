<template>
  <div>
    <v-dialog v-model="registrationStore.isDialogOpen" transition="dialog-bottom-transition" scrollable>
      <v-card flat>
        <v-toolbar dark color="indigo">
          <v-toolbar-title>Register for {{ event }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="isFormValid">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="name" outline :rules="[rules.required]" label="Name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="phone" outline :rules="phoneRules" label="Phone Number"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="email" outline :rules="emailRules" label="Email" type="email"></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex ml-auto" cols="12" md="4">
                <v-btn x-large block size="large" color="indigo" @click.prevent="register">Register</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useRegistrationStore } from "../../stores/registration";
import { useUserStore } from "../../stores/user";
const registrationStore = useRegistrationStore();
const userStore = useUserStore();
registrationStore.prepareMutation()
</script>

<script>
export default {
  name: 'register_for_event',
  props: {
    event: String,
    id: String,
  },
  methods: {
    async register() {
      let registration = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        event: this.id,
      };
      if (this.userStore.id) {
        registration.user = this.userStore.id;
      }
      await this.registrationStore.registerForEvent(registration)
      this.registrationStore.closeDialog()
    },
  },
  data: () => ({
    isFormValid: false,
    name: "",
    phone: "",
    email: "",
    phoneRules: [
      v => !!v || "Required",
      v => (v && !isNaN(parseFloat(v)) && v.length == 10) || "Phone Number must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required."
    }
  })
}
</script>

<style scoped>

</style>