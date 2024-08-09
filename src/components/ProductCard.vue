<script setup>
import { defineProps } from 'vue';

defineProps({
    product: Object
});
</script>

<template>
    <div class="card mb-3" style="max-width: 500px; background-color: #e9edc9;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="product.imgUrl" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </p>
                    <a href="#" class="btn" style="background-color: #ccd5ae;">Check Out</a>
                </div>
            </div>
        </div>
    </div>
</template>