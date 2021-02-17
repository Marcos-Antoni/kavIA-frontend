<template>
  <header class="arriba">
    <v-row class="contenedor-arriba">
      <v-col cols="2" xl="1" class="columna-titulo">
        <v-btn @click.stop="drawer = !drawer" icon class="menu">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <h1>kav.ia</h1>
        <img src="/logoKavIa.svg" class="logo" />
      </v-col>
      <v-col cols="4" class="columnas-lista">
        <nav class="navegacion">
          <ul class="lista">
            <li v-for="(link, numero) in links" :key="numero">
              <nuxt-link class="link" :to="link.url">
                {{ link.nombre }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </v-col>
      <v-col cols="6" class="columnas-login">
        <v-btn class="boton registro">registro</v-btn>
        <v-btn class="boton login" @click="loguiar">login</v-btn>
      </v-col>
    </v-row>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item
          v-for="(link, numero) in links"
          :key="numero"
          class="menu-oculto"
        >
          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link class="link" :to="link.url">
                {{ link.nombre }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        { url: "#", nombre: "Explorar" },
        { url: "#", nombre: "Subir mi API" },
        { url: "#", nombre: "Soporte" }
      ]
    };
  },
  methods: {
    loguiar() {
      const { commit } = this.$store;

      commit("on_of_login");
    }
  }
};
</script>

<style lang="scss">
.arriba {
  height: 53px;
  width: 100%;
  // max-width: 100vw;
  display: block;
  background: #fff;
  box-shadow: 0 1px 10px #ccc;
  z-index: 15;

  .contenedor-arriba {
    width: 100%;

    .col {
      padding-bottom: 0;
    }
    .col-xl-1 {
      padding-bottom: 0;
    }

    .columna-titulo {
      padding-left: var(--pading-header);
      display: flex;
      align-items: center;
      @media screen and (max-width: 1904px) {
        justify-content: flex-end;
      }
      @media screen and (max-width: 1264px) {
        justify-content: flex-start;
      }
      .menu {
        display: none;
        @media screen and (max-width: 960px) {
          display: block;
        }
      }
      h1 {
        font-size: 25px;
      }
      .logo {
        padding-left: 10px;
      }
    }

    .columnas-lista {
      display: flex;
      align-items: center;

      .navegacion {
        width: 100%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 960px) {
          display: none;
        }

        .lista {
          width: 100%;
          display: flex;

          li {
            margin-right: 20px;
            .link {
              font-family: "Galano";
              color: #090909;
              text-decoration: none;
              font-size: 14px;
            }
          }
        }
      }
    }

    .columnas-login {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .boton {
        height: 75%;
        margin-right: var(--margin-de-botones-de-header);
        width: auto;
        .v-btn__content {
          font-weight: bold;
        }
      }

      .registro {
        background-color: rgba(0, 45, 206, 0.06);
        color: var(--color-azul);
      }

      .login {
        background-color: var(--color-azul);
        color: #fff;
      }
    }

    .menu-oculto {
      height: 10px;
      .link {
        color: #090909;
        font-family: "Galano";
        text-decoration: none;
      }
    }
  }
}
</style>
