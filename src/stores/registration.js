import { defineStore } from "pinia";
import { executeMutation } from "../utils/graphql.js";
import { useMutation } from "@urql/vue";

export const useRegistrationStore = defineStore({
  id: "registration",
  state: () => ({
    isDialogOpen: false,
    mutationObj: null,
    isFetching: false,
    error: null,
  }),
  getters: {},
  actions: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
    prepareMutation() {
      const mutation = `
      mutation($name: String!, $email: String!, $phone: String!, $user: String, $event: String!) {
        registerForEvent(registration: { name: $name, email: $email, phone: $phone, user: $user, event: $event }) {
          id
          createdAt
          updatedAt
        }
      }
      `;
      const mutationObj = useMutation(mutation);
      this.mutationObj = mutationObj;
    },
    async registerForEvent(registration) {
      this.isFetching = true;
      let _error = null;
      let _data = null;
      if (registration.user) {
        let { data, error } = await executeMutation(this.mutationObj, {
          name: registration.name,
          phone: registration.phone,
          email: registration.email,
          user: registration.user,
          event: registration.event,
        });
        _error = error;
        _data = data;
      } else {
        let { data, error } = await executeMutation(this.mutationObj, {
          name: registration.name,
          phone: registration.phone,
          email: registration.email,
          event: registration.event,
        });
        _error = error;
        _data = data;
      }
      this.error = _error;
      this.isDialogOpen = false;
      this.isFetching = false;
    },
  },
});
