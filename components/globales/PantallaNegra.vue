<template>
  <div class="PantallaNegra" :class="animacion1" @click="salir">
    <div
      class="contenedor-Pantalla"
      :class="animacion2"
      :style="
        `
      width: ${x};
      height: ${y};
      `
      "
      @click="noSalir"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["x", "y"],

  data() {
    return {
      comprobante: true,
      animacion1: "entrada1",
      animacion2: "entrada2",
      promesa: new Promise(res =>
        setTimeout(() => {
          console.log("funciona");
          res();
        }, 1000)
      )
    };
  },

  async created() {
    await this.promesa;
  },

  methods: {
    salir() {
      if (this.comprobante) {
        this.animacion1 = "salida1";
        this.animacion2 = "salida2";

        setTimeout(() => {
          const { commit } = this.$store;

          commit("on_of_login");
          this.animacion1 = "entrada1";
          this.animacion2 = "entrada2";
        }, 500);
      }
      this.comprobante = true;
    },

    async noSalir() {
      this.comprobante = !this.comprobante;
    }
  }
};
</script>

<style lang="scss">
@keyframes entrada {
  from {
    background: rgba(0, 0, 0, 0);
  }

  to {
    background: rgba(0, 0, 0, 0.432);
  }
}
@keyframes bajar {
  from {
    margin-top: 150%;
  }

  50% {
    margin-top: 150%;
  }

  to {
    margin-top: 0%;
  }
}
@keyframes salida {
  from {
    background: rgba(0, 0, 0, 0.432);
  }
  50% {
    background: rgba(0, 0, 0, 0.432);
  }
  to {
    background: rgba(0, 0, 0, 0);
  }
}
@keyframes subir {
  from {
    margin-bottom: 0%;
  }

  to {
    margin-bottom: 150%;
  }
}

.entrada1 {
  animation-duration: 0.25s;
  animation-name: entrada;
  background: rgba(0, 0, 0, 0.432);

  .entrada2 {
    animation-duration: 0.5s;
    animation-name: bajar;
  }
}

.salida1 {
  animation-duration: 0.5s;
  animation-name: salida;
  background: #00000000;
  .salida2 {
    animation-duration: 0.25s;
    animation-name: subir;
    margin-bottom: 150%;
  }
}

.PantallaNegra {
  height: 100vh;
  width: 100vw;
  z-index: 20;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .contenedor-Pantalla {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
  }
}
</style>
