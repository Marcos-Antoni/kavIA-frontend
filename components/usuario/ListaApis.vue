<template>
  <div class="lista-apis">
    <v-container>
      <h2>Tus APIs creadas</h2>
      <ListaTargetas class="apis-apis" :lista="listPopulares" :extra="true">
        <v-card class="nueva-api">
          <h3>
            Crear API
          </h3>
          <img src="/mas.svg" />
        </v-card>
      </ListaTargetas>
    </v-container>
  </div>
</template>

<script>
import ListaTargetas from "../globales/ListaTargetas";
import { mapState } from "vuex";
export default {
  components: { ListaTargetas },
  computed: {
    ...mapState(["listPopulares"])
  }
};
</script>

<style lang="scss">
.lista-apis {
  // background: red;

  .apis-apis {
    margin-top: 10px;

    .nueva-api {
      border: #ccc 2px dashed;
      box-shadow: none;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
