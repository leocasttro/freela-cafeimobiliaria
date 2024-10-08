<template>
  <div class="custom-select" @blur="open = false">
    <div class="selected" :class="{ open }" @click="toggleOpen">
      <i class="fa-solid fa-location-dot me-3"></i>
      {{ selected || defaultLabel }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
        class="item"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

// Definindo eventos
const emit = defineEmits(['input'])

// Estado local
const selected = ref('')
const open = ref(false)

// Função para alternar a visibilidade das opções
const toggleOpen = () => {
  open.value = !open.value
}

// Função para selecionar uma opção
const selectOption = (option) => {
  selected.value = option
  emit('input', selected.value)
  open.value = false // Fecha o menu após selecionar uma opção
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: white;
  border-radius: 6px;
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
  border-color: black transparent transparent transparent;
}

.custom-select .items {
  color: black;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border: 1px solid #ad8225;
  position: absolute;
  background-color: white;
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
  background-color: white;
}

.selectHide {
  display: none;
}
</style>
