<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';
import productsData from '@/dummyProducts.json';

const products = ref(productsData);
</script>

<template>
    <h1 style="text-align: center; margin-bottom: 40px;">All Products</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div style="margin-left: 10px; margin-right: 5px; max-width: 440px;" class="col d-flex justify-content-center"
            v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>

    <nav aria-label="Page navigation example" class="d-flex justify-content-center" style="margin-top: 20px;">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>