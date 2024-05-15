import { InjectionKey, Ref } from 'vue'

export interface Item {
    id: number
    title: string
    price: number
    imageUrl: string
    isFavorite?: boolean
    favoriteId?: number | null
    isAdded?: boolean
}

export interface Card extends Item {
    onClickFavorite: () => void
    onClickAdd: () => void
}

export interface Cart {
    cart: Ref<Item[]>
    closeDrawer: () => void
    openDrawer: () => void
    addToCart: (item: Item) => void
    removeFromCart: (item: Item) => void
}

export interface Favorite {
    itemId: number
    id: number
}

export interface Filter {
    sortBy: string
    searchQuery: string
}

export const CartKey: InjectionKey<Cart> = Symbol('cart')
