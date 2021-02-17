<template>
  <div class="componentes-buscador">
    <v-row class="arriba-componentes">
      <v-col cols="12" sm="6" class="gratis">
        <p class="texto" @click="gratis_on_of">Gratis</p>
      </v-col>
      <v-col cols="12" sm="6" class="obciones">
        <v-btn
          v-for="(boton, pocicion) in lista_Botones"
          :key="pocicion"
          class="boton"
          :class="`${boton.encender && `encendido`}`"
          @click="actibar_boton(pocicion)"
          >{{ boton.nombre }}</v-btn
        >
      </v-col>
    </v-row>

    <v-container class="contenedor-componente">
      <v-row class="componentes-abajo">
        <v-col
          class="columna-de-obgeto"
          v-for="(obgeto, key) in lista"
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
import Targetas from "../globales/Targetas";
/* funciones */
import FunG from "../funciones/globales";

export default {
  components: { Targetas },

  data() {
    return {
      on_of: false,
      lista_Botones: [
        { nombre: "Todos", encender: true },
        { nombre: "Verificados", encender: false },
        { nombre: "Sin Verificados", encender: false }
      ]
    };
  },

  computed: {
    lista() {
      return this.$store.getters.listaDepurada;
    }
  },

  methods: {
    gratis_on_of(event) {
      const { commit } = this.$store;
      if (this.on_of) {
        event.target.style.cssText = `--left-pocicion: 43px`;
      } else {
        event.target.style.cssText = `--left-pocicion: 87px`;
      }
      commit("gratis_on_of", !this.on_of);
      this.on_of = !this.on_of;
    },

    actibar_boton(ubicacion) {
      const { commit } = this.$store;

      this.lista_Botones = FunG.activar_desactibar_estilos(
        this.lista_Botones,
        ubicacion
      );

      commit("modificar_verificacion", ubicacion);
    }
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

@mixin boton-on-of {
  @include affter();
  top: -3px;
  left: 43px;
}

.componentes-buscador {
  .arriba-componentes {
    .gratis {
      padding-left: var(--separacion-de-boton-on-off);

      @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
      }

      .texto {
        position: relative;
        color: var(--color-boton-de-componente);
        font-family: "Helveltica";
        cursor: pointer;

        &::after {
          @include boton-on-of();
          background-color: var(--color-de-footer);
          border-radius: 20px;
          width: 70px;
          height: 25px;

          z-index: 1;
        }

        &::before {
          @include boton-on-of();
          background-color: var(--color-azul);
          border-radius: 50%;
          width: 25px;
          height: 25px;
          left: var(--left-pocicion);

          /* en left +44 para trancision */
          z-index: 3;

          transition: left 0.3s;
        }
      }
    }

    .obciones {
      display: flex;
      justify-content: flex-end;
      padding-right: var(--padding-de-botones-de-lista);

      @media screen and (max-width: 600px) {
        display: flex;
        justify-content: space-around;
      }

      .boton {
        margin-right: var(--separacion-de-botones-de-lista);
        width: auto;
        border-radius: 6px;
        font-family: "Galano";
        font-weight: bold;
        background-color: #fff;
        color: var(--color-boton-de-componente);
        border: 2px var(--color-boton-de-componente) solid;
        transition: background-color 0.3s;
      }

      .encendido {
        background-color: var(--color-azul);
        color: #fff;
      }
    }
  }

  .contenedor-componente {
    margin-top: 80px;
  }
}
</style>
