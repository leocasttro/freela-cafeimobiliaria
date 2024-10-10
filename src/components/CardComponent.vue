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
        <div class="card-text mt-5" style="color: gray">
          <ul class="list-inline d-flex justify-content-lg-start">
            <li class="list-inline-item">
              <div
                class="border-end border-5 d-flex align-items-center justify-content-center pe-3 fw-bolder"
              >
                <span>3 <i class="fa-solid fa-bed"></i> </span>
              </div>
            </li>
            <li class="list-inline-item">
              <div
                class="border-end border-5 d-flex align-items-center justify-content-center pe-3 fw-bolder"
              >
                <span>3 <i class="fa-solid fa-car"></i></span>
              </div>
            </li>
            <li class="list-inline-item me-3 fw-bolder">
              258.6m² <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body border-top border-2 d-flex justify-content-between">
        <span class="align-content-center" style="font-size: 1rem">
          <strong>R$ 2.550.000.00</strong>
        </span>
        <button class="btn-custom-w" @click="verImovel">ver imovel</button>
      </div>
    </div>
  </CardWrapper>
</template>

<script setup>
import { defineProps } from 'vue'
import CardWrapper from './UI/CardWrapper.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const verImovel = () => {
  // Suponha que o caminho da rota seja '/imovel/:id'
  router.push({ name: 'imovel', params: { id: '123' } })
}

const props = defineProps({
  title: String,
  text: String,
  image: String
})
</script>

<style scoped>
.card-custon {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Adiciona a sombra ao redor do card */
  transition: box-shadow 0.3s ease; /* Animação suave para a sombra ao passar o mouse */
}

.card-custon:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4); /* Aumenta a sombra ao passar o mouse */
}
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
