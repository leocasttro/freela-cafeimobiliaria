<template>
  <footer class="container-fluid border-top mt-5">
    <div class="container mt-5 d-flex justify-content-around">
      <div>
        <div class="d-flex flex-column align-items-start">
          <img
            src="../assets/img/logos/1.png"
            alt="Logo"
            class="d-inline-block align-text-top mb-2"
            style="width: 150px"
          />
          <div class="text-center">
            <span class="mb-1" style="font-size: small"
              >Central de Atendimento (Vendas e Locações)</span
            >
            <p class="mb-0 fs-5"><i class="fa-brands fa-whatsapp fs-3"></i> (55) 99912 8466</p>
          </div>
        </div>
      </div>
      <div>
        <ul class="list-unstyled text-center">
          <li class="fw-bold">
            <a href="#" class="text-decoration-none custom-link text-secondary">Imóveis</a>
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary"
              >Anuncie seu imóvel</a
            >
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary">Compre um imóvel</a>
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary">Alugue um imóvel</a>
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary">Empreendimentos</a>
          </li>
        </ul>
      </div>
      <div>
        <ul class="list-unstyled text-center">
          <li class="fw-bold">
            <a href="#" class="text-decoration-none custom-link text-secondary">A Café</a>
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary">Sobre nós</a>
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary">Cashback social</a>
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary"
              >Área do Locatário</a
            >
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary"
              >Área do Proprietário</a
            >
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary"
              >Termo de Privacidade</a
            >
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary"
              >Desocupação de Imóvel alugado</a
            >
          </li>
          <li class="mt-2">
            <a href="#" class="text-decoration-none custom-link text-secondary"
              >Regulamento - Minha Casa Minha Vida</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="p-4" style="background-color: #edf2f7">
      <div class="container d-flex justify-content-between">
        <span class="align-content-center" style="font-size: small"
          >Café Negócios Imobiliários Ltda. * Creci 24.707J * Rua Silva Jardim, 1417, Centro, Santa
          Maria/RS | R. 3300, nº 341, Sala 12, Balneário Camboriú/SC
        </span>
        <div class="mx-5 d-flex">
          <a class="btn-custom rounded-circle text-decoration-none me-2" href=""
            ><i class="fa-brands fa-facebook icon-custom"></i
          ></a>
          <a class="btn-custom rounded-circle text-decoration-none me-2" href=""
            ><i class="fa-brands fa-instagram icon-custom"></i
          ></a>
          <a class="btn-custom rounded-circle text-decoration-none me-2" href=""
            ><i class="fa-brands fa-youtube icon-custom"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-link {
  color: inherit;
  transition: all 0.3s ease;
}

.custom-link:hover {
  text-decoration: underline !important; /* Sublinhado ao passar o mouse */
  color: #0056b3; /* Cor do link ao passar o mouse (efeito padrão do Bootstrap) */
}

.icon-custom {
  font-size: 20px;
}
.btn-custom {
  width: 30px; /* Ajuste o tamanho conforme necessário */
  height: 30px; /* Deixe o botão quadrado */
  border-radius: 50%; /* Faz o botão ser um círculo */
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  color: #fff;
  display: flex; /* Centraliza o ícone */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
}

.btn-custom:hover {
  background-image: linear-gradient(#e4a92a, #ac7145);
}
</style>
