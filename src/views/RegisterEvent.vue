<script setup>

</script>
<template>
    <div class="py-16">
        <v-card class="mx-auto my-16" width="40rem">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Register for {{ event }}</v-toolbar-title>
             </v-toolbar>
        <v-card-text>
            <v-form ref="registerForm" v-model="valid" lazy-validation>
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
                    <v-spacer></v-spacer>
                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                        <v-btn x-large block color="primary" @click="validate">Register</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>
export default {
  name: 'registerevent',
  props: {
    event: String
  },
  methods: {
    validate() {
        this.$refs.registerForm.validate()
    //   if (this.$refs.registerForm.validate()) {
    //     // submit form to server/API here...
    //   }
    },
  },
  data: () => ({
    valid: true,
    name: "",
    mobile:"",
    email: "",
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