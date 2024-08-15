<script setup>
import { ref, onMounted, onBeforeUpdate } from 'vue';
import axios from 'axios';
import ProductCard from './ProductCard.vue';

const products = ref([]);
const currentPage = ref(1);

const changePage = (event) => {
    if (event.target.textContent === "Previous" && currentPage.value !== 1) {
        currentPage.value--;
    } else if (event.target.textContent === "Next") {
        currentPage.value++;
    } else if (event.target.textContent !== "Previous") {
        currentPage.value = parseInt(event.target.textContent);
    }
};

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/products/page/' + currentPage.value);
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products data', error);
    }
});

onBeforeUpdate(async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/products/page/' + currentPage.value);
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products data', error);
    }
});

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
            <li @click="changePage($event)" class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li @click="changePage($event)" class="page-item"><a class="page-link" href="#">1</a></li>
            <li @click="changePage($event)" class="page-item"><a class="page-link" href="#">2</a></li>
            <li @click="changePage($event)" class="page-item"><a class="page-link" href="#">3</a></li>
            <li @click="changePage($event)" class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>