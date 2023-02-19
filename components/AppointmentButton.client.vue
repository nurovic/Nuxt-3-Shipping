<template>
    <label 
    class="bg-gray-200 px-4 py-2 rounded"
    :class="{
            'bg-green-400':
            modelValue,
            'bg-gray-200':
            !modelValue
        }">
        <input type="checkbox"
        :value="modelValue"
        @input="() => $emit('update:modelValue', !modelValue)"
        class="hidden"
        />
        {{ modelValue ? 'Appointment' : 'Mark as Appointment' }}
    </label>
</template>
<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

defineEmits(['update:modelValue'])
</script>
<style scoped>
    ::selection {
        display: none;
    }
</style>