<template>
  <CardWrapper>
    <div class="card mt-5 card-custon">
      <img :src="image" class="card-img-top card-img-custom" alt="..." />
      <div class="card-body p-1 mt-1">
        <div class="d-flex justify-content-between card-text">
          <span
            ><strong>{{ text }}:</strong> {{ type }}</span
          >
          <span>Cód: {{ cod }}</span>
        </div>
        <div class="card-title mt-3">
          <h3>{{ title }}</h3>
        </div>
        <div class="card-text mt-5" style="color: gray">
          <ul class="list-inline d-flex justify-content-lg-start">
            <li class="list-inline-item">
              <div
                class="border-end border-5 d-flex align-items-center justify-content-center pe-3 fw-bolder"
              >
                <span>{{ dormitory }} <i class="fa-solid fa-bed"></i> </span>
              </div>
            </li>
            <li class="list-inline-item">
              <div
                class="border-end border-5 d-flex align-items-center justify-content-center pe-3 fw-bolder"
              >
                <span>{{ garage }} <i class="fa-solid fa-car"></i></span>
              </div>
            </li>
            <li class="list-inline-item me-3 fw-bolder">
              {{ area_total }}m² <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body border-top border-2 d-flex justify-content-between">
        <span class="align-content-center" style="font-size: 1rem">
          <strong>R$ {{ value }}</strong>
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
  router.push({ name: 'imovel', params: { id: '123' } })
}

const props = defineProps({
  title: String,
  text: String,
  image: String,
  type: String,
  cod: String,
  dormitory: String,
  garage: String,
  area_total: String,
  value: String
})

const dormitory = props.dormitory ?? 'n/a'
const garage = props.garage ?? 'n/a'
</script>

<style scoped>
.card-custon {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
}

.card-body {
  max-width: 286px; /* Define a largura máxima */
  max-height: 541.594px; /* Define a altura máxima */
}

.card-custon:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
}

.card-title h3 {
  font-size: large; /* Ajuste o tamanho da fonte conforme necessário */
  text-align: left; /* Alinhamento à esquerda */
  overflow: hidden; /* Oculta o texto que ultrapassa o limite */
  white-space: nowrap; /* Não quebra o texto em várias linhas */
  text-overflow: ellipsis; /* Adiciona "..." ao final do texto que excede */
  max-width: 100%; /* Limita a largura ao contêiner */
  display: block; /* Garante que o título se comporte como um bloco */
  margin: 0; /* Remove a margem padrão */
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
  border: 2px solid #e2e8f0;
  background-color: white;
  font-size: 0.75rem;
  width: 100px;
  height: 40px;
}
</style>
