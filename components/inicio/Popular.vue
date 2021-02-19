<template>
  <div class="populares">
    <v-container>
      <h2>Más vendidos</h2>
      <p>las inteligencias artificiales mas vendidas de la plataforma</p>

      <ListaTargetas class="lista-de-populares" :lista="listPopulares" />
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ListaTargetas from "../globales/ListaTargetas";

export default {
  components: { ListaTargetas },
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
    padding-top: 20px;
  }
}
</style>
