<script setup>
</script>

<template>
    <div>
        <v-card-text class="pt-8 w-50 mx-auto">
            <v-text-field class="w-auto" :loading="loading" density="compact" variant="solo"
                label="Start searching for your favourite events" append-inner-icon="fa:fas fa-search" single-line
                hide-details @click:append-inner="onClick">
            </v-text-field>
        </v-card-text>
    </div>
</template>

<script>
export default {
    name: 'searchbar',
    data: () => ({
      loaded: false,
      loading: false,
    }),
    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
</script>

<style>
</style>

