<template>
  <div class="contenedor">
    <HeaderV class="header" />
    <nuxt class="nuxt" />
  </div>
</template>

<script>
import HeaderV from "../components/header/HeaderV";
export default {
  components: { HeaderV }
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

/* estilos */
* {
  @include contenido();
  h1 {
    @include titulo;
  }
  h2 {
    @include titulo;
  }
  list-style-type: none;
}
.titulo {
  @include titulo;
}
html,
body {
  width: 100%;
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
  /* .header {
  } */
  .nuxt {
    margin: 0;
    height: 90%;
  }
}
</style>
