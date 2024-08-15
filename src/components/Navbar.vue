<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style="background-color: #faedcd;">
            <RouterLink class="navbar-brand" to="/">Hazem Products</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :class="['nav-link', isActiveLink('/') ? 'active' : '']" aria-current="page" to="/">
                            All Products</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :class="['nav-link', isActiveLink('/create-update-product') ? 'active' : '']"
                            to="/create-update-product">Create / Update Product</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>