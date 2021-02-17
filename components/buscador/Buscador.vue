<template>
  <fondo-gris class="barra-de-busqueda">
    <form class="formulario">
      <label class="buscar" for="buscar">Buscar</label>
      <v-text-field
        class="input"
        :label="ejemplo_Iput"
        :placeholder="ejemplo_Iput"
        id="buscar"
        solo
        append-icon="mdi-magnify"
      ></v-text-field>
    </form>
  </fondo-gris>
</template>

<script>
import FondoGris from "../globales/FondoGris.vue";
export default {
  components: { FondoGris },
  data() {
    return {
      ejemplo_Iput: "Ejem: Inteligencia artificial para ventas"
    };
  }
};
</script>

<style lang="scss">
/* @mixin affter {
  position: absolute;
  display: block;
  content: "";
} */

.barra-de-busqueda {
  .formulario {
    width: var(--tamano-de-buscador);
    height: auto;

    .buscar {
      font-weight: bold;
      font-family: "Galano";
      font-size: 20px;
    }

    .input {
      .v-input__slot {
        background-color: var(--color-de-files);
      }
    }
  }
}
</style>
