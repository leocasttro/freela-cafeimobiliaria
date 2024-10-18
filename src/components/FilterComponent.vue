<template>
  <div class="container-fluid position-sticky bg-white">
    <div class="mt-dm-4 px-5">
      <!-- Tudo em uma única linha -->
      <div class="d-flex align-items-center justify-content-evenly flex-wrap gap-2">
        <!-- gap-2 diminui o espaçamento entre os elementos -->
        <div class="d-flex align-items-center">
          <div class="m-2">
            <div class="text-center px-4 mt-3">
              <h4 style="font-size: 0.875rem" class="fw-bold">
                Imóveis em Santa Maria e arredores
              </h4>
              <span style="font-size: small">{{ props.count }} encontrados</span>
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex align-items-center" style="width: 500px">
          <div class="btn-simulated d-flex flex-column align-items-center me-2 w-50">
            <span class="fw-bold fs-6 mt-1">Ver mapa</span>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"></label>
            </div>
          </div>
          <div class="btn-simulated d-flex flex-column align-items-center me-2 w-50">
            <span class="fw-bold fs-6 mt-1">Aceita Permuta</span>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault2"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault2"></label>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4 mb-sm-0 d-custom" style="width: 500px">
          <!-- Select com Bootstrap -->

          <div class="custom-select w-50 text-start" @blur="openSelect1 = false">
            <div class="selected" :class="{ open: openSelect1 }" @click="toggleSelect(1)">
              {{ selected1 }}
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
                {{ option }}
              </div>
            </div>
          </div>
          <button class="btn btn-simulated mx-2 w-75" style="height: 50px">Filtro</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  count: Number
})

const emit = defineEmits(['input'])

const selected1 = ref('Ordenar por')
const openSelect1 = ref(false)
const options1 = ['Mais recente', 'Maior preço', 'Menor preço']

const toggleSelect = (selectNumber) => {
  if (selectNumber === 1) {
    openSelect1.value = !openSelect1.value
  }
}

const selectOption = (selectNumber, option) => {
  if (selectNumber === 1) {
    selected1.value = option
    emit('input', selected1.value)
    openSelect1.value = false // Fecha o menu após selecionar uma opção
  }
}
</script>

<style scoped>
.btn-simulated {
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  border-radius: 10px;
  color: #fff;
  cursor: pointer; /* Para simular que é um botão */
}

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 100%;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #fffafa;
  border-radius: 10px;
  border: 2px solid rgb(226, 222, 222);
  color: rgb(39, 38, 38);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
}

.custom-select .selected.open {
  border: 1px solid gray;
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

.form-check-input {
  height: 20px; /* Altura personalizada do switch */
  width: 40px !important;
  background-color: #f0f0f0; /* Cor de fundo inicial */
  transition: background-color 0.3s ease; /* Transição suave */
}

.form-check-input:checked {
  width: 40px;
  background-color: #1f362e; /* Cor de fundo do switch quando está ativo */
}

.form-check-input:focus {
  box-shadow: none; /* Remover o estilo de foco padrão */
}

.form-check-label {
  color: transparent; /* Tornar o label invisível se não for necessário */
}

.form-check-input:checked + .form-check-label::before {
  background-color: #1f362e; /* Mudar a cor do círculo ao ativar */
  width: 40px;
}

@media (max-width: 768px) {
  .d-custom {
    width: 300px;
  }
}
</style>
