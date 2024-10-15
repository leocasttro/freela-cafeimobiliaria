<script setup>
import MainFooterPromo from '@/components/MainFooterPromo.vue'
import CSection from '@/components/UI/CSection.vue'
import { ref } from 'vue'

const logonovo = ref(new URL('../assets/img/logos/3.png', import.meta.url).href)
</script>

<template>
  <main>
    <div class="index position-relative">
      <img
        src="../assets/img/backs-home/fundo-cafe-designer.png"
        class="position-absolute"
        alt="background mulher tomando café"
        style="width: 100%; height: 100%; object-fit: cover; background-repeat: no-repeat"
      />
      <div
        class="index-fundo position-absolute top-0 start-0 w-100 h-100"
        style="background-color: rgba(32, 55, 46, 0.6)"
      ></div>
      <CSection class="position-relative z-2">
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
        <div class="container-md container-custom">
          <div class="d-flex justify-content-center flex-column flex-md-row align-content-center">
            <div class="container-card" style="width: auto">
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
            </div>
            <div class="container-card-2" style="width: auto">
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
        </div>
      </CSection>
    </div>
    <MainFooterPromo />
  </main>
</template>

<style>
.index {
  min-height: 90vh; /* Reduzindo a altura mínima para exibir parte do footer */
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

@media (max-width: 765px) {
  .container-custom {
    max-width: 100vh;
    margin: 0 auto;
  }

  /* Alterando a disposição dos cards para coluna em telas menores */
  .d-flex.flex-md-row {
    flex-direction: column;
    align-items: center; /* Centraliza os cards */
  }

  /* Ajustando o tamanho dos containers dos cards */
  .container-card,
  .container-card-2 {
    align-items: center;
    width: 100%; /* O card ocupa toda a largura disponível */
    margin-bottom: 10px; /* Espaço entre os cards */
  }

  /* Ajustando a largura e altura da imagem do card */
  .card-img {
    width: 100%; /* A imagem ocupa toda a largura do card */
    height: auto; /* Altura ajusta-se proporcionalmente */
    margin: 0 !important;
  }

  /* Reduzindo a escala dos textos e botões de forma proporcional */
  .footer-card h1 {
    font-size: 1.25rem; /* Reduzindo o tamanho do título */
  }

  .footer-card h2 {
    font-size: 1rem; /* Reduzindo o subtítulo */
  }

  .button {
    font-size: 0.875rem; /* Reduzindo o tamanho do texto no botão */
    width: 100%; /* Botão ocupa toda a largura no modo coluna */
    max-width: 200px; /* Define um tamanho máximo para o botão */
  }
}

@media (max-width: 576px) {
  .container-custom {
    max-width: 100vh;
    margin: 0 auto;
  }

  /* Alterando a disposição dos cards para coluna em telas menores */
  .d-flex.flex-md-row {
    flex-direction: column;
    align-items: center; /* Centraliza os cards */
  }

  /* Ajustando o tamanho dos containers dos cards */
  .container-card,
  .container-card-2 {
    width: 100%; /* O card ocupa toda a largura disponível */
    margin-bottom: 10px; /* Espaço entre os cards */
  }

  /* Ajustando a largura e altura da imagem do card */
  .card-img {
    width: 100%; /* A imagem ocupa toda a largura do card */
    height: auto; /* Altura ajusta-se proporcionalmente */
    margin: 0 !important;
  }

  /* Reduzindo a escala dos textos e botões de forma proporcional */
  .footer-card h1 {
    font-size: 1.25rem; /* Reduzindo o tamanho do título */
  }

  .footer-card h2 {
    font-size: 1rem; /* Reduzindo o subtítulo */
  }

  .button {
    font-size: 0.875rem; /* Reduzindo o tamanho do texto no botão */
    width: 100%; /* Botão ocupa toda a largura no modo coluna */
    max-width: 200px; /* Define um tamanho máximo para o botão */
  }
}
</style>
