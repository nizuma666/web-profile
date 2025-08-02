<script setup>
defineProps({
    bgColor: {
        type: String,
        default: 'bg-light-primary'
    },
    borderColor: {
        type: String,
        default: 'border-white'
    },
    bgHover: {
        type: String,
        default: 'hover:bg-light-primary'
    },
    borderHover: {
        type: String,
        default: 'hover:border-none'
    },
    textColor: {
        type: String,
        default: 'text-white'
    },
    width: {
        type: String,
        default: 'w-fit'
    }
})
</script>

<template>
    <button :class="[
      'rounded-xl cursor-pointer py-4 px-10 border transition-all duration-200',
      bgColor,
      borderColor,
      bgHover,
      borderHover,
      textColor,
      width
    ]" @click="$emit('click')">
        <slot></slot>
    </button>
</template>