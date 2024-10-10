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
        <div class="mx-5 fs-4">
          <a class="btn-custom" href=""><i class="fa-brands fa-facebook"></i></a>
          <a class="btn-custom" href=""><i class="fa-brands fa-instagram"></i></a>
          <a class="btn-custom" href=""><i class="fa-brands fa-youtube"></i></a>
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
.btn-custom {
  border-radius: 99999px;
  background-image: linear-gradient(#ddc080, #8b6243);
  border: #8b6243 2px solid;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  margin-right: 10px;
}

.btn-custom:hover {
  background-image: linear-gradient(#e4a92a, #ac7145);
}
</style>
