<template>
  <div class="datos">
    <v-row class="filas">
      <v-col
        v-for="(dato, numero) in datos"
        :key="numero"
        cols="12"
        sm="6"
        md="3"
        class="caja"
      >
        <div class="caja-contenedor" :class="`linea${numero}`">
          <h3 class="titulo">{{ dato.mensage }}</h3>
          <p class="mensage">{{ dato.subMensaje }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["datos"]
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

@mixin lados {
  @include affter();
  background-color: var(--color-azul);
  height: 80px;
  width: 5px;
  top: 20px;
}

@mixin alto {
  @include affter();
  background-color: var(--color-azul);
  height: 5px;
  width: 80px;
  left: 10px;
}

.datos {
  .filas {
    padding: 0 15px;

    .caja {
      display: flex;
      justify-content: center;
      height: 150px;

      .caja-contenedor {
        position: relative;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;

        width: 100%;
        height: 100%;

        padding-right: 10px;
        padding-bottom: 10px;

        background-color: #fff;
        box-shadow: 2px 2px 10px #ccc;

        .titulo {
          font-size: 18px;
        }

        .mensage {
          color: var(--color-boton-de-componente);
        }
      }

      .linea0 {
        &::after {
          @include lados();
          left: 0;
        }
      }

      .linea1 {
        &::after {
          @include alto();
          top: 0;
        }
      }

      .linea2 {
        &::after {
          @include alto();
          bottom: 0;
        }
      }

      .linea3 {
        &::after {
          @include lados();
          right: 0;
        }
      }
    }
  }
}
</style>
