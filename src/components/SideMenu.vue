<script setup>
import { ref, computed } from 'vue';
import models from '@/models';
import SideMenuSearch from './SideMenuSearch.vue';
import SideMenuList from './SideMenuList.vue';
import SideMenuFooter from './SideMenuFooter.vue'

const search = (value) => inputSearch.value = value;

const isCollapsed = ref(false);
const inputSearch = ref('');

const filteredModels = computed(() => models.filter(
    (item) => item.name.toLowerCase().includes(inputSearch.value.toLowerCase())
))
</script>

<template>
    <div :class="['container', {'container-collapsed': isCollapsed}]">
        <div class="header">
            <img class="logo" src="../assets/onfs.png" @click ="() => isCollapsed = !isCollapsed" />
            <SideMenuSearch v-if="!isCollapsed" @search="search"/>
        </div>
        <SideMenuList class="list" :models="filteredModels" :collapsed="isCollapsed"/>
        <SideMenuFooter class="footer" :collapsed="isCollapsed"/>
    </div>
</template>

<style scoped>
    .header {
        margin-top: 9px;
        display: flex;
        align-items: center;
        margin-left: 9px;
    }
    .logo {
        cursor: pointer;
        width: 50px;
        height: 50px;
    }
    .container {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: #22242c;
        height: 100%;
        width: 300px;
        transition: width 0.1s;
    }

    .container-collapsed {
        width: 66px;
    }

    .list {
        flex-grow: 1;
    }

    .footer {
        position: sticky;
    }
</style>