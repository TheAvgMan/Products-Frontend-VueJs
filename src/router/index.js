import { createRouter, createWebHistory } from "vue-router";
import AllProducts from "@/components/AllProducts.vue";
import CreateProduct from "@/components/CreateProduct.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'all-products',
            component: AllProducts
        },
        {
            path: '/create-product',
            name: 'create-product',
            component: CreateProduct
        }
    ]
});

export default router;
