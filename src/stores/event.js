import { defineStore } from "pinia";
import { executeQuery, executeMutation } from "../utils/graphql.js";
import axios from "axios";
import { useMutation } from "@urql/vue";

export const useEventStore = defineStore({
  id: "event",
  state: () => ({
    events: [],
    isFetching: false,
    error: null,
    mutationObj: null,
    event: null,
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
    async getEvent(id) {
      this.isFetching = true;
      const query = `
      query($id: String!) {
        event(id: $id) {
          id
          title
          description
          date
          location
          coverImage
          gallery
          ageRestriction
          maxAllowedRegistrations
          status
          category {
            id
            name
          }
          registrationFee
          owner {
            id
            name
            email
            phone
          }
          createdAt
          updatedAt
        }
      }
      `;
      const { data, error } = await executeQuery(query, { id: id });
      this.error = error;
      this.event = data.event;
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
    async uploadSingleImage(formData, token) {
      this.isFetching = true;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload/single`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.isFetching = false;
      return result;
    },
    async uploadMultipleImages(formData, token) {
      this.isFetching = true;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload/multiple`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.isFetching = false;
      return result;
    },
    prepareMutation() {
      const mutation = `
      mutation($title: String!, $description: String!, $date: String!, $location: String!, $coverImage: String!, $gallery: [String]!, $ageRestriction: Boolean, $maxAllowedRegistrations: Int!, $category: String!, $registrationFee: Float) {
        createEvent(event: { title: $title, description: $description, date: $date, location: $location, coverImage: $coverImage, gallery: $gallery, ageRestriction: $ageRestriction, maxAllowedRegistrations: $maxAllowedRegistrations, category: $category, registrationFee: $registrationFee }) {
          id
          title
          createdAt
        }
    }
      `;
      const mutationObj = useMutation(mutation);
      this.mutationObj = mutationObj;
    },
    prepareEditMutation() {
      const mutation = `
      mutation($id: String!, $title: String, $description: String, $date: String, $location: String!, $coverImage: String, $gallery: [String], $ageRestriction: Boolean, $maxAllowedRegistrations: Int, $category: String, $registrationFee: Float, $status: String) {
        updateEvent(event: { id: $id, title: $title, description: $description, date: $date, location: $location, coverImage: $coverImage, gallery: $gallery, ageRestriction: $ageRestriction, maxAllowedRegistrations: $maxAllowedRegistrations, category: $category, registrationFee: $registrationFee, status: $status }) {
            id
            title
            createdAt
            updatedAt
        }
    }
      `;
      const mutationObj = useMutation(mutation);
      this.mutationObj = mutationObj;
    },
    async createEvent(event) {
      this.isFetching = true;
      const { data, error } = await executeMutation(this.mutationObj, {
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        coverImage: event.coverImage,
        gallery: event.gallery,
        ageRestriction: event.ageRestriction,
        maxAllowedRegistrations: event.maxAllowedRegistrations,
        category: event.category,
        registrationFee: event.registrationFee,
      });
      this.error = error;
      this.isFetching = false;
      this.router.push("/");
    },
    async editEvent(event) {
      this.isFetching = true;
      const { data, error } = await executeMutation(this.mutationObj, {
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        ageRestriction: event.ageRestriction,
        maxAllowedRegistrations: event.maxAllowedRegistrations,
        category: event.category,
        registrationFee: event.registrationFee,
        status: event.status,
      });
      this.error = error;
      this.isFetching = false;
      this.router.push("/");
    },
  },
});
