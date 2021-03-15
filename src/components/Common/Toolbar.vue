<template>
  <v-container>
    <v-toolbar flat color="#243465" dark app>
      <div class="d-flex align-center">
        <v-img
          alt="Weon Logo"
          class="shrink mr-2"
          contain
          src="https://weon.com.br/wp-content/uploads/2020/09/Logo_WeON_Oficial-1-1.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="(item, i) in menu" :key="i">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in menu" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: "Home" },
      { title: "Vem aí o WeON 4.0" },
      { title: "Tudo sobre contact center" },
    ],
  }),
};
</script>
