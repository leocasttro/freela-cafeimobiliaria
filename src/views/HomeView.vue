<template>
  <div class="position-relative">
    <NavBar />
    <HeaderComponent />
    <MainComponent>
      <div class="container-md" style="height: auto">
        <div>
          <h2>Imóveis para comprar em</h2>
        </div>

        <div class="row mb-2">
          <div class="col-custon">
            <div class="custom-select" @blur="openSelect1 = false">
              <div class="selected" :class="{ open: openSelect1 }" @click="toggleSelect(1)">
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
        <div class="container-md container-carousel-custom">
          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in cardData" :key="slide.id">
              <CardComponent :title="slide.title" :text="slide.text" :image="slide.image" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <button class="btn-custom">Ver mais ofertas</button>
        </div>

        <SectionGrid />

        <ReasonComponent />
      </div>
    </MainComponent>

    <div
      class="p-5 container-fluid d-flex align-items-center justify-content-center container-custom"
    >
      <div class="text-center">
        <h2>Ainda não encontrou o imóvel que você deseja?</h2>
        <p>
          Nos conte um pouco sobre suas preferências e deixe nossos corretores encontrarem para
          você.
        </p>
        <button class="btn-custom mt-3" style="width: 250px">Quero encontrar um imóvel</button>
      </div>
    </div>

    <MainComponent>
      <div class="container-md">
        <h1>Encontrar nas proximidades:</h1>
        <div class="mt-5">
          <button class="mx-1 btn-custom-w">
            <i
              class="em em-house_with_garden"
              aria-role="presentation"
              aria-label="HOUSE WITH GARDEN"
            ></i>
            UFN
          </button>
          <button class="mx-2 btn-custom-w">
            <i class="em em-motorway" aria-role="presentation" aria-label=""></i> Calçadão
          </button>
          <button class="mx-1 btn-custom-w">
            <i
              class="em em-house_with_garden"
              aria-role="presentation"
              aria-label="HOUSE WITH GARDEN"
            ></i>
            UFSM
          </button>
        </div>
        <div class="mt-4">
          <h2>Bairros mais pesquisados</h2>
          <div class="row text-center mx-1 my-5 row-custom" style="height: 150px">
            <div class="col rounded align-content-center text-white me-3 col-custom">teste</div>
            <div class="col rounded align-content-center text-white me-3 col-custom">teste</div>
            <div class="col rounded align-content-center text-white me-3 col-custom">teste</div>
            <div class="col rounded align-content-center text-white me-3 col-custom">teste</div>
            <div class="col rounded align-content-center text-white me-3 col-custom">teste</div>
            <div class="col rounded align-content-center text-white me-3 col-custom">teste</div>
          </div>
        </div>
        <div>
          <h2>Pesquisas selecionandas para você</h2>
          <div class="container mt-5">
            <div class="row align-items-start">
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
            </div>
            <div class="row align-items-start">
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
            </div>
            <div class="row align-items-start">
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
            </div>
          </div>
        </div>
      </div>
    </MainComponent>
    <MainFooter />
  </div>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { onMounted, ref } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import NavBar from '@/components/NavBar.vue'
import MainComponent from '@/components/MainComponent.vue'
import 'vue3-carousel/dist/carousel.css'
import SectionGrid from '@/components/SectionGrid.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainFooter from '@/components/MainFooter.vue'
import ReasonComponent from '@/components/ReasonComponent.vue'

const cardData = ref([
  {
    id: 1,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 1',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 2,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 2',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 3,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 3',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 4,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 4',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 5,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 5',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 6,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 6',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 7,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 7',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 8,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 8',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 9,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 9',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 10,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 10',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 11,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 11',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  },
  {
    id: 12,
    title: 'N. Sra. Medianeira',
    text: 'Descrição do Card 12',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc0Mjd8MHwxfGFsbHw1fHx8fHx8fHwxNjk5Mjg0NzY0&ixlib=rb-1.2.1&q=80&w=1080'
  }
])

const emit = defineEmits(['input'])

const selected1 = ref('')
const openSelect1 = ref(false)
const options1 = ref([]) // Dados fictícios

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

const settings = {
  itemsToShow: 4,
  snapAlign: 'center'
}

const breakpoints = {
  1024: {
    itemsToShow: 4,
    snapAlign: 'start'
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'start'
  },
  375: {
    itemsToShow: 1,
    snapAlign: 'start'
  }
}
onMounted(() => {
  loadCity()
})
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
  border: 1px solid rgb(226, 222, 222);
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

.btn-custom-w {
  border-radius: 25px;
  border: 2px solid #e2e8f0; /* Define a largura da borda e cor */
  background-color: white;
  font-size: 0.75rem;
  width: 100px;
  height: 40px;
}

.titulo {
  margin-top: 6rem;
}

.col-custom {
  background-color: #a6a6a6;
}

.container-custom {
  background-image: url('../assets/img/home__notifications.jpg');
  background-repeat: no-repeat;
  background-position: right center;
  height: 25vh; /* para fazer com que ocupe toda a altura da janela */
}

@media (max-width: 768px) {
  .custom-select {
    width: 100%; /* O select ocupará 100% da largura */
    margin-bottom: 10px; /* Espaçamento entre os selects */
  }

  .container-custom {
    background-image: none; /* Remove o background em telas menores */
  }

  .container-custom,
  .btn-custom {
    width: 100% !important;
  }

  .col-custom {
    width: 48% !important; /* Cada coluna ocupará 48% da largura */
    margin-bottom: 10px !important; /* Espaçamento entre as colunas */
  }

  .row-custom {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-between !important; /* Espaçamento uniforme entre as colunas */
  }
  .container-carousel-custom {
    width: 100vw; /* Ocupa 100% da largura da janela */
    margin-left: -16px; /* Remove qualquer margem padrão do container */
    margin-right: -16px; /* Remove qualquer margem padrão do container */
  }

  /* Para ajustar o espaçamento dos slides, se necessário */
  .carousel-slide {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
