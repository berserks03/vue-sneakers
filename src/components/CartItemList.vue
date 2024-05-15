<script setup lang="ts">
import { inject } from 'vue'
import CartItem from './CartItem.vue'
import { type Cart, CartKey } from '../types';

const foo = inject(CartKey) as Cart
</script>

<template>
    <div class="flex flex-col flex-1 gap-4 justify-between" v-auto-animate>
        <CartItem
            v-for="item in cart"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :image-url="item.imageUrl"
            @on-click-remove="() => removeFromCart(item)"
        />
    </div>
</template>
