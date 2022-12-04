import { defineStore } from "pinia";
import { executeQuery } from "../utils/graphql.js";

export const useEventStore = defineStore({
  id: "event",
  state: () => ({
    events: [],
    isFetching: false,
    error: null,
  }),
  getters: {},
  actions: {
    async getAllEvents() {
      this.isFetching = true;
      const query = `
      query {
        allEvents {
          id
          title
          coverImage
          status
        }
      }
      `;
      const { data, error } = await executeQuery(query, {});
      this.error = error;
      this.events = data.allEvents;
      this.isFetching = false;
    },
    async searchEvents(term) {
      this.isFetching = true;
      const query = `
      query($searchTerm: String!) {
        searchEvents(searchTerm: $searchTerm) {
          id
          title
          coverImage
          status
        }
      }
      `;
      const { data, error } = await executeQuery(query, { searchTerm: term });
      this.error = error;
      this.events = data.searchEvents;
      this.isFetching = false;
    },
  },
});
