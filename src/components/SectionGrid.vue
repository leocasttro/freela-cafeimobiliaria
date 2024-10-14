<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center mt-4 mb-5">
      <h2>Benefícios da Café para você</h2>
    </div>
    <div class="grid-container mt-3">
      <div class="row text-center mb-4">
        <div class="col-12 col-md-8">
          <div
            class="d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${cashbackImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px'
            }"
          >
            <div class="w-50">
              <i class="fa-solid fa-heart mb-3" style="font-size: 1.5rem"></i>
              <h5>CashBack Social</h5>
              <p>Comprar seu imóvel na Café ajuda na construção de um mundo melhor.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4 mt-md-0">
          <div
            class="d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${indiqueImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px'
            }"
          >
            <div>
              <i class="fa-solid fa-thumbs-up mb-3" style="font-size: 1.5rem"></i>
              <h5>Indique e ganhe</h5>
              <p>Indique imóveis para vender e ganhe junto conosco.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-12 col-md-4">
          <div
            class="d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imovelIdeal})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px'
            }"
          >
            <div>
              <i class="fa-solid fa-door-open mb-3" style="font-size: 1.5rem"></i>
              <h5>Imóvel ideal para você</h5>
              <p>Não encontrou o imóvel que deseja? Nosso time de vendas vai atrás.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 mt-4 mt-md-0">
          <div
            class="d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${suporte})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '250px'
            }"
          >
            <div class="w-50">
              <i class="fa-solid fa-handshake-angle mb-3" style="font-size: 1.5rem"></i>
              <h5>Suporte especializado</h5>
              <p>
                Oferecemos os melhores recursos para que sua jornada de comprar seja agradável e
                transparente do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cashbackImage from '../assets/img/cashback-social.jpeg'
import indiqueImage from '../assets/img/indique.jpeg'
import imovelIdeal from '../assets/img/imovel-ideal.jpeg'
import suporte from '../assets/img/suporte.jpeg'
</script>

<style scoped>
@media (max-width: 768px) {
  p {
    font-size: 15px;
  }
}
</style>
