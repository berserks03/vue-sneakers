<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'
import type { Favorite } from '../types';

const favorites = ref<Favorite[]>([])

onMounted(async () => {
    try {
        const { data } = await axios.get(
            'https://604781a0efa572c1.mokky.dev/favorites?_relations=items'
        )

        favorites.value = data.map((obj) => obj.item)
    } catch (err) {
        console.log(err)
    }
})
</script>

<template>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

    <CardList :items="favorites" is-favorites />
</template>
