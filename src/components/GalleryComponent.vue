<template>
  <header class="gallery">
    <div class="row">
      <!-- Exibe as três imagens maiores na primeira linha -->
      <div class="col-md-4" v-for="(image, index) in largeImages" :key="index">
        <a href="javascript:void(0);" @click.prevent="openGallery(index)">
          <img :src="image.thumbnail" :alt="image.caption" class="img-fluid" />
        </a>
      </div>
    </div>
    <div class="row">
      <!-- Exibe as cinco imagens menores na segunda linha -->
      <div
        class="col-6 col-md-2"
        v-for="(image, index) in smallImages"
        :key="index + largeImages.length"
      >
        <a href="javascript:void(0);" @click.prevent="openGallery(index + largeImages.length)">
          <img :src="image.thumbnail" :alt="image.caption" class="img-fluid" />
        </a>
      </div>
      <!-- Mostra o contador de imagens restantes ao lado das imagens menores -->
      <div class="col-6 col-md-2" v-if="remainingImagesCount > 0">
        <a
          href="javascript:void(0);"
          @click.prevent="openGallery(maxLargeImages + maxSmallImages)"
          class="img-fluid remaining-images"
        >
          <img
            src="https://via.placeholder.com/300x200.png?text=+{{ remainingImagesCount }}"
            alt="Mais imagens"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

// Array de imagens (aqui você pode adicionar suas 30 imagens)
const images = [
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+1',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+1',
    caption: 'Imagem 1'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+2',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+2',
    caption: 'Imagem 2'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+3',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+3',
    caption: 'Imagem 3'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+4',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+4',
    caption: 'Imagem 4'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+5',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+5',
    caption: 'Imagem 5'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+6',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+6',
    caption: 'Imagem 6'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+7',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+7',
    caption: 'Imagem 7'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+8',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+8',
    caption: 'Imagem 8'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+9',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+9',
    caption: 'Imagem 9'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+10',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+10',
    caption: 'Imagem 10'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+11',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+11',
    caption: 'Imagem 11'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+12',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+12',
    caption: 'Imagem 12'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+13',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+13',
    caption: 'Imagem 13'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+14',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+14',
    caption: 'Imagem 14'
  },
  {
    url: 'https://via.placeholder.com/600x400.png?text=Imagem+15',
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Imagem+15',
    caption: 'Imagem 15'
  }
]

// Número máximo de imagens a serem exibidas
const maxLargeImages = 3
const maxSmallImages = 5

// Divide as imagens em grandes e pequenas
const largeImages = images.slice(0, maxLargeImages)
const smallImages = images.slice(maxLargeImages, maxLargeImages + maxSmallImages)
const remainingImagesCount = images.length - (largeImages.length + smallImages.length)

// Função para abrir a galeria com todas as imagens, iniciando pela imagem clicada
const openGallery = (startIndex = 0) => {
  Fancybox.show(
    images.map((image) => ({
      src: image.url,
      caption: image.caption
    })),
    { startIndex } // Começa a partir da imagem clicada
  )
}

// Inicializa o Fancybox para elementos com o atributo data-fancybox (caso seja necessário)
Fancybox.bind('[data-fancybox]', {
  autoStart: false
})
</script>

<style scoped>
.row > div {
  padding: 1px;
}

.img-fluid {
  width: 100%;
  height: auto;
  border-radius: 0;
  transition: transform 0.2s;
}

.img-fluid:hover {
  transform: scale(1.05);
}

.remaining-images {
  position: relative;
  text-align: center;
}

.remaining-images img {
  width: 100%;
}

.remaining-images::after {
  content: attr(data-count) ' imagens restantes';
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>
