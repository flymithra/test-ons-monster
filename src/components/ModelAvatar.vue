<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        image: String,
        notifications: Number,
        disabled: Boolean
    })
</script>

<template>
    <div class="avatar-container"> 
        <div v-show="props.disabled" class="avatar-overlay"/>
        <img class="avatar-image" :src="props.image" alt="">
        <span class="avatar-notifications" v-if="props.notifications > 0 && !props.disabled">{{ props.notifications }}</span>
    </div>
</template>

<style scoped> 
    .avatar-container {
        position: relative;
        display: flex;
        width: 50px;
        height: 50px;
    }

    .avatar-overlay {
        position: absolute;
        border-radius: 100%;
        height: 100%;
        width: 100%;
        background: black;
        opacity: 60%;
    }

    .avatar-image {
        width: 100%;
        border-radius: 100%;
    }

    .avatar-notifications {
        position: absolute;
        right: 0;
        bottom: -8px;
        padding: 4px;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        background: #47a1d9;
        border-radius: 4px;
    }
</style>