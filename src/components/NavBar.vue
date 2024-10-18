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
        <button
          class="navbar-toggler d-md-none text-bg-light rounded-circle p-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" style="font-size: 15px"></span>
        </button>

        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Navegação</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink class="nav-link text-white" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" to="/venda">Comprar</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" to="/alugar">Alugar</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" to="/sobre">Sobre nós</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" to="/empreendimentos"
                  >Empreendimentos</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" to="/anunciar">Anunciar</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu text-light">
          <span class="me-4">
            <RouterLink class="text-light text-decoration-none" to="/venda">Comprar</RouterLink>
          </span>
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

/* Offcanvas e Menu Visibility */
@media (max-width: 768px) {
  .menu {
    display: none;
  }
}

@media (min-width: 769px) {
  .offcanvas {
    display: none !important;
  }
}
</style>
