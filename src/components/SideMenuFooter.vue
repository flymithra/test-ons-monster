<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        collapsed: Boolean
    })
</script>

<template>
    <div class="footer-container">
        <img class="footer-image" src="../assets/logo.png"/>
        <div v-if="!props.collapsed" class="footer-additional-info">
            <span class="agency-name">Agency name</span>
            <span class="user-name">Arthur Kuznetsov</span>
        </div>
    
        <img v-if="!props.collapsed" class="download-button" src="../assets/downloadButton.svg" />
    </div>
</template>

<style scoped>
    .footer-container {
        display: flex;
        align-items: center;
        padding: 9px 0px 9px 9px;
        cursor: pointer;
        background: #1f2028;
    }

    .footer-image {
        width: 50px;
        height: 50px;
    }
    .footer-additional-info {
        display: flex;
        flex-grow: 1;
        margin-left: 8px;
        color: #fff;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-width: 180px;
    }

    .agency-name {
        font-weight: bold;
    }

    .user-name {
        font-size: 14px;
        color: #6d6f73;
    }

    .download-button {
        width: 32px;
        height: 32px;
        margin-right: 9px;
        filter: invert(100%) sepia(100%) saturate(22%) hue-rotate(340deg) brightness(106%) contrast(106%);
    }
</style>