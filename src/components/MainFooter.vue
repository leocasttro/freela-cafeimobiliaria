<template>
  <footer class="container-fluid border-top mt-5">
    <div class="container mt-5 d-flex justify-content-around container-footer-tp">
      <div class="footer-logo">
        <div class="d-flex flex-column align-items-center">
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
      <div class="ft-div">
        <ul class="list-unstyled text-center" style="font-size: 15px">
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
      <div class="ft-div">
        <ul class="list-unstyled text-center" style="font-size: 15px">
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
      <div class="container d-flex justify-content-between container-footer-bt">
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
  font-size: 15px;
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
@media (max-width: 768px) {
  .container-footer-tp {
    display: flex;
    flex-wrap: wrap;
  }

  .footer-logo {
    flex: 1 1 70%; /* Aumenta o tamanho da primeira div (70% do espaço disponível) */
    min-width: 250px; /* Define uma largura mínima para a primeira div */
    display: flex; /* Ativa o Flexbox */
    flex-direction: column; /* Alinha os itens em coluna */
    align-items: center; /* Centraliza horizontalmente os itens */
    text-align: center; /* Centraliza o texto */
    padding: 10px; /* Adiciona um pouco de espaçamento interno */
    margin-bottom: 10px;
  }

  .container-footer-bt {
    flex-direction: column !important; /* Coloca o conteúdo em coluna */
    align-items: center !important; /* Centraliza o conteúdo horizontalmente */
  }

  /* Ajuste as outras divs conforme necessário */
  .ft-div {
    flex: 1 1 30%; /* Define o tamanho das outras divs (30% do espaço disponível) */
    min-width: 200px; /* Define uma largura mínima para as outras divs */
    margin-bottom: 10px;
  }
}
</style>
