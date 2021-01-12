<template>
  <div class="contenedor">
    <header class="header">
      <v-row>
        <v-col cols="12" class="columna">
          <p>header</p>
        </v-col>
      </v-row>
    </header>
    <nuxt class="nuxt" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

/* variables */
:root {
  --color-azul: #406aff;
  --titulo: "Galano";
  --contenido: "Helveltica";

  // inicio
  --subrayado: 0;
  --tamano-de-globos: 75px;
}

/* estilos */
* {
  @include contenido();
  h1 {
    @include titulo;
  }
  h2 {
    @include titulo;
  }
}
html,
body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  div {
    height: 100%;
    div {
      height: 100%;
      .contenedor {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.contenedor {
  .header {
    margin: 0;
    height: 10%;
    width: 100%;
    background-color: red;
    display: block;
    .columna {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .nuxt {
    margin: 0;
    height: 90%;
  }
}
</style>
