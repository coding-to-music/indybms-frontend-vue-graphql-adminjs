<script setup>

</script>

<template>
    <div>
        <div class="title">
            <v-subheader>{{ category }}</v-subheader>
        </div>
        <SearchBar/>
        <Pagination/>
    </div>

</template>

<script>
    import SearchBar from '../components/SearchBar.vue'
    import Pagination from '../components/Pagination.vue'
    export default {
        name: 'events',
        components: {
            SearchBar,
            Pagination
        },
        data: () =>({
            category: "Movies"
        })
    }
</script>

<style scoped>
.title{
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
}
</style>