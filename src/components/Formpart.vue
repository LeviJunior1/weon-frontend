<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");

.background-form {
  background-color: #4261ba;
}

h2 {
  margin-top: 20px;
}

h2 span {
  font-family: Raleway;
  color: #ffffff;
  font-weight: 900;
  text-transform: uppercase;
}

.message {
  font-family: Raleway;
  text-align: justify;
  color: #ffffff;
  font-weight: 500;
  margin-top: 20px;
}

.btn_contact {
  margin-bottom: 5%;
}

span {
  color: #ffffff;
  text-transform: capitalize;
}
</style>

<template>
  <div class="background-form">
    <v-container>
      <v-row>
        <v-col>
          <h2>
            <span
              >Pronto para acelerar<br />
              a sua operação?</span
            >
          </h2>
          <p class="message">
            Deixe sua mensagem e um dos nossos especialistas<br />
            entrará em contato para te mostrar tudo que a sua<br />
            empresa pode ter com o WeON.
          </p>
        </v-col>
        <v-col>
          <v-row>
            <v-col
              ><v-text-field
                v-model="contact.name"
                label="Nome"
                required
                dark
              ></v-text-field
            ></v-col>
            <v-col>
              <v-text-field
                v-model="contact.company"
                label="Empresa"
                required
                dark
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-text-field
                v-model="contact.email"
                label="E-mail"
                required
                dark
              >
              </v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                v-model="contact.phone"
                label="Telefone"
                required
                dark
              >
              </v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="contact.qtda_employee"
                label="Número de posições de atendimento"
                required
                dark
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-end">
              <v-btn
                class="btn_contact"
                color="#00e2b5"
                x-large
                rounded
                @click="save"
              >
                <span>Solicitar Contato</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contact: [],
  },
  mutations: {
    SAVE_CONTACT(state, value) {
      state.contact = value;
      console.log(value.contact);
    },
  },
});

export default {
  data: () => ({
    contact: {
      name: "",
      company: "",
      email: "",
      phone: "",
      qtda_employee: "",
    },
  }),

  methods: {
    save() {
      store.commit("SAVE_CONTACT", {
        contact: this.contact,
      });
    },
  },
};
</script>
