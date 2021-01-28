<template>
  <div class="automatizar">
    <v-container>
      <h2>Automatiza apps</h2>
      <p>De manera extremadamente sencilla</p>
      <v-row class="lista-de-usuarios">
        <v-col
          v-for="i in 4"
          :key="i"
          class="columnas"
          cols="12"
          sm="6"
          md="3"
          :class="`cuadrado${i}`"
        >
          <template v-if="i == 1 || i == 4">
            <Targetas :obgeto="listPopulares[i]" />
          </template>
          <template v-else>
            <v-card :class="`libro${i}`"></v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Targetas from "../globales/Targetas";
export default {
  computed: {
    ...mapState(["listPopulares"])
  }
};
</script>

<style lang="scss">
@mixin cuadricula {
  height: var(--tamano-de-cuadricula);
  width: var(--tamano-de-cuadricula);
}

@mixin paloDelLibre() {
  @include affter();
  width: var(--tamano-de-palos-de-libro);
  height: 4px;
  background-color: #000;
  top: 50%;
}

@mixin pastaDeLibro {
  @include affter();
  background-color: #ccc;
  height: 25%;
  width: 15%;
  top: 37.5%;
  border-radius: 5px;
}

@mixin desaparecer {
  @media screen and (max-width: 600px) {
    display: none;
  }
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
}
.automatizar {
  height: 100%;
  position: relative;

  .lista-de-usuarios {
    margin-top: 30px;
    padding: 50px 7%;
    position: relative;
    height: auto;

    .cuadrado1 {
      position: relative;
      &::before {
        @include affter();
        @include cuadricula();
        background-image: url("../../static/fondo1.svg");
        top: var(--ubicacion-de-cuadrados);
        left: var(--ubicacion-de-cuadrados);
      }
    }

    .cuadrado4 {
      position: relative;
      &::before {
        @include affter();
        @include cuadricula();
        background-image: url("../../static/fondo1.svg");
        bottom: var(--ubicacion-de-cuadrados);
        right: var(--ubicacion-de-cuadrados);
      }
    }

    .libro2 {
      @include desaparecer();
      &::after {
        left: var(--ubicacion-de-palos-de-libro);
        @include paloDelLibre();
      }
      &::before {
        @include pastaDeLibro();
      }
    }
    .libro3 {
      @include desaparecer();
      &::after {
        right: var(--ubicacion-de-palos-de-libro);
        @include paloDelLibre();
      }
      &::before {
        @include pastaDeLibro();
        right: 0;
      }
    }
    .columnas {
      height: auto;
      .fondo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        img {
          height: auto;
          width: auto;
          padding: 20px;
        }
      }
    }
  }
}
</style>
