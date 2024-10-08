<template>
  <button
    class="c-button btn"
    :class="{ 'btn-circle': circle, 'btn-primary': primary, 'btn-secondary': secondary }"
    v-bind="{ ...$attrs }"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
export default {
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.c-button {
  width: auto; /* Ajusta a largura automaticamente */
  height: auto; /* Ajusta a altura automaticamente */
  text-align: center;
  border: 2px solid #ccc; /* Cor da borda padrão */
  transition:
    background-color 0.125s ease-in,
    color 0.125s ease-in,
    border-color 0.125s ease-in;

  &:hover {
    background-color: #f5f5f5; /* Cor de fundo no hover */
    border-color: #aaa; /* Cor da borda no hover */
  }
}

.btn-circle {
  border-radius: 50%; /* Borda circular */
  padding: 0; /* Remove o padding padrão */
  background-color: #e0e0e0; /* Cor de fundo padrão para o botão circular */
  width: 49px; /* Largura do botão circular */
  height: 49px; /* Altura do botão circular */

  &:hover {
    background-color: #007bff; /* Cor de fundo no hover */
    border-color: #007bff; /* Cor da borda no hover */
    color: white; /* Cor do texto no hover */
  }
}

.btn-primary {
  background-color: #007bff; /* Cor de fundo padrão */
  border-color: #007bff; /* Cor da borda padrão */
  color: white; /* Cor do texto padrão */

  &:hover {
    background-color: #0056b3; /* Cor de fundo no hover */
    border-color: #0056b3; /* Cor da borda no hover */
  }
}

.btn-secondary {
  background-color: white; /* Cor de fundo padrão */

  &:hover {
    background-color: #f5f5f5; /* Cor de fundo no hover */
    border-color: #007bff; /* Cor da borda no hover */
    color: #007bff; /* Cor do texto no hover */
  }
}

.c-button:disabled {
  background-color: #e0e0e0; /* Cor de fundo quando desativado */
  border-color: #ccc; /* Cor da borda quando desativado */
  color: #999; /* Cor do texto quando desativado */
  cursor: not-allowed; /* Cursor indicando que está desativado */
}
</style>
