<script setup>
    import { defineProps, ref } from 'vue';
    import ModelAvatar from './ModelAvatar.vue';
    import FloatingModelOptions from './FloatingModelOptions.vue';

    const props = defineProps({
        models: Array,
        collapsed: Boolean
    });
    
    const selectedModel = ref(null);
    const modalPosition = ref({x: 0, y: 0});

    const onHandleClick = (event, model) => {
        selectedModel.value = model
        modalPosition.value = { x: event.x, y: event.y }
    }
</script>

<template>
<div class="side-menu-list-container">
    <div v-for="model in props.models"
        :key="model.id"
        :class="['side-menu-list-item', {itemActive: model.id === selectedModel?.id}]"
        @click="(e) => onHandleClick(e, model)"
    >
        <ModelAvatar :image="model.image" :disabled="model.disabled" :notifications="model.notifications"/>

        <div v-if="!props.collapsed" class="additional-info">
            <span class="model-name">{{model.name}}</span>
            <span class="group-name">{{model.group}}</span>
        </div>
    </div>
    <floating-model-options :model="selectedModel" :modal-position="modalPosition" @hide="selectedModel=null"/>
</div>
</template>

<style scoped>
    .side-menu-list-container {
        margin-top: 9px;
    }
    .additional-info {
        margin-left: 8px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .side-menu-list-item {
        display: flex;
        padding: 9px 0px 9px 9px;
        cursor: pointer;
        min-width: 200px;
    }

    .side-menu-list-item:hover {
        background: #2d2f37;
    }

    .itemActive {
        background: #2d2f37;
    }

    .model-name {
        font-weight: bold;
    }

    .group-name {
        font-size: 14px;
        color: #6d6f73;
    }
</style>