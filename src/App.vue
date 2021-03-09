<template>
  <v-app>
    <v-app-bar app flat color="#243465">
      <Toolbar />
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Toolbar from "./components/Common/Toolbar";

export default {
  name: "App",

  components: {
    Home,
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
