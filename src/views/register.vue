<template>
  <div class="py-16">
    <v-card class="mx-auto my-16" width="40rem">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Create an Account</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="signupForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="name" :rules="[rules.required]" label="Name" maxlength="20"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="mobile" :rules="mobileRules" label="Mobile"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="email" :rules="emailRules" label="Email"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="password" :rules="[rules.required, rules.min]" type="password"
                name="input-password" label="Password" hint="At least 8 characters"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field block v-model="verify" :rules="[rules.required, passwordMatch]" type="password"
                name="input-password" label="Confirm Password"></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
              <v-btn x-large block color="primary" @click="validate">Sign Up</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'register',
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    validate() {
      this.$refs.signupForm.validate()
      //   if (this.$refs.registerForm.validate()) {
      //     // submit form to server/API here...
      //   }
    },
  },
  data: () => ({
    valid: true,
    name: "",
    mobile: "",
    email: "",
    password: "",
    verify: "",
    mobileRules: [
      v => !!v || "Required",
      v => (v && !isNaN(parseFloat(v)) && v.length == 10) || "Mobile must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
}
</script>

<style scoped>

</style>