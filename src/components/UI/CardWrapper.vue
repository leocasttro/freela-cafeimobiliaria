<template>
  <div class="card-wrapper">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-wrapper {
  transition: max-height 200ms linear;
}

button.card-wrapper {
  transition:
    background 150ms,
    box-shadow 150ms;
}
button.card-wrapper:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 4px 6px 2px rgba(0, 0, 0, 0.05);
}
</style>
