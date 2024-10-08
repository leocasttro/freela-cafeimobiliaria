<script setup>
import MainFooterPromo from '@/components/MainFooterPromo.vue'
import CSection from '@/components/UI/CSection.vue'
import { ref } from 'vue'

const logonovo = ref(new URL('../assets/img/logos/3.png', import.meta.url).href)
</script>

<template>
  <main class="position-relative">
    <div class="index position-relative">
      <img
        src="../assets/img/backs-home/fundo-cafe-designer.png"
        class="position-absolute"
        alt="background mulher tomando café"
      />
      <div
        class="index-fundo position-absolute top-0 start-0 w-100 h-100"
        style="background-color: rgba(32, 55, 46, 0.6)"
      ></div>
      <CSection class="position-relative z-3">
        <div class="d-flex flex-column px-4 text-center" style="margin-top: 40px">
          <h1 class="mb-3">
            <img :src="logonovo" class="d-print-inline-block" style="width: 180px" />
          </h1>
          <h3 id="subtitulo" class="fs-5 mb-3 text-white fw-bold lh-base">
            Bem-vindo à nossa casa,<br />agora vamos falar sobre a sua
          </h3>
          <h3 id="sub-subtitulo" class="fs-6 mb-3 text-white fw-mediun">
            Escolha a sua região de interesse:
          </h3>
          <h3 id="indicador-abaixo" class="mb-1 text-white">
            <div class="d-flex justify-content-center align-items-center mb-5" style="height: 50px">
              <svg
                style="fill: white; width: 40px; height: 20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
                />
              </svg>
            </div>
          </h3>
        </div>
        <div class="container">
          <div class="row g-3 justify-content-center">
            <div
              class="card-img col-lg-6"
              style="width: 23rem; margin-right: 20px; border: none; padding: 0"
            >
              <a href="/home" style="text-decoration: none">
                <div class="img">
                  <img
                    src="../assets/img/backs-home/santa-maria-2.jpeg"
                    class="card-img"
                    alt="..."
                    style="border-top-right-radius: 20px; border-top-left-radius: 20px"
                  />
                </div>
                <div class="body-card d-flex justify-content-center">
                  <div class="footer-card" style="margin: auto">
                    <h1 class="titulo-card fs-5 fw-bold">Santa Maria</h1>
                    <h2 class="subtitulo-card fs-5 fw-bold">e Região</h2>
                  </div>
                  <button class="button" style="margin: auto">Acessar Site</button>
                </div>
              </a>
            </div>
            <div class="card-img col-lg-6" style="width: 23rem; margin-left: 30px; padding: 0">
              <a href="" style="text-decoration: none">
                <div class="img">
                  <img
                    src="../assets/img/backs-home/balneario-camboriu.jpeg"
                    class="card-img"
                    alt="..."
                    style="border-top-right-radius: 20px; border-top-left-radius: 20px"
                  />
                </div>
                <div class="body-card d-flex justify-content-center">
                  <div class="footer-card" style="margin: auto">
                    <h1 class="titulo-card fs-5 fw-bold">Balneário<br />Camboriú</h1>
                    <h2 class="subtitulo-card fs-5 fw-bold">e Região</h2>
                  </div>
                  <button class="button" style="margin: auto">Acessar Site</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </CSection>
    </div>
    <MainFooterPromo />
  </main>
</template>

<style>
.index {
  height: 100vh; /* ou qualquer altura que desejar */
  overflow: hidden; /* Para esconder qualquer overflow */
}

.index-fundo {
  z-index: 1; /* A camada do fundo */
}

#subtitulo {
  letter-spacing: -1px; /* Manter este estilo em CSS */
  line-height: 30px; /* Manter este estilo em CSS */
}

#sub-subtitulo {
  line-height: 30px; /* Manter este estilo em CSS */
}

.img {
  border: 8px solid #c59459;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom: none;
}
.card-img {
  width: 352px;
  height: 192px;
}
.body-card {
  width: 368px;
  height: 123px;
  margin: auto;
  background-color: #05925b;
}
.footer-card {
  letter-spacing: 1px;
  line-height: 28px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  filter: drop-shadow(1.763px 2.427px 1.5px rgba(0, 0, 0, 0.51));
}
.button {
  font-size: 15px;
  font-weight: 700;
  border: #e2e8f0 solid 2px;
  color: #fff;
  filter: drop-shadow(1.763px 2.427px 4px rgba(0, 0, 0, 0.13));
  border-radius: 13px;
  background-color: #c59459;
  width: 150px;
  height: 45px;
}
</style>
