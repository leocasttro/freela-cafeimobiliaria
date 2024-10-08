<template>
  <div class="position-relative">
    <header :class="['header-bg', routeName]" class="w-100">
      <NavBar />
      <HeaderComponent />
    </header>
    <MainComponent>
      <h2>Imóveis para comprar em</h2>
      <select class="form-select select-custom mt-2 w-25">
        <option selected class="label-select text-center">Santa Maria</option>
        <option class="text-center" value="1">One</option>
        <option class="text-center" value="2">Two</option>
        <option class="text-center" value="3">Three</option>
      </select>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in cardData" :key="slide.id">
          <CardComponent :title="slide.title" :text="slide.text" :image="slide.image" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <div class="d-flex justify-content-center mt-4">
        <button class="btn-custom">Ver mais ofertas</button>
      </div>

      <SectionGrid />

      <CSection style="margin-top: 150px">
        <article></article>
        <div class="reasons">
          <div class="d-flex justify-content-center mb-5">
            <h3>Motivos para escolher a Café Inteligência Imobiliária</h3>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <div class="d-flex justify-content-center" style="margin-top: 20%; width: 362px">
                  <img src="../assets/img/wizard.svg" class="card-img-top w-50" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Resultados digitais</h5>
                  <p class="card-text">
                    Somos especialistas na geração de resultados digitais. Investimos pesado nos
                    principais marketplaces do mercado imobiliário e outros meios digitais de
                    divulgação e prospecção de clientes.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="d-flex justify-content-center mb-4" style="margin-top: 20%">
                  <img src="../assets/img/online_friends.svg" class="card-img-top w-50" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Qualidade de informação</h5>
                  <p class="card-text">
                    Priorizamos entregar aos nossos clientes um conteúdo relevante e de alto valor
                    informacional (fotos, vídeos, descrições, etc.) permitindo uma análise e
                    visitação mais assertiva.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div
                  class="d-flex justify-content-center mb-4"
                  style="margin-top: 20%; width: 362px"
                >
                  <img src="../assets/img/hire.svg" class="card-img-top w-50" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Relações transparentes</h5>
                  <p class="card-text">
                    Em um mercado tão competitivo, conduzimos nossas ações com total transparência e
                    imparcialidade, zelando pela segurança nos negócios imobiliários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-md mt-5 reasons"></div>
      </CSection>
    </MainComponent>

    <div class="container-fluid d-flex align-items-center justify-content-center container-custom">
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
      <div>
        <h1>Encontrar nas proximidades:</h1>
        <div class="mt-5">
          <button class="mx-1 btn-custom-w">UFN</button>
          <button class="mx-2 btn-custom-w">Calçadão</button>
          <button class="mx-1 btn-custom-w">UFSM</button>
        </div>
        <div class="mt-4">
          <h2>Bairros mais pesquisados</h2>
          <div class="row text-center mx-1 my-5" style="height: 150px">
            <div class="col rounded align-content-center bg-secondary text-white me-3">teste</div>
            <div class="col rounded align-content-center bg-secondary text-white me-3">teste</div>
            <div class="col rounded align-content-center bg-secondary text-white me-3">teste</div>
            <div class="col rounded align-content-center bg-secondary text-white me-3">teste</div>
            <div class="col rounded align-content-center bg-secondary text-white me-3">teste</div>
            <div class="col rounded align-content-center bg-secondary text-white me-3">teste</div>
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
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import NavBar from '@/components/NavBar.vue'
import MainComponent from '@/components/MainComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import 'vue3-carousel/dist/carousel.css'
import SectionGrid from '@/components/SectionGrid.vue'
import CSection from '@/components/UI/CSection.vue'

const route = useRoute()
const routeName = route.name === 'home' ? 'home-bg' : 'other-bg'

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

const settings = {
  itemsToShow: 4,
  snapAlign: 'center'
}

const breakpoints = {
  1024: {
    itemsToShow: 4,
    snapAlign: 'start'
  }
}
</script>

<style scoped>
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

header > * {
  position: relative;
  z-index: 2;
}

.container-header {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
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
  border: 2px solid gray; /* Define a largura da borda e cor */
  background-color: white;
  font-size: 0.75rem;
  width: 100px;
  height: 40px;
}

.titulo {
  margin-top: 6rem;
}

.container-custom {
  background-image: url('../assets/img/home__notifications.jpg');
  background-repeat: no-repeat;
  background-position: right center;
  height: 25vh; /* para fazer com que ocupe toda a altura da janela */
}
</style>
