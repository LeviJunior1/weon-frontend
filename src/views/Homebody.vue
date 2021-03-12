<template>
  <v-row no-gutters>
    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <FormPart />
  </v-row>
</template>

<script>
import FirstPart from "../components/Firstpart";
import SecondPart from "../components/Secondpart";
import ThirdPart from "../components/Thirdpart";
import FormPart from "../components/Formpart";

export default {
  components: {
    FirstPart,
    SecondPart,
    ThirdPart,
    FormPart,
  },
};
</script>