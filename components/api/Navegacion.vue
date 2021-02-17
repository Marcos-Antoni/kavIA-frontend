<template>
  <div class="menu-de-api">
    <ul class="listado-api">
      <li
        v-for="({ nombre, encender }, numero) in menu"
        :key="numero"
        :class="encender && `activar`"
        @click="moverse(numero)"
      >
        {{ nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import FunG from "../funciones/globales";

export default {
  data() {
    return {
      menu: [
        { nombre: "Interfáz gráfica", encender: true },
        { nombre: "conexión via API", encender: false },
        { nombre: "Suscripción y uso", encender: false }
      ]
    };
  },

  methods: {
    moverse(num) {
      const { commit } = this.$store;
      this.menu = FunG.activar_desactibar_estilos(this.menu, num);

      commit("menus/cambiar_api", num);
    }
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

@mixin seleccion {
  @include affter();
  background-color: var(--color-azul);
  width: 100%;
  height: 5px;
  left: 0;
  border-radius: 3px;
  animation-duration: 0.5s;
  animation-name: entrada;
}

/* animaciones */
@keyframes entrada {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
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
      cursor: pointer;
    }

    .activar {
      position: relative;

      &::after {
        @include seleccion();
        bottom: -8px;
      }
    }
  }
}
</style>
