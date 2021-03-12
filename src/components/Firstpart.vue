<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");

#rocket {
  background-image: url("https://weon.com.br/wp-content/uploads/2020/06/banner-principal-weon.jpg");
  background-size: cover;
  padding: 110px;
}

#title {
  font-size: 44px;
  color: #ffffff;
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
}

#describe {
  font-size: 17px;
  color: #ffffff;
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  text-align: justify;
  line-height: 1.5em;
}

.btn_describe {
  color: #ffffff;
}

@media (max-width: 481px) {
  #rocket {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0px 0px;
    width: auto;
  }

  #title {
    font-size: 30px;
  }

  #describe {
    font-size: 11px;
    text-align: left;
  }
}
</style>

<template>
  <v-row no-gutters id="rocket">
    <v-container>
      <v-row>
        <v-col>
          <h6 class="title-main">
            <span id="title"
              >A evolução do <br />
              Omnichannel</span
            >
          </h6>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h2>
            <span id="describe">
              Acelere os resultados do seu contact center com uma solução
              <br />completa, de fácil aprendizado, que enriquece o seu mailing
              e
              <br />
              otimiza a sua operação constantemente.
            </span>
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn color="#00e2b5" elevation="2" x-large rounded>
            <span class="btn_describe">Agende uma demonstração</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {};
</script>
