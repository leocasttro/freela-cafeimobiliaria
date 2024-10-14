<template>
  <div class="container-header w-100">
    <header :class="['header-bg', routeName]" class="position-relative align-content-center">
      <div class="container-lg itens-center">
        <div class="h-100 align-content-center">
          <div class="titulo text-lg-center">
            <h2 class="text-light">Qual imóvel você quer visitar hoje?</h2>
          </div>
          <div class="container-sm container-custom">
            <div class="row mb-2 mt-4">
              <div class="col d-flex gap-2">
                <a href="">Comprar</a>
                <a href="">Alugar</a>
                <a href="">Buscar por código</a>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-custon">
                <div class="custom-select" @blur="openSelect1 = false">
                  <div class="selected" :class="{ open: openSelect1 }" @click="toggleSelect(1)">
                    <i class="fa-solid fa-location-dot me-3" style="color: #a0aec0"></i>
                    {{ selected1.nome }}
                  </div>
                  <div class="items" :class="{ selectHide: !openSelect1 }">
                    <div
                      v-for="option in options1"
                      :key="option.id"
                      @click="selectOption(1, option)"
                      :class="{ 'selected-option': selected1 === option }"
                      class="item"
                      style="border-top: #dcdcdc 2px solid"
                    >
                      {{ option.nome }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-custon">
                <div class="custom-select" @blur="openSelect2 = false">
                  <div class="selected" :class="{ open: openSelect2 }" @click="toggleSelect(2)">
                    <i class="fa-solid fa-magnifying-glass me-3" style="color: #a0aec0"></i>
                    {{ selected2.nome }}
                  </div>
                  <div class="items" :class="{ selectHide: !openSelect2 }">
                    <div
                      v-for="option in options2"
                      :key="option.id"
                      @click="selectOption(2, option)"
                      :class="{ 'selected-option': selected2 === option }"
                      class="item"
                      style="border-top: #dcdcdc 2px solid"
                    >
                      {{ option.nome }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-custon">
                <div class="custom-select" @blur="openSelect3 = false">
                  <div class="selected" :class="{ open: openSelect3 }" @click="toggleSelect(3)">
                    <i class="fa-solid fa-magnifying-glass me-3" style="color: #a0aec0"></i>
                    {{ selected3 }}
                  </div>
                  <div class="items" :class="{ selectHide: !openSelect3 }">
                    <div
                      v-for="option in options3"
                      :key="option.id"
                      @click="selectOption(3, option)"
                      :class="{ 'selected-option': selected3 === option }"
                      class="item"
                      style="border-top: #dcdcdc 2px solid"
                    >
                      {{ option }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn-custom mt-2">Pesquisar</button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = route.name === 'home' ? 'home-bg' : 'other-bg'

// Definindo eventos
const emit = defineEmits(['input'])

// Estado local
const selected1 = ref('')
const selected2 = ref('')
const selected3 = ref('Casa')
const openSelect1 = ref(false)
const openSelect2 = ref(false)
const openSelect3 = ref(false)

const options1 = ref([]) // Dados fictícios
const options2 = ref([]) // Dados fictícios
const options3 = [
  'Casa',
  'Apartamento',
  'Kit/Loft/Studio',
  'Cobertura',
  'Duplex',
  'Triplex',
  'Terreno',
  'Pavilhão',
  'Prédio',
  'Chácara/Sítio',
  'Campo/Fazenda',
  'Sala comercial',
  'Casa comercial',
  'Loja'
] // Dados fictícios

// Função para alternar a visibilidade das opções
const toggleSelect = (selectNumber) => {
  if (selectNumber === 1) {
    openSelect1.value = !openSelect1.value
    openSelect2.value = false
    openSelect3.value = false
  } else if (selectNumber === 2) {
    openSelect2.value = !openSelect2.value
    openSelect1.value = false
    openSelect3.value = false
  } else if (selectNumber === 3) {
    openSelect3.value = !openSelect3.value
    openSelect1.value = false
    openSelect2.value = false
  }
}

// Função para selecionar uma opção
const selectOption = (selectNumber, option) => {
  if (selectNumber === 1) {
    selected1.value = option
    emit('input', selected1.value)
    openSelect1.value = false // Fecha o menu após selecionar uma opção
  } else if (selectNumber === 2) {
    selected2.value = option
    emit('input', selected2.value)
    openSelect2.value = false // Fecha o menu após selecionar uma opção
  } else if (selectNumber === 3) {
    selected3.value = option
    emit('input', selected3.value)
    openSelect3.value = false // Fecha o menu após selecionar uma opção
  }
}

const loadCity = async () => {
  try {
    const response = await fetch('../../public/jsons/jsoncidades.json') // Caminho relativo para o arquivo na pasta public
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON')
    }
    const data = await response.json()
    options1.value = data

    if (options1.value.length > 0) {
      selected1.value = options1.value[0]
    }
  } catch (error) {
    console.error(error)
  }
}

const loadDistrict = async () => {
  try {
    const response = await fetch('../../public/jsons/jsonbairros.json') // Caminho relativo para o arquivo na pasta public
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON')
    }
    const data = await response.json()
    options2.value = data

    if (options1.value.length > 0) {
      selected2.value = options2.value[0]
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  loadCity()
  loadDistrict()
})
</script>

<style scoped>
header > * {
  position: relative;
  z-index: 2;
}
.header-bg {
  height: 585px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.home-bg {
  background-image: url('../assets/img/home.jpg');
}

.other-bg {
  background-image: url('../assets/img/homesc.jpeg');
}

.header-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.titulo {
  margin-top: 100px;
}
.container-custom {
  padding-left: 70px;
  margin-top: 10px;
}

.custom-select {
  position: relative;
  width: 33%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #fffafa;
  border-radius: 10px;
  border: 1px solid black;
  color: rgb(39, 38, 38);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
}

.custom-select .selected.open {
  border: 1px solid black;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #dcdcdc transparent transparent transparent;
}

.custom-select .items {
  color: black;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  background-color: #fffafa;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 300px; /* Limite de altura para as opções visíveis */
  overflow-y: auto; /* Ativar rolagem vertical */
}

.custom-select .items div {
  color: gray; /* Cor inicial dos itens */
  padding-left: 1em;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  background-color: #fffafa;
}

.custom-select .items div:hover {
  color: rgb(39, 38, 38);
  background-color: #e4e0e0;
}

.selectHide {
  display: none;
}
.selected-option {
  font-weight: bold; /* Deixa o item selecionado em negrito */
  color: rgb(39, 38, 38) !important; /* Mantém a cor preta ao ser selecionado */
}

a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  border-bottom: #dcdcdc 2px solid;
  margin: 5px 8px;
}

.btn-custom {
  border-radius: 25px;
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  width: 200px; /* Corrigido */
  height: 55px; /* Corrigido */
}
.btn-custom:hover {
  background-image: linear-gradient(#e4a92a, #ac7145);
}

@media (max-width: 768px) {
  .custom-select {
    width: 100%; /* O select ocupará 100% da largura */
    margin-bottom: 10px; /* Espaçamento entre os selects */
  }

  .btn-custom {
    width: 100%; /* O botão também ocupa 100% da largura em telas menores */
    font-size: 1rem;
  }

  .container-custom {
    padding-left: 15px; /* Ajusta o padding em telas menores */
    padding-right: 15px;
  }

  .titulo h2 {
    font-size: 1.3rem;
    text-align: center; /* Tamanho menor do título */
  }

  .col {
    flex-direction: row;
    justify-content: space-between; /* Empilha os links em telas pequenas */
    text-align: center;
  }

  a {
    display: block; /* Links um abaixo do outro */
    margin: 5px 0;
  }
}
</style>
