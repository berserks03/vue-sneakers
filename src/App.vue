<script setup lang="ts">
import { ref, provide, watch, computed } from 'vue'

import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
import { CartKey, type Item } from './types';

/* Корзина (START) */
const cart = ref<Item[]>([])
const drawerOpen = ref<boolean>(false)

const totalPrice = computed(():number => cart.value.reduce((acc, item) => acc + item.price, 0))
const vatPrice = computed(():number => Math.round((totalPrice.value * 5) / 100))

const closeDrawer = ():void => {
    drawerOpen.value = false
}

const openDrawer = ():void => {
    drawerOpen.value = true
}

const addToCart = (item: Item):void => {
    cart.value.push(item)
    item.isAdded = true
}

const removeFromCart = (item:Item):void => {
    cart.value.splice(cart.value.indexOf(item), 1)
    item.isAdded = false
}

watch(
    cart,
    () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    },
    { deep: true }
)

provide(CartKey, {
    cart,
    closeDrawer,
    openDrawer,
    addToCart,
    removeFromCart
})

/* Корзина (END) */
</script>

<template>
    <Drawer v-if="drawerOpen" :total-price="totalPrice" :vat-price="vatPrice" />

    <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
        <Header :total-price="totalPrice" @open-drawer="openDrawer" />

        <div class="p-10">
            <router-view></router-view>
        </div>
    </div>
</template>
