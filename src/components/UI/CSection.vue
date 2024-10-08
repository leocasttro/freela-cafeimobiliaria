<template>
  <section :class="['py-5', container ? 'container' : '']">
    <slot />
  </section>
</template>

<script setup>
// Definindo props com script setup
const props = defineProps({
  container: {
    type: Boolean,
    default: true
  }
})
</script>
