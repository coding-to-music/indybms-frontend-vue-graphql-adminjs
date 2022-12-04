<template>
  <v-container fill-height class="my-4">
    <v-tabs v-model="tab" bg-color="transparent" color="indigo" grow>
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="Upcoming">
        <ListView :items="events.upcoming" />
      </v-window-item>
      <v-window-item value="In Progress">
        <ListView :items="events.in_progress" />
      </v-window-item>
      <v-window-item value="Completed">
        <ListView :items="events.completed" />
      </v-window-item>
    </v-window>
  </v-container>

</template>

<script setup>
import { useUserStore } from "../../stores/user";
const userStore = useUserStore();
userStore.getUserEvents();
</script>

<script>
import ListView from '../../components/event_list_view.vue'
import moment from 'moment';
export default {
  name: 'my_events',
  components: {
    ListView
  },
  computed: {
    events() {
      let upcoming = [];
      let in_progress = [];
      let completed = [];
      this.userStore.getAllUserEvents.forEach((e) => {
        if (moment(e.date).isBefore(Date.now(), 'day')) {
          completed.push(e)
        } else if (moment(e.date).isSame(Date.now(), 'day')) {
          in_progress.push(e)
        } else {
          upcoming.push(e)
        }
      })
      return { upcoming, in_progress, completed }
    },
  },
  data() {
    return {
      tab: 'Upcoming',
      items: [
        'Upcoming', 'In Progress', 'Completed',
      ],
    }
  },
}
</script>