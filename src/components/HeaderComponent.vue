<template>
  <div class="container-header w-75 mt-5">
    <div class="titulo text-lg-center" style="margin-top: 110px">
      <h2 class="text-light">Qual imóvel você quer visitar hoje?</h2>
    </div>
    <div class="container-sm mt-5 me-xxl-5">
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
              {{ selected1 }}
            </div>
            <div class="items" :class="{ selectHide: !openSelect1 }">
              <div
                v-for="(option, index) in options1"
                :key="index"
                @click="selectOption(1, option)"
                class="item"
                style="border-top: #a0aec0 2px solid"
              >
                {{ option }}
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
              {{ selected2 }}
            </div>
            <div class="items" :class="{ selectHide: !openSelect2 }">
              <div
                v-for="(option, index) in options2"
                :key="index"
                @click="selectOption(2, option)"
                class="item"
              >
                {{ option }}
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
                v-for="(option, index) in options3"
                :key="index"
                @click="selectOption(3, option)"
                class="item"
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
</template>

<script setup>
import { ref } from 'vue'

// Definindo eventos
const emit = defineEmits(['input'])

// Estado local
const selected1 = ref('Escolha uma opção')
const selected2 = ref('Escolha uma opção')
const selected3 = ref('Escolha uma opção')
const openSelect1 = ref(false)
const openSelect2 = ref(false)
const openSelect3 = ref(false)

const options1 = ['Opção 1-1', 'Opção 1-2', 'Opção 1-3'] // Dados fictícios
const options2 = ['Opção 2-1', 'Opção 2-2', 'Opção 2-3'] // Dados fictícios
const options3 = ['Opção 3-1', 'Opção 3-2', 'Opção 3-3'] // Dados fictícios

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
</script>

<style scoped>
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
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
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
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #fffafa;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #fffafa;
}

.selectHide {
  display: none;
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
</style>
