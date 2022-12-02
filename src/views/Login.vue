<template>
    <div class="py-16">
        <v-card class="mx-auto my-16" width="40rem">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field variant="outlined" v-model="username" :rules="[rules.required]"
                                label="Mobile/Email"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field variant="outlined" v-model="password" :rules="[rules.required]"
                                type="password" name="input-password" label="Password"></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                            <v-btn x-large block color="primary" @click="validate">Login</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "login",
    methods: {
        validate() {
            this.$refs.loginForm.validate()
            //   if (this.$refs.loginForm.validate()) {
            //     // submit form to server/API here...
            //   }
        },
    },
    data: () => ({
        valid: true,
        username: "",
        password: "",
        rules: {
            required: value => !!value || "Required.",
        }
    })
};
</script>

<style>

</style>