<script setup>
import { ref } from 'vue';


const productName = ref('');
const productPrice = ref('');
const productDescription = ref('');
const productImage = ref('');

const addProduct = () => {

};
</script>

<template>
    <h1 style="text-align: center;">Create Product</h1>

    <form @submit.prevent="addProduct" class="row g-3" style="max-width: 60%; margin: 0 auto;">
        <div class="col-md-6">
            <label for="product name" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="product name" v-model="productName">
        </div>
        <div class="col-md-6">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" v-model="productPrice">
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
            <button type="submit" class="btn btn-primary">Create Product</button>
        </div>
    </form>
</template>