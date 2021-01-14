<template>
  <div class="usuarisos">
    <v-container>
      <h2>Usuarios famosos en nuestra plataforma</h2>
      <v-row class="lista-de-usuarios">
        <v-col
          v-for="i in 4"
          :key="i"
          class="columnas"
          cols="6"
          md="3"
          :class="`cuadrado${i}`"
        >
          <v-card class="fondo">
            <img :src="`/_nuxt/static/inicio/empres${i}.png`" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.usuarisos {
  height: 100%;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: "";
    background-image: url("../../static/palos1.svg");
    height: var(--tamano-de-palos-svg);
    width: var(--tamano-de-palos-svg);
    top: var(--ubicacion-de-palos-y);
    left: 0;
  }

  &::after {
    position: absolute;
    display: block;
    content: "";
    background-image: url("../../static/palos2.svg");
    height: var(--tamano-de-palos-svg);
    width: var(--tamano-de-palos-svg);
    bottom: -25%;
    right: -2%;
  }

  .lista-de-usuarios {
    padding: 50px 7%;
    position: relative;

    .cuadrado1 {
      position: relative;
      &::before {
        position: absolute;
        display: block;
        content: "";
        background-image: url("../../static/fondo1.svg");
        height: 100px;
        width: 100px;
        top: var(--ubicacion-de-cuadrados);
        left: var(--ubicacion-de-cuadrados);
      }
    }
    .cuadrado4 {
      position: relative;
      &::before {
        position: absolute;
        display: block;
        content: "";
        background-image: url("../../static/fondo1.svg");
        height: 100px;
        width: 100px;
        bottom: var(--ubicacion-de-cuadrados);
        right: var(--ubicacion-de-cuadrados);
      }
    }

    .columnas {
      height: 125px;

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
