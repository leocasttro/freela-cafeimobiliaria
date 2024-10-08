<template>
  <CardWrapper>
    <div class="card mt-5 card-custon">
      <img :src="image" class="card-img-top card-img-custom" alt="..." />
      <div class="card-body">
        <div class="d-flex justify-content-between card-text">
          <span><strong>Venda:</strong> Apartamento</span>
          <span>Cód: 323364</span>
        </div>
        <div class="card-title d-flex justify-content-lg-start">
          <h3 class="fs-5">{{ title }}</h3>
        </div>
        <div class="card-text mt-5">
          <ul class="list-inline d-flex justify-content-lg-start">
            <li class="list-inline-item">
              <div
                class="border-end border-5 d-flex align-items-center justify-content-center pe-3"
              >
                <span>3</span>
              </div>
            </li>
            <li class="list-inline-item">
              <div
                class="border-end border-5 d-flex align-items-center justify-content-center pe-3"
              >
                <span>3</span>
              </div>
            </li>
            <li class="list-inline-item me-3">258.6m²</li>
          </ul>
        </div>
      </div>
      <div class="card-body border-top border-2 d-flex justify-content-between">
        <span style="font-size: 1rem">
          <strong>R$ 2.550.000.00</strong>
        </span>
        <button class="btn-custom-w">ver imovel</button>
      </div>
    </div>
  </CardWrapper>
</template>

<script setup>
import { defineProps } from 'vue'
import CardWrapper from './UI/CardWrapper.vue'

const props = defineProps({
  title: String,
  text: String,
  image: String
})
</script>

<style scoped>
.card-img-custom {
  height: 300px;
  width: 284px;
  object-fit: cover;
}
.card-text {
  font-size: 0.75rem;
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
