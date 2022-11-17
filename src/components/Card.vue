<template>
    <v-card :to="'/event/'+ id">
        <v-img :src="srcImg" cover></v-img>
        <v-card-title class="text-center">
            {{ name }}
        </v-card-title>
    </v-card>
</template>
<script>
export default {
    name: 'card',
    props: {
        name: String,
        srcImg: String,
        id: String,
    },
}
</script>
<style scoped>

</style>