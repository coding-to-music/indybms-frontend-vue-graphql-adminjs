<template>
  <div class="mx-4 my-4">
    <v-row v-if="eventStore.event">
      <v-col cols="12" md="4">
        <v-img :src="eventStore.event.coverImage"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-h4">{{ eventStore.event.title }}</h1>
        <p class="text-body-1"> <strong>Date:</strong>
          {{ moment(parseInt(eventStore.event.date)).format('dddd, DD MMMM YYYY') }}</p>
        <p class="text-body-1"> <strong>Location:</strong> {{ eventStore.event.location }}</p>
        <p class="text-body-1"> <strong>Maximum Allowed Registrations:</strong> {{
            eventStore.event.maxAllowedRegistrations
        }}</p>
        <p class="text-body-1"> <strong>Registration Fee:</strong> ${{ eventStore.event.registrationFee }}</p>
        <p class="text-body-1"> <strong>ID Required:</strong> {{ eventStore.event.ageRestriction ? 'Yes' : 'No' }}</p>
      </v-col>
      <v-col cols="12" md="2">
        <v-btn color="indigo" variant="flat" size="large" to="#">
          Register For Event
        </v-btn>
      </v-col>
    </v-row>
    <br>
    <v-card flat>
      <v-tabs v-model="tab" bg-color="transparent" color="indigo" grow>
        <v-tab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="Description">
          <v-row class="my-4">
            <v-col class="text-body-1 text-justify" cols="12">
              {{ eventStore.event.description }}
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="Gallery">
          <v-row class="my-4">
            <v-col v-for="image in eventStore.event.gallery" :key="image" :value="image" cols="12" md="4">
              <v-img :src="image"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="More Details">
          <v-row class="my-4 text-center">
            <v-col cols="12" md="6">
              <h1 class="text-subtitle-1 font-weight-bold">Event Owner Information</h1>
              <p class="text-body-1"> {{ eventStore.event.owner.name }} </p>
              <p class="text-body-1"> {{ eventStore.event.owner.email }} </p>
              <p class="text-body-1"> {{ eventStore.event.owner.phone }} </p>
            </v-col>
            <v-col cols="12" md="6">
              <h1 class="text-subtitle-1 font-weight-bold">Event Category</h1>
              <p class="text-body-1"> {{ eventStore.event.category.name }} </p>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script setup>
import { useEventStore } from "../../stores/event";
const eventStore = useEventStore();
</script>

<script>
import moment from 'moment';

export default {
  name: 'event_details',
  mounted() {
    this.eventStore.getEvent(this.$route.params.id);
  },
  data() {
    return {
      tab: 'Description',
      items: [
        'Description', 'Gallery', 'More Details'
      ],
    }
  },
}
</script>
<style scoped>

</style>