<template>
  <footer
    class="main-footer"
    style="
      display: flex;
      flex-direction: column;
      background-color: black;
      border-top: 1px solid gray;
    "
  >
    <nav>
      <div style="width: 100%; text-align: center; color: white">
        <h1 style="margin-bottom: 20px">Fale direto em nosso whatsapp:</h1>
        <div style="margin: 20px 0">
          <a href="https://api.whatsapp.com/send/?phone=5555999128466" target="_blank">
            <p style="left: 0; right: 0; top: 100px; margin: 5px 0; font-size: 12px">
              <font-awesome-icon
                :icon="['fab', 'whatsapp']"
                style="
                  color: black;
                  font-size: 22px;
                  background-color: green;
                  padding: 2px;
                  width: 56px;
                  height: 56px;
                  margin-right: -3px;
                  border-radius: 5px;
                "
              />
              <span
                style="
                  border: 3px solid green;
                  padding: 5px 20px 5px 10px;
                  font-size: 20px;
                  font-weight: bold;
                  color: green;
                  border-top-right-radius: 20px;
                  border-bottom-right-radius: 20px;
                "
              >
                (55) 99912 8466
              </span>
            </p>
          </a>
        </div>
        <p style="font-size: 12px; margin-top: 0">Rua Silva Jardim, 1417, Centro, Santa Maria/RS</p>
        <p style="font-size: 12px; margin-top: 0">
          R. 3300, nº 341, Sala 12, Balneário Camboriú/SC
        </p>
        <p style="font-size: 12px; margin-top: 0">
          Café Negócios Imobiliários Ltda. * Creci 24.707J *
        </p>
      </div>
    </nav>
  </footer>
</template>

<script></script>

<style>
.main-footer__logo svg {
  width: 140px;
  color: #673c29;
}

#whatsModal {
  width: 100%;
}

#whatsModal .c-input__field-wrapper {
  width: 87% !important;
  border-top-right-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
  border: 1px solid #34af23 !important;
  height: 34px !important;
  float: left !important;
  border-left: none !important;
}

#whatsModal textarea {
  width: 87% !important;
  border-top-right-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
  border: 1px solid #34af23 !important;
  height: 75px !important;
  float: left !important;
  border-left: none !important;
}

.bwhats-main-content {
  right: 5% !important;
  top: 100px !important;
  position: fixed;
  z-index: 10000;
  margin-bottom: 30px !important;
  display: none !important;
}

.bwhats {
  background-color: #128c7e;
  border: 4px solid #128c7e;
  border-radius: 50px;
}

.balao-whats {
  position: fixed;
  z-index: 99999;
  background: #128c7e;
  padding: 8px;
  border-radius: 15px;
  right: 3% !important;
  bottom: 24% !important;
  color: #fff;
  font-size: 15px;
  text-align: center;
}
</style>
