<template>
  <div
    class="navbar-container d-flex justify-content-center"
    :class="{ scrolled: isScrolled || !isHomeOrHomesc }"
  >
    <nav class="navbar">
      <div class="container-fluid d-flex justify-content-between">
        <div>
          <RouterLink to="/">
            <img
              src="../assets/img/logos/3.png"
              alt="Logo"
              class="d-inline-block align-text-top"
              style="width: 120px"
            />
          </RouterLink>
        </div>
        <div class="text-light">
          <span class="me-4">Comprar</span>
          <span class="me-4">Alugar</span>
          <span class="me-4">Sobre nós</span>
          <span class="me-4">Empreendimentos</span>
          <span>Anunciar</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const route = useRoute()

// Verifica se a rota atual é '/home' ou '/homesc'
const isHomeOrHomesc = ref(route.name === 'home' || route.name === 'homesc')

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  isHomeOrHomesc.value = route.name === 'home' || route.name === 'homesc'
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: background-color 0.3s ease;
}

.navbar-container.scrolled {
  background-color: #1f362e;
}

.navbar {
  width: 1280px;
  height: 78px;
  background-color: transparent;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
