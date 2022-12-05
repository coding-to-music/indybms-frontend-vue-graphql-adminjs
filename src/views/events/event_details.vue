<template>
  <div v-if="eventStore.event" class="mx-4 my-4">
    <v-row>
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
        <v-row>
          <v-col cols="12">
            <v-btn v-if="!isOwner" color="indigo" variant="flat" size="large"
              @click.prevent="registrationStore.openDialog">
              Register For Event
            </v-btn>
            <Register :id="eventStore.event.id" :event="eventStore.event.title" />
          </v-col>
          <v-col cols="12" v-if="isOwner">
            <v-btn color="indigo" variant="flat" size="large" :to="('/events/' + eventStore.event.id + '/edit')">
              Edit Event
            </v-btn>
          </v-col>
        </v-row>
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
import { useUserStore } from "../../stores/user";
import { useRegistrationStore } from "../../stores/registration";
const eventStore = useEventStore();
const userStore = useUserStore();
const registrationStore = useRegistrationStore();
if (userStore.token) {
  userStore.getUser(userStore.id)
}
</script>

<script>
import moment from 'moment';
import Register from './register_for_event.vue'

export default {
  name: 'event_details',
  mounted() {
    this.eventStore.getEvent(this.$route.params.id);
  },
  components: {
    Register,
  },
  data() {
    return {
      tab: 'Description',
      items: [
        'Description', 'Gallery', 'More Details'
      ],
    }
  },
  computed: {
    isOwner() {
      if (this.eventStore.event && this.userStore.id && this.eventStore.event.owner.id.normalize() === this.userStore.id.normalize()) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>
<style scoped>

</style>