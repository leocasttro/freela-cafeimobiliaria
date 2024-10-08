<template>
  <div class="main-nav d-flex justify-content-center">
    <nav class="navbar">
      <div class="container-fluid d-flex justify-content-between">
        <div>
          <a class="navbar-brand" href="#">
            <img
              src="../assets/img/logos/3.png"
              alt="Logo"
              class="d-inline-block align-text-top"
              style="width: 120px"
            />
          </a>
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

<style scoped>
.navbar {
  width: 1280px;
  height: 78px;
  position: sticky;
  top: 0;
  z-index: 1000; /* Para manter no topo de outros elementos */
}
img {
  max-width: 100%;
  height: auto;
}
</style>
