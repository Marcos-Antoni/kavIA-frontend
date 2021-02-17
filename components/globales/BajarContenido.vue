<template>
  <div class="bajar-contenido" :style="`height: ${tamano ? tamano : ` 800px`}`">
    <v-card
      class="bajar-titulo"
      :style="`height: ${TamTitulo ? TamTitulo : `7`}%`"
    >
      <slot name="titulo">
        <h2>Response</h2>
      </slot>
    </v-card>
    <v-card class="bajar-tipo" :style="`height: ${TamTipo ? TamTipo : `7`}%`">
      <slot name="tipo">
        <ul class="listado-tipo">
          <li
            v-for="({ nombre, encender }, numero) in secciones"
            :key="numero"
            :class="encender && `seleccion`"
            @click="moverse(numero)"
          >
            {{ nombre }}
          </li>
        </ul>
      </slot>
    </v-card>
    <v-card
      class="bajar-respuesta"
      :style="`height: ${TamRespuesta ? TamRespuesta : `86`}%`"
    >
      <slot name="respuesta"> </slot>
    </v-card>
  </div>
</template>

<script>
import FunG from "../funciones/globales";
export default {
  props: ["TamRespuesta", "TamTitulo", "TamTipo", "tamano"],

  data() {
    return {
      secciones: [
        { nombre: "JSON", encender: true },
        { nombre: "Interpretacion grefica", encender: false }
      ]
    };
  },

  methods: {
    moverse(num) {
      this.secciones = FunG.activar_desactibar_estilos(this.secciones, num);
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

@mixin seleccion {
  @include affter();
  background-color: var(--color-azul);
  width: 100%;
  height: 5px;
  left: 0;
  border-radius: 3px;
  animation-duration: 0.5s;
  animation-name: entrada;
}

/* animaciones */
@keyframes entrada {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.bajar-contenido {
  width: var(--tamano-de-pestanas-de-interfas);
  margin-top: 30px;
  margin-bottom: 30px;

  .bajar-titulo {
    width: 100%;
    height: 5%;
    border-radius: 0;
    padding-left: 10px;
    z-index: 2;
    display: flex;
    align-items: center;

    h2 {
      font-size: 19px;
    }
  }

  .bajar-tipo {
    background-color: #f0f0f0;

    .listado-tipo {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      li {
        position: relative;
        margin-left: 20px;
        font-size: 18px;
        color: #686868;
        font-family: "Galano";
        cursor: pointer;
      }

      .seleccion {
        &::after {
          @include seleccion();
          width: 100;
          // left: -10px;
          bottom: 0;
        }
      }
    }
  }

  .bajar-respuesta {
    width: 100%;
    height: 95%;
    border-radius: 0%;
    background: #444444;
    z-index: 1;
    color: #fff;
  }
}
</style>
