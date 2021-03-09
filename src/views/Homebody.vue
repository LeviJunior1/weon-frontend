<template>
  <div>
    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <FormPart />
  </div>
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