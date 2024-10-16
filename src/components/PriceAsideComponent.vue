<template>
  <div
    class="container position-sticky top-0 container-custom mt-5"
    style="
      box-shadow:
        -4px 20px 10px rgba(0, 0, 0, 0.1),
        4px 4px 10px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid transparent;
    "
  >
    <div class="d-flex justify-content-between">
      <h5 class="fw-bold">Venda</h5>
      <p
        class="text-white text-center align-content-center"
        style="height: 30px; width: 120px; border-radius: 5px; background-color: green"
      >
        Semimobiliado
      </p>
    </div>
    <div class="table-custom mt-3">
      <div class="d-flex justify-content-between border-bottom">
        <p>Venda</p>
        <p class="fw-bold mb-0">R$ 2.970.000,00</p>
      </div>
      <div class="d-flex justify-content-between mt-2">
        <p>Venda</p>
        <p class="fw-bold">R$ 2.970.000,00</p>
      </div>
    </div>

    <div class="mt-4">
      <div class="d-flexalign-items-center">
        <span class="fw-bold">Impostos e taxas</span>
        <button
          class="btn btn-link p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#taxDetails"
          aria-expanded="false"
          aria-controls="taxDetails"
        >
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div class="collapse mt-3" id="taxDetails">
        <div class="table-custom">
          <div class="d-flex justify-content-between border-bottom">
            <p style="font-size: 14px">
              ITBI <span class="fa-solid fa-circle-info" style="font-size: small" />
            </p>
            <p class="fw-bold mb-0">R$ 63.855,00</p>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <p style="font-size: 14px">
              Escritura e Registro <span class="fa-solid fa-circle-info" style="font-size: small" />
            </p>
            <p class="fw-bold">R$ 59.400,00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 d-flex justify-content-center">
      <img class="img-seller" src="../assets/img/rafael.old.png" alt="" />
      <ul class="text-center align-content-center list-unstyled mx-3">
        <li class="fw-bold">Valéria Alves</li>
        <li class="fw-medium" style="font-size: 15px">Corretora de Imóveis</li>
        <li class="fw-medium" style="font-size: 15px">
          <i class="fa-solid fa-phone-flip"></i> (55) 99622-4208
        </li>
      </ul>
    </div>
    <div class="my-4">
      <div class="w-100">
        <button class="w-100 buttom-seller text-white">
          <i class="fa-brands fa-whatsapp" />
          (61) 9999-999
        </button>
      </div>
      <div class="w-100 my-3 d-flex justify-content-between">
        <button class="btn-custom w-50 me-1" style="height: 55px">Tenho interesse</button>
        <button class="btn-custom btn-custom w-50">
          <i class="fa-solid fa-calendar" />
          Agendar visita
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.img-seller {
  width: 150px;
  height: 150px !important;
  object-fit: cover;
  border-radius: 50%;
  display: inline-flex !important;
}
.buttom-seller {
  height: 52px;
  border-radius: 22px;
  font-size: 15px;
  font-weight: 700;
  background-image: linear-gradient(#128c7e, #32cd32);
  border-color: 1px solid #128c7e;
}
.btn-custom {
  border-radius: 22px;
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}

.btn-custom:hover {
  background-image: linear-gradient(#e4a92a, #ac7145);
}

.btn-custom-w {
  border-radius: 25px;
  border: 2px solid gray; /* Define a largura da borda e cor */
  background-color: white;
  font-size: 0.75rem;
  width: 100px;
  height: 40px;
}
</style>
