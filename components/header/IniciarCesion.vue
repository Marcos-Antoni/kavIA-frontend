<template>
  <div class="IniciarSesion" @click="salir">
    <div class="contenedor-sesion" @click="noSalir">
      <div class="contenido-sesion">
        <h2>Iniciar sesion</h2>

        <form class="formulario-sesion">
          <label for="Usuario">Usuario</label>
          <v-text-field class="input" id="Usuario" solo></v-text-field>

          <label for="Usuario">Usuario</label>
          <v-text-field class="input" id="Usuario" solo></v-text-field>

          <p class="parrafo-sesion">
            ¿Olvidaste tu contraseña?
            <nuxt-link class="link" to="#">Click aqui</nuxt-link>
          </p>
          <div class="botones-login">
            <v-btn
              v-for="i in 2"
              :key="i"
              class="boton-red-social"
              :class="`imagen${i}`"
            ></v-btn>
          </div>
          <v-btn type="submit" block class="login-sesion">Login</v-btn>
        </form>
      </div>

      <v-btn block class="boton-crear-cuenta">
        Crear cuenta
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comprobante: true
    };
  },

  methods: {
    salir() {
      if (this.comprobante) {
        const { commit } = this.$store;

        commit("on_of_login");
      }
      this.comprobante = true;
    },

    noSalir() {
      this.comprobante = !this.comprobante;
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

@mixin redes-sociales {
  @include affter();
  box-shadow: none;
  height: var(--tamano-de-logo-de-red-social);
  width: var(--tamano-de-logo-de-red-social);
}

.IniciarSesion {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.432);
  z-index: 20;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .contenedor-sesion {
    width: var(--tamano-delogin);
    height: 80%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .contenido-sesion {
      width: 80%;
      height: 90%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .formulario-sesion {
        width: 100%;

        label {
          font-family: "Helveltica";
          color: var(--color-boton-de-componente);
          font-size: 18px;
        }

        .input {
          margin-top: 10px;
          height: auto;
          .v-input__slot {
            background-color: var(--color-de-files);
          }
        }

        .link {
          text-decoration: none;
          color: var(--color-azul);
        }

        .botones-login {
          height: auto;
          margin-top: 10px;

          display: flex;
          justify-content: space-evenly;

          .boton-red-social {
            width: 40%;
            position: relative;
            background-color: #fff;
          }

          .imagen1 {
            &::after {
              @include redes-sociales;
              background-image: url("/google.svg");
            }
          }

          .imagen2 {
            &::after {
              @include redes-sociales;
              background-image: url("/fasebook.svg");
            }
          }
        }

        .login-sesion {
          margin-top: 20px;
          background-color: var(--color-azul);

          .v-btn__content {
            font-family: "Galano";
            color: #fff;
            font-size: 15px;
          }
        }

        .parrafo-sesion {
          margin: 0;
        }
      }
    }

    .boton-crear-cuenta {
      .v-btn__content {
        font-family: "Galano";
      }
    }
  }
}
</style>
