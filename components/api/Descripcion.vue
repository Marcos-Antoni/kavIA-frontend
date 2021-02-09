<template>
  <div class="Descripcion">
    <v-row class="filas">
      <v-col cols="12" class="contenido">
        <h2 :class="objeto.verificar && `verificado`">
          {{ objeto.titulo }}
        </h2>
        <p class="parrafo">{{ objeto.descripcion }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},

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
  height: 250px;
  background-color: #f8f8f8;

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

  .filas {
    .contenido {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      width: 50vw;

      h2 {
        position: relative;
        font-size: 20px;
        width: auto;
        z-index: 3;

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
  }
}
</style>
