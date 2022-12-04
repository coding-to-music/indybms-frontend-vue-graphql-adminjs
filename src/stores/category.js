import { defineStore } from "pinia";
import { executeQuery } from "../utils/graphql.js";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [],
    currentCategory: null,
    categoryEvents: [],
    isFetching: false,
    error: null,
  }),
  getters: {
    getCurrentCategory: (state) =>
      state.categories.find((c) => c.id == state.currentCategory),
  },
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
    async getCategoryEvents(id) {
      this.isFetching = true;
      const query = `
      query($categoryId: String!) {
        categoryEvents(categoryId: $categoryId) {
          id
          title
          coverImage
          status
        }
      }
      `;
      const { data, error } = await executeQuery(query, { categoryId: id });
      this.error = error;
      this.categoryEvents = data.categoryEvents;
      this.currentCategory = id;
      this.isFetching = false;
    },
  },
});
