<template>
  <div class="container-fluid">
    <div class="d-block" style="width: 100%; height: 78px">
      <NavBar />
    </div>
    <div class="fixed-top z-2 filter-component">
      <FilterComponent />
    </div>
    <!-- Container para os cards com scroll infinito -->
    <div class="container-fluid mt-5 pt-5">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <!-- Exemplo de Cards -->
        <div class="col" v-for="card in cardData" :key="card.id">
          <CardBuyComponent
            :text="card.contrato"
            :type="card.tipo"
            :cod="card.codigo"
            :title="card.endereco_bairro"
            :dormitory="card.dormitorios"
            :garage="card.garagens"
            :area_total="card.area_total"
            :value="formatCurrency(card.valor_venda)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FilterComponent from '@/components/FilterComponent.vue'
import NavBar from '@/components/NavBar.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'
import CardBuyComponent from '@/components/CardBuyComponent.vue'

// Cria a lista de cards vazia como uma referência reativa
const cardData = ref([])

// Função para carregar mais cards
const loadProperty = async () => {
  try {
    const response = await fetch('../../public/jsons/imoveis/cafeimoveis.json')
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON')
    }
    const data = await response.json()
    cardData.value = data.slice(0, 10)
  } catch (error) {
    console.error(error)
  }
}
const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

// Função para detectar o scroll e carregar mais cards
const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY
  const bottomOfPage = document.documentElement.offsetHeight

  if (scrollPosition >= bottomOfPage) {
    loadProperty()
  }
}

// Lifecycle hook para carregar os cards iniciais
onMounted(() => {
  loadProperty()

  // Adiciona o evento de scroll
  window.addEventListener('scroll', handleScroll)
})

// Lifecycle hook para remover o evento de scroll quando o componente for destruído
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Estilo para manter o FilterComponent fixo abaixo do NavBar */
.fixed-top {
  position: fixed; /* Mantém o componente fixo na tela */
  top: 78px; /* Ajuste a distância do topo para a altura do NavBar */
  width: 100%; /* Garante que o componente ocupe toda a largura */
  z-index: 1020; /* Garante que fique acima de outros elementos */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra opcional */
}
</style>
