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
  <v-row no-gutters class="background-form">
    <v-container>
      <v-row>
        <v-col sm="12" md="6">
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
        <v-col sm="12" md="6">
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
          <v-row justify="end">
            <v-col cols="auto">
              <v-btn
                class="btn_contact"
                color="#00e2b5"
                x-large
                rounded
                :loading="loading"
                v-model="edit"
                v-if="!edit"
                @click="save"
              >
                <span>Solicitar Contato</span>
              </v-btn>
              <v-btn
                class="btn_contact"
                color="#00e2b5"
                x-large
                rounded
                v-model="edit"
                v-if="edit == true"
                @click="update"
              >
                <span>Editar Contato</span>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#002244"
                    x-large
                    rounded
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark> mdi-format-list-bulleted-square </v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Minhas Solicitações</v-card-title>
                  <ul v-if="list_contact.length != 0 || null">
                    <v-list-item v-for="(item, i) in list_contact" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          >Empresa: {{ item.company }}</v-list-item-title
                        >
                        <v-list-item-subtitle
                          >Nome: {{ item.name }}</v-list-item-subtitle
                        >
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-btn
                          @click="mode_edit(`${item._id}`)"
                          icon
                          color="primary"
                        >
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </v-list-item-action>
                      <v-list-item-action>
                        <v-btn
                          :loading="loading"
                          @click="deleteContact(`${item._id}`)"
                          icon
                          color="red"
                        >
                          <v-icon>mdi-trash-can</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </ul>
                  <v-card-text v-else
                    >Você não possui nenhuma solicitação</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false"> Fechar </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import ApiJsonBox from "../services/Jsonbox";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contact: [],
  },
  mutations: {
    SAVE_CONTACT(state, value) {
      state.contact = value;
    },
  },
});

export default {
  data: () => ({
    id: "",
    contact: {
      name: "",
      company: "",
      email: "",
      phone: "",
      qtda_employee: "",
    },
    edit: false,
    dialog: false,
    loading: false,
    list_contact: {},
  }),

  mounted() {
    this.read();
  },

  methods: {
    async save() {
      this.loading = true;
      await ApiJsonBox.create(this.contact);
      store.commit("SAVE_CONTACT", {
        contact: this.contact,
      });
      !this.loading;
      this.reload_page();
    },

    mode_edit(id) {
      this.edit = true;
      this.dialog = false;

      let contact = this.list_contact.find((contact) => contact._id === id);

      this.id = id;
      this.contact.name = contact.name;
      this.contact.company = contact.company;
      this.contact.email = contact.email;
      this.contact.phone = contact.phone;
      this.contact.qtda_employee = contact.qtda_employee;
    },

    async update() {
      this.loading = true;
      await ApiJsonBox.update(this.id, this.contact);
      this.edit = false;
      !this.loading;
      this.reload_page();
    },

    async read() {
      this.list_contact = await ApiJsonBox.read();
    },

    async deleteContact(id) {
      await ApiJsonBox.deleteContact(id);
      this.reload_page();
    },

    reload_page: () => location.reload(),
  },
};
</script>
