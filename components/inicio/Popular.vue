<template>
  <div class="populares">
    <v-container>
      <h2>Más vendidos</h2>
      <p>las inteligencias artificiales mas vendidas de la plataforma</p>
      <v-row class="lista-de-populares">
        <v-col
          class="columna-de-obgeto"
          v-for="(obgeto, key) in listPopulares"
          :key="key"
          md="3"
          sm="6"
          cols="12"
        >
          <Targetas :obgeto="obgeto" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Targetas from "../globales/Targetas";
export default {
  components: { Targetas },
  name: "Popular",

  computed: {
    ...mapState(["listPopulares"])
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
.populares {
  width: 100%;
  margin-top: 20px;

  .lista-de-populares {
    padding: 20px 7%;
  }
}
</style>
