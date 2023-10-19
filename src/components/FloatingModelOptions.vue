<script setup>
import ModelAvatar from './ModelAvatar.vue';
import { defineProps, ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps(['model', 'modalPosition'])
const emit = defineEmits(['hide'])
const modal = ref(null)

onClickOutside(modal, () => {
    emit('hide')
});

</script>

<template>
    <Teleport to="body">
        <div v-if="props.model"
            ref="modal"
            class="floating-panel" 
            :style="{top: props.modalPosition.y+'px', left: props.modalPosition.x + 'px' }"
        >
            <div class="info">
                <ModelAvatar :image="model.image" :disabled="model.disabled"/>

                <span class="model-name">{{model.name}}</span>
                <span class="model-group">{{model.group}}</span>
                <span class="model-description">{{model.description}}</span>
            </div>

            <div class="floating-panel-actions">
                <div class="action">
                    <font-awesome-icon icon="user" />
                    <span>Profile</span>
                </div>
                <div class="action">
                    <font-awesome-icon class="icon" icon="message" />
                    <span>Messages</span>
                </div>
                <div class="action">
                    <font-awesome-icon icon="gear" />
                    <span>Settings</span>
                </div>
                <div class="action">
                    <font-awesome-icon icon="pen" />
                    <span>Pin</span>
                </div>
                <div class="action">
                    <font-awesome-icon icon="plus" />
                    <span>Open in new window</span>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.floating-panel {
    background: #22242c;
    position: absolute;
    box-shadow: 0 0 3px #3b3f4d;
    font-size: 18px;
    color: #fff;
}

.info {
    display: flex;
    flex-direction: column;
    padding: 12px;
}

.model-name {
    margin-top:4px;
    font-weight: bold;
}

.model-group {
    font-size:14px;
}

.model-description {
    margin-top: 4px;
}

.floating-panel-actions {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
}

.action > :first-child {
    margin-left: 12px;
}

.action {
    padding: 8px 0 8px 0;
    cursor: pointer;
}

.action span {
    margin-right: 12px;
    margin-left: 12px;
}

.action:hover {
    background: #17191e;
}
</style>