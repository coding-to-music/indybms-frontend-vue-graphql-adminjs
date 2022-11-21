<script setup>

</script>

<template>
    <div>
        <v-card>
            <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="primary"
            grow
            >
            <v-tab
                v-for="item in items"
                :key="item"
                :value="item"
            >
                {{ item }}
            </v-tab>
            </v-tabs>

            <v-window v-model="tab">
            <v-window-item
                v-for="item in items"
                :key="item"
                :value="item"
            >
                <Pagination/>
            </v-window-item>
            </v-window>
        </v-card>
    </div>

</template>

<script>
    import Pagination from '../components/Pagination.vue'
    export default {
        name: 'myevents',
        components: {
            Pagination
        },
        data () {
            return {
                tab: 'Upcoming',
                items: [
                'Upcoming', 'In Progress', 'Completed',
                ],
            }
        },
    }
</script>

<style scoped>
</style>