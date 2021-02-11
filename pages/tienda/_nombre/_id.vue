<template>
  <div class="api">
    <section id="descripcion">
      <Descripcion :objeto="listPopulares[0]" />
    </section>
    <section id="datos">
      <Datos :objeto="listPopulares[0]" />
    </section>
    <v-row class="secciones">
      <v-col cols="12" md="2">
        <section id="menu-api">
          <Navegacion />
        </section>
      </v-col>
      <v-col cols="12" md="10">
        <section id="interfaz-api">
          <InterfazGrafica />
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Datos from "../../../components/api/Datos";
import Descripcion from "../../../components/api/Descripcion";
import Navegacion from "../../../components/api/Navegacion";
import InterfazGrafica from "../../../components/api/InterfazGrafica";
import { mapState } from "vuex";

export default {
  components: { Descripcion, Datos, Navegacion, InterfazGrafica },

  data() {
    return {
      id: this.$route.params.id
    };
  },

  created() {
    if (process.client) {
      window.onscroll = e => {
        // console.log(window.scrollY);
      };
    }
  },

  computed: {
    ...mapState(["listPopulares"])
  },

  methods: {}
};
</script>

<style lang="scss">
.api {
  #descripcion {
    height: auto;
    margin-top: 12px;
  }

  #datos {
    margin-top: -39px;
    height: auto;
    max-width: 100vw;
  }

  .secciones {
    height: auto;
    margin-top: 25px;
    max-width: 100vw;

    #menu-api {
      height: auto;
    }

    #interfaz-api {
      height: auto;
    }
  }
}
</style>
