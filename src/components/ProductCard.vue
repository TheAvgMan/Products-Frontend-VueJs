<script setup>
import { defineProps } from 'vue';
import axios from 'axios';

defineProps({
    product: Object
});

const deleteProduct = (productID) => {
    try {
        axios.delete('http://localhost:8080/api/products/' + productID);
    } catch (error) {
        console.error('Error fetching products data', error);
    }
}
</script>

<template>
    <div class="card mb-3" style="max-width: 400px; min-width: 400px; background-color: #e9edc9;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="product.image" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <RouterLink to="/create-update-product" class="btn"
                        style="background-color: #ccd5ae; margin-right: 40px;">Update</RouterLink>
                    <a @click="deleteProduct(product.id)" class="btn" style="background-color: #ccd5ae;">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>