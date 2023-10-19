<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['search']);
</script>

<template>
    <form class="search-container">
        <input class="search-input" type="text" placeholder="Search" @input="(e) => emit('search', e.target.value)"/>
        <button class="search-button-container">
            <img src="../assets/searchIcon.svg" class="search-button" />
        </button>
    </form>
</template>

<style scoped>
    .search-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #1b1d22;
        padding: 4px;
        border-radius: 12px 50px 50px 12px;
    }

    .search-input {
        flex-grow: 1;
        width: 100%;
        height: 36px;
        background: #1b1d22;
        border: none;
        color: #d3d3d3;
        font-size: 16px;
        font-weight: 600;
    }

    .search-input::placeholder {
        color: #d3d3d3;
    }

    .search-input:focus {
        outline: none;
    }

    .search-button-container {
        width: 32px;
        height: 32px;
        background: #22242c;
        border-radius: 100%;
        margin-right: 4px;
        outline: none;
        border: none;
    }
    .search-button {
        width: 18px;
        height: 18px;
        filter: invert(100%) sepia(100%) saturate(22%) hue-rotate(340deg) brightness(106%) contrast(106%);
    }
</style>