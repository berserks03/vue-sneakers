<script setup lang="ts">
import type{ Item } from '../types';
import Card from './Card.vue'

defineProps<{
    items: Item[],
    isFavorites: boolean
}>()

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<template>
    <div class="grid grid-cols-4 gap-5" v-auto-animate>
        <Card
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :imageUrl="item.imageUrl"
            :price="item.price"
            :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
            :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
            :isFavorite="item.isFavorite"
            :isAdded="item.isAdded"
        />
    </div>
</template>
