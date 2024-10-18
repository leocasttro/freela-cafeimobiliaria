<template>
  <div class="container-fluid position-sticky bg-white">
    <div class="mt-dm-4 px-5">
      <!-- Tudo em uma única linha -->
      <div class="d-flex align-items-center justify-content-evenly flex-wrap gap-2">
        <!-- gap-2 diminui o espaçamento entre os elementos -->
        <div class="d-flex align-items-center">
          <div class="m-2">
            <div class="text-center px-4 mt-3">
              <h4 style="font-size: 0.875rem" class="fw-bold">
                Imóveis em Santa Maria e arredores
              </h4>
              <span style="font-size: small">10 encontrados</span>
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex align-items-center" style="width: 500px">
          <div class="btn-simulated d-flex flex-column align-items-center me-2 w-50">
            <span class="fw-bold mt-2">Ver mapa</span>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"></label>
            </div>
          </div>
          <div class="btn-simulated d-flex flex-column align-items-center me-2 w-50">
            <span class="fw-bold mt-2">Aceita Permuta</span>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault2"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault2"></label>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4 mb-sm-0 d-custom" style="width: 500px">
          <!-- Select com Bootstrap -->
          <select
            class="form-select w-100 text-center"
            aria-label="Default select example"
            style="height: 54px"
          >
            <option class="text-center" selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button class="btn btn-simulated mx-2 w-75" style="height: 54px">Filtro</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.btn-simulated {
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  border-radius: 10px;
  color: #fff;
  cursor: pointer; /* Para simular que é um botão */
}

@media (max-width: 768px) {
  .d-custom {
    width: 300px;
  }
}
</style>
