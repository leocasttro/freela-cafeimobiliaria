<template>
  <footer class="main-footer bg-black text-white border-top border-gray-300 py-4 footer-custom">
    <div class="container text-center">
      <h3 class="mt-5 titulo-footer">Fale direto em nosso whatsapp:</h3>
      <div class="d-flex justify-content-center align-items-center my-2">
        <a
          href="https://api.whatsapp.com/send/?phone=5555999128466"
          target="_blank"
          class="d-flex align-items-center text-decoration-none"
        >
          <i
            class="fa-brands fa-whatsapp p-2 rounded"
            style="font-size: 50px; color: black; background-color: green"
          ></i>
          <span
            class="border border-4 border-start-0 fw-bold px-4 py-2"
            style="
              font-size: 20px;
              color: green;
              border-color: green !important;
              border-top-right-radius: 20px;
              border-bottom-right-radius: 20px;
            "
          >
            (55) 99912 8466
          </span>
        </a>
      </div>
      <p class="mb-1 small">Rua Silva Jardim, 1417, Centro, Santa Maria/RS</p>
      <p class="mb-1 small">R. 3300, nº 341, Sala 12, Balneário Camboriú/SC</p>
      <p class="small">Café Negócios Imobiliários Ltda. * Creci 24.707J *</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-custom {
  position: absolute;
  width: 100%; /* Faz o footer ocupar toda a largura da página */
  background-color: black; /* Cor de fundo para destacar o footer */
}

.titulo-footer {
  font-size: 20px;
  line-height: 50px;
  color: #f0f0f0;
  font-weight: 700;
}

.main-footer__logo svg {
  width: 140px;
  color: #673c29;
}
</style>
