<template>
  <fondo-gris class="Descripcion">
    <h2 :class="objeto.verificar && `verificado`">
      {{ objeto.titulo }}
    </h2>
    <p class="parrafo">{{ objeto.descripcion }}</p>
  </fondo-gris>
</template>

<script>
import FondoGris from "../globales/FondoGris.vue";

export default {
  components: { FondoGris },

  props: {
    objeto: Object
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
  z-index: 1;
}

.Descripcion {
  h2 {
    position: relative;
    font-size: 20px;
    width: auto;
    z-index: 3;
    text-align: center;

    &::before {
      @include affter;
      background-image: url("/usuario.png");
      width: 30px;
      height: 30px;
      border-radius: 0;
      top: 2px;
      left: -30px;
      z-index: 3;
    }
  }

  .verificado {
    &::after {
      @include affter;
      background-image: url("/verificado.svg");
      width: 20px;
      height: 20px;
      right: -25px;
      top: 8px;
      z-index: 3;
    }
  }

  .parrafo {
    text-align: center;
    width: 350px;
    z-index: 3;
  }
}
</style>
