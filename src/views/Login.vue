<template>
  <div class="py-16">
    <v-card class="mx-auto" width="40rem">
        <v-toolbar dark color="primary">
        <v-toolbar-title>{{isRegister ? stateObj.register.name : stateObj.login.name}} Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
        <form ref="form" @submit.prevent="isRegister ? register() : login()">
            <v-text-field
                v-model="username"
                name="username"
                label="Username"
                type="text"
                placeholder="Username"
                required
            ></v-text-field>
            
            <v-text-field
                v-model="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                required
            ></v-text-field>

            <v-text-field v-if="isRegister"
                v-model="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                required
            ></v-text-field>
            <div class="red--text"> {{errorMessage}}</div>
            <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
            <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                {{toggleMessage}}  
            </div>
        </form>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      isRegister : false,
      errorMessage: "",
      stateObj: {
         register :{
            name: 'Register',
            message: 'Aleady have an Acoount? Login'
         },
         login : {
            name: 'Login',
            message: 'Don\'t have an account ? Register'
         }
      }
    };
  },
  methods: {
    login() {
      
    },
    register() {
       if(this.password == this.confirmPassword){
          this.isRegister = false;
          this.errorMessage = "";
          this.$refs.form.reset();
       }
       else {
         this.errorMessage = "Password did not match"
       }
    }
  },
  computed: {
    toggleMessage : function() { 
      return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
  }
};
</script>