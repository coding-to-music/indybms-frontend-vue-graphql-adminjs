import { defineStore } from "pinia";
import { executeQuery } from "../utils/graphql.js";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [],
    isFetching: false,
    error: null,
  }),
  getters: {},
  actions: {
    async getAllCategories() {
      this.isFetching = true;
      const query = `
      query {
        allCategories {
          id
          name
          image
        }
      }
      `;
      const { data, error } = await executeQuery(query, {});
      this.error = error;
      this.categories = data.allCategories;
      this.isFetching = false;
    },
  },
});
