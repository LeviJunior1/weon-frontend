<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");

#background-image {
  background-image: linear-gradient(
      180deg,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("https://weon.com.br/wp-content/uploads/2020/06/banner_weon.jpg");
  background-size: cover;
  padding: 80px;
  width: 70%;
}

#img-about-us {
  width: "60%";
}

.title-main {
  font-size: 30px;
  font-weight: bold;
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  color: #4261ba;
  text-transform: uppercase;
}

.describe {
  font-size: medium;
  font-family: Verdana, Tahoma, sans-serif;
  font-weight: normal;
}

.second-describe {
  font-size: 13px;
  color: #333333;
  font-weight: normal;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
}

@media (max-width: 481px) {
  #background-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0px;
  }
}
</style>

<template>
  <v-row no-gutters id="background-image">
    <v-container>
      <v-row>
        <v-col>
          <v-img
            id="img-about-us"
            src="https://weon.com.br/wp-content/uploads/2019/10/QUEM_somos_Tela_04_03.png"
          ></v-img>
        </v-col>
        <v-col>
          <h2>
            <span class="title-main"
              >Nosso compromisso<br />
              é com o sucesso do<br />
              nosso cliente</span
            >
          </h2>
          <h3>
            <span class="describe">
              Aumentar a produtividade do seu atendimento é possível com WeON.
              Desenvolvemos e implantamos soluções com suporte aos processos de
              planejamento, operação, controle e qualidade da sua central de
              atendimento.
            </span>
          </h3>
          <h3>
            <span class="second-describe">
              <strong> inovação está no nosso dna. </strong>
            </span>
          </h3>
          <h3>
            <span class="describe">
              Uma empresa com experiência de 16 anos no mercado de tecnologia,
              profissionais especializados, suporte ativo e atendimento
              personalizado durante todo onboarding, além de uma área dedicada
              ao sucesso do nosso cliente, por isso WeON é a sua escolha.
              Estamos em constante evolução para entregar soluções cada vez mais
              completas e inovadoras.
            </span>
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>