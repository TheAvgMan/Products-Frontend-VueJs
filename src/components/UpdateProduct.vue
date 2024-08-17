<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const productID = route.params.productID;

const productName = ref('');
const productPrice = ref(1);
const productDescription = ref('');
const productImage = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/products/product/' + productID);
        productName.value = response.data.name;
        productPrice.value = response.data.price;
        productDescription.value = response.data.description;
        productImage.value = response.data.image;

    } catch (error) {
        console.error('Error fetching products data', error);
    }
});

const router = useRouter();

const updateProduct = () => {
    axios.put('http://localhost:8080/api/products/' + productID, {
        name: productName.value,
        description: productDescription.value,
        price: productPrice.value,
        image: productImage.value
    });

    router.push({ name: 'all-products' });
};
</script>

<template>
    <h1 style="text-align: center;">Update Product</h1>

    <form @submit.prevent="updateProduct" class="row g-3" style="max-width: 60%; margin: 0 auto;">
        <div class="col-md-6">
            <label for="product name" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="product name" v-model="productName">
        </div>
        <div class="col-md-6">
            <label for="price" class="form-label">Price</label>
            <input type="number" step="0.01" class="form-control" id="price" v-model="productPrice">
        </div>
        <div class="col-12">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" v-model="productDescription">
        </div>
        <div class="col-12">
            <label for="imageLink" class="form-label">Image Link</label>
            <input type="text" class="form-control" id="imageLink" v-model="productImage">
        </div>
        <div class="col-12" style="text-align: center;">
            <button type="submit" class="btn btn-primary">
                Update Product
            </button>
        </div>
    </form>
</template>