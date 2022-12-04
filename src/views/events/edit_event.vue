<template>
  <div>
    <v-card variant="flat" class="w-full mx-4 my-4">
      <v-card-title class="font-weight-bold my-2 text-center">Edit Event</v-card-title>
      <v-card-text>
        <v-form v-model="isFormValid">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field variant="outlined" v-model="title" label="Event Title"
                :rules="[rules.required]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field variant="outlined" min="1" v-model="maxAllowedRegistrations"
                label="Maximum Allowed Registrations" type="number"
                :rules="[rules.required, rules.minRegistrations]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-textarea rows="5" variant="outlined" v-model="description" label="Event Description"
                :rules="[rules.required]"></v-textarea>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <Datepicker class="datepicker" v-model="date" placeholder="Event Date" format="dd-MMM-yyyy"
                :enable-time-picker="false" :min-date="new Date()" input-class-name="dp-input" required />
              <v-text-field variant="outlined" v-model="registrationFee" label="Registration Fee" type="number"
                :rules="[rules.required]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-autocomplete v-model="category" label="Category" :items="categoryStore.categories" item-title="name"
                item-value="id" return-object :rules="[rules.required]"></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field variant="outlined" v-model="location" label="Location"
                :rules="[rules.required]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-file-input show-size chips label="Cover Image" v-model="coverImageFile"
                :rules="[rules.required]"></v-file-input>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-file-input show-size chips multiple label="Gallery" v-model="galleryFiles"
                :rules="[rules.required]"></v-file-input>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-checkbox v-model="ageRestriction" label="ID Required"></v-checkbox>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-block ml-auto my-3" cols="12" sm="3" xsm="12">
              <v-btn size="large" :disabled="!isFormValid" x-large block color="indigo" @click.prevent="editEvent">Add
                Event</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useCategoryStore } from "../../stores/category";
import { useEventStore } from "../../stores/event";
const categoryStore = useCategoryStore();
const eventStore = useEventStore();
categoryStore.getAllCategories();
eventStore.prepareEditMutation()
</script>

<script>
export default {
  name: 'add_event',
  methods: {
    // async uploadCoverImage() {
    //   let formData = new FormData();
    //   formData.append('coverImage', this.coverImageFile[0], this.coverImageFile[0].name);
    //   const result = await this.eventStore.uploadSingleImage(formData, this.userStore.token);
    //   this.coverImage = result.data.url;
    // },
    // async uploadGalleryImages() {
    //   let formData = new FormData();
    //   for (let file of this.galleryFiles) {
    //     formData.append("gallery", file, file.name);
    //   }
    //   const result = await this.eventStore.uploadMultipleImages(formData, this.userStore.token);
    //   this.gallery = result.data.urls;
    // },
    async editEvent() {
      // await this.uploadCoverImage();
      // await this.uploadGalleryImages();
      let event = {
        'id': this.$route.params.id,
        'title': this.title,
        'description': this.description,
        'date': this.date,
        'location': this.location,
        'ageRestriction': this.ageRestriction,
        'status': this.status,
        'maxAllowedRegistrations': parseInt(this.maxAllowedRegistrations.toString()),
        'category': this.category.id,
        'registrationFee': parseFloat(this.registrationFee.toString()),
      }
      await this.eventStore.editEvent(event)
    },
  },
  data: () => ({
    isFormValid: false,
    isLoading: false,
    title: "",
    description: "",
    date: "",
    location: "",
    coverImage: "",
    coverImageFile: [],
    gallery: [],
    galleryFiles: [],
    ageRestriction: false,
    maxAllowedRegistrations: 1,
    category: "",
    registrationFee: 0.0,
    status: "",
    allowedStatus: [],
    rules: {
      required: value => !!value || "Required",
      minRegistrations: value => !!value && value >= 1 || "Required and value should be 1 or more",
    },
  }),
}
</script>

<style lang="scss">
.datepicker {
  margin-bottom: 2.5rem;
}

.dp-input {
  line-height: 125%;
  height: 3.25rem;
}
</style>