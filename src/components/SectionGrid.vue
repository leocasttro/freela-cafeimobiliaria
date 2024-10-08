<template>
  <CSection class="container-md mt-5">
    <div class="d-flex justify-content-center mt-4 mb-5">
      <h2>Benefícios da Café para você</h2>
    </div>
    <div class="grid-container mt-3" style="height: 300px">
      <div class="row h-75 text-center">
        <div class="col-md-8 h-100">
          <div
            class="h-100 d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${cashbackImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          >
            <div class="w-50">
              <h5>CashBack Social</h5>
              <p>Comprar seu imóvel na Café ajuda na construção de um mundo melhor.</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 h-100">
          <div
            class="h-100 d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${indiqueImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          >
            <div>
              <h5>Indique e ganhe</h5>
              <p>Indique imóveis para vender e ganhe junto conosco.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row h-75 text-center mt-4">
        <div class="col-6 col-md-4 h-100">
          <div
            class="h-100 d-flex justify-content-center align-items-center text-light text-center"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imovelIdeal})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          >
            <div>
              <h5>Imóvel ideal para você</h5>
              <p>Não encontrou o imóvel que deseja? Nosso time de vendas vai atrás.</p>
            </div>
          </div>
        </div>
        <div class="col-md-8 h-100">
          <div
            class="h-100 d-flex justify-content-center align-items-center text-light"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${suporte})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          >
            <div class="w-50">
              <h5>Suporte especilizado</h5>
              <p>
                Oferecemos os melhores recursos para que sua jornada de comprar seja agradável e
                transparente do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CSection>
</template>

<script setup>
import CSection from './UI/CSection.vue'
import cashbackImage from '../assets/img/cashback-social.jpeg'
import indiqueImage from '../assets/img/indique.jpeg'
import imovelIdeal from '../assets/img/imovel-ideal.jpeg'
import suporte from '../assets/img/suporte.jpeg'
</script>
