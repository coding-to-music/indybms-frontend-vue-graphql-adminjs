import { defineStore } from "pinia";
import { executeQuery } from "../utils/graphql.js";
import axios from "axios";
import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: useLocalStorage("indybms-token", null),
    id: useLocalStorage("indybms-user-id", null),
    user: null,
    registeredEvents: [],
    createdEvents: [],
    error: null,
    isFetching: false,
  }),
  getters: {
    getAllUserEvents: (state) => [
      ...state.createdEvents,
      ...state.registeredEvents,
    ],
  },
  actions: {
    async getUser(id) {
      this.isFetching = true;
      const query = `
      query($id: String!) {
        user(id: $id) {
          id
          name
          privilege
        }
      }
      `;
      const { data, error } = await executeQuery(query, { id: id });
      this.error = error;
      this.user = data.user;
      this.isFetching = false;
    },
    async getUserEvents() {
      this.isFetching = true;
      const query = `
      query($id: String!) {
        user(id: $id) {
          registeredEvents {
            id
            title
            coverImage
            date
          }
          createdEvents {
            id
            title
            date
          }
        }
      }
      `;
      const { data, error } = await executeQuery(query, { id: this.id });
      this.error = error;
      let { registeredEvents, createdEvents } = data.user;
      this.createdEvents = createdEvents;
      this.registeredEvents = registeredEvents;
      this.isFetching = false;
    },
    async loginUser(email, password) {
      this.isFetching = true;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          user: {
            email: email,
            password: password,
          },
        }
      );
      const { id, token } = result.data;
      this.id = id;
      this.token = token;
      this.isFetching = false;
      this.router.replace("/");
    },
    async registerUser(name, phone, email, password) {
      this.isFetching = true;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/register`,
        {
          user: {
            name: name,
            phone: phone,
            email: email,
            password: password,
          },
        }
      );
      const { id, token } = result.data;
      this.id = id;
      this.token = token;
      this.isFetching = false;
      this.router.replace("/");
    },
    logoutUser() {
      this.isFetching = true;
      this.id = null;
      this.token = null;
      this.user = null;
      this.isFetching = false;
      this.router.replace("/");
    },
  },
});
