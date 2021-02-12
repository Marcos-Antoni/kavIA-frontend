<template>
  <div class="barra-de-busqueda">
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      ejemplo_Iput: "Ejem: Inteligencia artificial para ventas"
    };
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.barra-de-busqueda {
  height: 250px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  .formulario {
    width: var(--tamano-de-buscador);
    height: auto;

    &::after {
      @include affter();
      background-image: url("/figuraIntegracion1.svg");
      width: 75px;
      height: 250px;
      top: 75px;
      left: -20px;
    }

    &::before {
      @include affter();
      background-image: url("/pelotas.svg");
      width: 33px;
      height: 54px;
      top: 75px;
      right: 0px;
    }

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
