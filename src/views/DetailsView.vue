<template>
  <NavBar />
  <div class="container-fluid p-0">
    <div v-if="isMobile" class="mb-4">
      <Carousel v-bind="settingsHeader" :breakpoints="breakpoints">
        <Slide v-for="slide in cardData" :key="slide.id">
          <img :src="slide.image" class="w-100" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div v-else>
      <GalleryComponent />
    </div>
    <div class="container-lg">
      <div class="d-flex justify-content-between justify-content-md-center position-relative">
        <section :style="{ width: isMobile ? '100%' : '70%' }">
          <div class="mt-4 d-flex justify-content-center justify-content-md-start">
            <button class="btn-custom me-md-2 mb-2 mb-md-0">
              <i class="fa-solid fa-camera me-2" style="font-size: 20px"></i> Fotos
            </button>
            <button class="btn-custom-w">
              <i class="fa-solid fa-location-dot me-2" style="font-size: 20px"></i> Mapa
            </button>
          </div>
          <div
            class="d-flex flex-md-row flex-column justify-content-md-between justify-content-center mt-4"
          >
            <div class="title">
              <h3>Apartamento à Venda com 405,93m², 3 quartos e 4 vagas</h3>
              <p>Nossa Senhora de Fátima, Santa Maria - RS</p>
            </div>
            <div v-if="isMobile" style="width: 100%">
              <PriceAsideComponent />
            </div>
            <div v-else class="thumb">
              <img src="../assets/img/backs-home/santa-maria.png" class="thumb-img" alt="..." />
            </div>
          </div>
          <div class="border-top border-secondary-subtle mt-4">
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 mt-3 g-0">
              <div class="col text-center mb-4">
                <span class="fa-solid fa-bed mb-3 icon-custom" />
                <span class="d-block desc-custom">Dormitórios</span>
                <p class="fw-bold sub-desc-custom">3 (1 suíte)</p>
              </div>
              <div class="col text-center mb-4">
                <span class="fa-solid fa-shower mb-3 icon-custom" />
                <span class="d-block desc-custom">Banheiros</span>
                <p class="fw-bold sub-desc-custom">4</p>
              </div>
              <div class="col text-center mb-4">
                <span class="fa-solid fa-car mb-3 icon-custom" />
                <span class="d-block desc-custom">Garagem</span>
                <p class="fw-bold sub-desc-custom">4 vagas</p>
              </div>
              <div class="col text-center mb-4">
                <span class="fa-solid fa-sun mb-3 icon-custom" />
                <span class="d-block desc-custom">Posição solar </span>
                <p class="fw-bold sub-desc-custom">Norte, Sul, Oeste</p>
              </div>
              <div class="col text-center mb-4">
                <span class="fa-solid fa-chess-board mb-3 icon-custom" />
                <span class="d-block desc-custom">Tipo de piso </span>
                <p class="fw-bold sub-desc-custom">Laminado, Porcelanato</p>
              </div>
              <div class="col text-center mb-4">
                <span class="fa-solid fa-door-open mb-3 icon-custom" />
                <span class="d-block desc-custom">Situação </span>
                <p class="fw-bold sub-desc-custom">Usado</p>
              </div>
              <div class="col text-center mb-4">
                <span class="fa-solid fa-sort mb-3 icon-custom" />
                <span class="d-block desc-custom">Elevador </span>
                <p class="fw-bold sub-desc-custom">Sim</p>
              </div>
              <div class="col text-center mb-4">
                <span
                  class="fa-solid fa-ruler-combined mb-3 icon-custom"
                  style="font-size: 1.5rem"
                />
                <span class="d-block desc-custom">Área Privativa </span>
                <p class="fw-bold sub-desc-custom">405.93 m²</p>
              </div>
            </div>
          </div>
          <div class="mt-4 border-top border-secondary-subtle">
            <div class="mt-4">
              <h5>Detalhes do imóvel</h5>
              <p>
                Apresento a você este apartamento que mais parece uma casa, aqui este imóvel vai
                muito além da metragem! Imóvel diferenciado com 2 terraços piscina e espaços
                incríveis para a família. São 405m2 área privativa + terraços; Possui um amplo
                living 4 ambientes com lareira escritório; 3 dormitórios sendo...
              </p>
            </div>
            <button class="btn btn-success">Mostrar mais</button>
          </div>
          <div class="mt-4 border-top border-secondary-subtle">
            <h5 class="fw-bold mt-4">Comodidades do imóvel</h5>
            <div class="row mt-4">
              <!-- Primeira Coluna -->
              <div class="col-md-4 fw-medium">
                <p><i class="fa-solid fa-circle-check me-2" />Interfone</p>
                <p><i class="fa-solid fa-circle-check me-2" />Churrasqueira</p>
                <p><i class="fa-solid fa-circle-check me-2" />Sala de estar</p>
                <p><i class="fa-solid fa-circle-check me-2" />Gás individual</p>
              </div>

              <!-- Segunda Coluna -->
              <div class="col-md-4 fw-medium">
                <p><i class="fa-solid fa-circle-check me-2" />Sacada</p>
                <p><i class="fa-solid fa-circle-check me-2" />Área de serviço</p>
                <p><i class="fa-solid fa-circle-check me-2" />Banheiro social</p>
                <p><i class="fa-solid fa-circle-check me-2" />Estar social</p>
              </div>

              <!-- Terceira Coluna -->
              <div class="col-md-4 fw-medium">
                <p><i class="fa-solid fa-circle-check me-2" />Banheiro auxiliar</p>
                <p><i class="fa-solid fa-circle-check me-2" />Lavabo</p>
                <p><i class="fa-solid fa-circle-check me-2" />Elevador</p>
                <p><i class="fa-solid fa-circle-check me-2" />Cozinha</p>
              </div>
            </div>
          </div>
          <div class="mt-4 border-top border-secondary-subtle">
            <h5 class="fw-bold mt-4">Comodidades do imóvel</h5>
            <div class="row mt-4">
              <!-- Primeira Coluna -->
              <div class="col-md-4 fw-medium">
                <p><i class="fa-solid fa-circle-check me-2" />Interfone</p>
                <p><i class="fa-solid fa-circle-check me-2" />Churrasqueira</p>
                <p><i class="fa-solid fa-circle-check me-2" />Sala de estar</p>
                <p><i class="fa-solid fa-circle-check me-2" />Gás individual</p>
              </div>

              <!-- Segunda Coluna -->
              <div class="col-md-4 fw-medium">
                <p><i class="fa-solid fa-circle-check me-2" />Sacada</p>
                <p><i class="fa-solid fa-circle-check me-2" />Área de serviço</p>
                <p><i class="fa-solid fa-circle-check me-2" />Banheiro social</p>
                <p><i class="fa-solid fa-circle-check me-2" />Estar social</p>
              </div>

              <!-- Terceira Coluna -->
              <div class="col-md-4 fw-medium">
                <p><i class="fa-solid fa-circle-check me-2" />Banheiro auxiliar</p>
                <p><i class="fa-solid fa-circle-check me-2" />Lavabo</p>
                <p><i class="fa-solid fa-circle-check me-2" />Elevador</p>
                <p><i class="fa-solid fa-circle-check me-2" />Cozinha</p>
              </div>
            </div>
          </div>
          <div v-if="!isMobile" class="mt-4 border-top border-bottom border-secondary-subtle">
            <h5 class="fw-bold mt-4">Imoveis similares</h5>
            <Carousel v-bind="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in cardData" :key="slide.id">
                <CardComponent :title="slide.title" :text="slide.text" :image="slide.image" />
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </section>
        <div v-if="!isMobile" class="mt-5" style="width: 80%">
          <PriceAsideComponent />
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="container-md position-relative text-center">
        <img
          src="../assets/img/cta_bg.jpg"
          alt=" "
          class="w-100"
          style="height: 20vh; object-fit: cover"
        />
        <div class="position-absolute top-50 start-50 translate-middle">
          <h1 class="mb-3">Tem dúvidas sobre este imóvel?</h1>
          <button class="btn btn-custom w-75">Fale conosco</button>
        </div>
      </div>
    </div>
  </div>
  <MainFooter style="min-height: auto" />
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import MainFooter from '@/components/MainFooter.vue'
import NavBar from '@/components/NavBar.vue'
import PriceAsideComponent from '@/components/PriceAsideComponent.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

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

const sectionWidth = ref('70%')

// Função para atualizar a largura da seção com base na largura da tela
const updateSectionWidth = () => {
  sectionWidth.value = isMobile.value ? '100%' : '70%' // Ajuste o valor de 768 conforme necessário
}

// Estado para controlar o modo mobile
const isMobile = ref(window.innerWidth <= 768)

// Função para atualizar o estado de isMobile
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

// Listener para ajustar o layout ao redimensionar a tela
onMounted(() => {
  window.addEventListener('resize', handleResize)
  updateSectionWidth()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const settingsHeader = {
  itemsToShow: 1,
  snapAlign: 'center'
}

const settings = {
  itemsToShow: 4,
  snapAlign: 'center'
}

const breakpoints = {
  1024: {
    itemsToShow: 2.8,
    snapAlign: 'start'
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: #fff;
  color: #35373a;
  min-height: 100vh;
}
.thumb-img {
  width: 100px;
  height: 108px;
  border-radius: 10px;
  object-fit: cover;
}

.icon-custom {
  font-size: 1.5rem;
}

.desc-custom {
  font-size: 0.75rem;
}
.sub-desc-custom {
  font-size: 0.875rem;
}

.btn-custom {
  border-radius: 25px;
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  width: 120px;
  height: 50px;
}

.btn-custom:hover {
  background-image: linear-gradient(#e4a92a, #ac7145);
}

.btn-custom-w {
  border-radius: 25px;
  border: 2px solid gray; /* Define a largura da borda e cor */
  background-color: white;
  font-size: 15px;
  font-weight: 700;
  width: 120px;
  height: 50px;
}
.col-md-4 p {
  margin-bottom: 8px; /* Ajuste para diminuir o espaço entre os itens */
}
</style>
