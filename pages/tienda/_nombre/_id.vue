<template>
  <div class="api">
    <section id="descripcion">
      <Descripcion :objeto="listPopulares[0]" />
    </section>
    <section id="datos">
      <Datos :datos="dataSet" />
    </section>
    <v-row class="secciones">
      <v-col cols="12" md="2">
        <section id="menu-api">
          <Navegacion />
        </section>
      </v-col>
      <v-col cols="12" md="10">
        <section id="interfaz-api">
          <InterfazGrafica v-show="menu == 0" />
          <Conexion v-show="menu == 1" />
        </section>
      </v-col>
    </v-row>
    <footer>
      <footer-v />
    </footer>
  </div>
</template>

<script>
import Datos from "../../../components/globales/Datos";
import Navegacion from "../../../components/api/Navegacion";
import FooterV from "../../../components/header/FooterV.vue";
import Descripcion from "../../../components/api/Descripcion";
import InterfazGrafica from "../../../components/api/InterfazGrafica";
import Conexion from "../../../components/api/Conexion";
import { mapState } from "vuex";

export default {
  components: {
    Descripcion,
    Datos,
    Navegacion,
    InterfazGrafica,
    Conexion,
    FooterV,
    Conexion
  },

  data() {
    return {
      id: this.$route.params.id
    };
  },

  created() {
    console.log(this.menu);

    if (process.client) {
      window.onscroll = e => {
        // console.log(window.scrollY);
      };
    }
  },

  computed: {
    ...mapState({
      listPopulares: "listPopulares"
    }),
    menu() {
      return this.$store.state.menus.api;
    },

    dataSet() {
      return [
        { mensage: "Estatus del servicio", subMensaje: "Activo" },
        {
          mensage: `Peticiones ${this.listPopulares[0].usos}`,
          subMensaje: "Recianetes"
        },
        {
          mensage: `$${this.listPopulares[0].precio} X`,
          subMensaje: "Peticiones"
        },
        { mensage: "74% Crec.", subMensaje: "Mensual" }
      ];
    }
  },

  methods: {}
};
</script>

<style lang="scss">
.api {
  #descripcion {
    height: auto;
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
