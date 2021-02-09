<template>
  <div class="menu-de-api">
    <ul class="listado-api">
      <li v-for="(item, nuemro) in menu" :key="nuemro" :class="`item${nuemro}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ["Interfáz gráfica", "conexión via API", "Suscripción y uso"]
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

.menu-de-api {
  height: 250px;
  @media screen and (max-width: 960px) {
    height: auto;
  }

  .listado-api {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width: 960px) {
      height: auto;

      flex-direction: row;
      justify-content: space-evenly;
    }

    li {
      margin-bottom: 20px;
      color: var(--color-boton-de-componente);
      font-size: 15px;
    }

    .item0 {
      position: relative;

      &::after {
        @include affter();
        background-color: var(--color-azul);
        width: 100%;
        height: 5px;
        bottom: -8px;
        border-radius: 3px;
      }
    }
  }
}
</style>
