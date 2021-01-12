<template>
  <div class="inicio">
    <v-row no-gutters class="priemra-bista">
      <v-col cols="12" align-self="end" class="columna1">
        <v-row no-gutters>
          <v-col sm="5" md="3" class="navegacion">
            <nav>
              <ul class="lista">
                <li id="seleccionado">Para Empresas</li>
                <li>Para Desarrolladores</li>
              </ul>
            </nav>
          </v-col>

          <v-col sm="6" md="6" class="boton">
            <v-btn block class="btn"
              >Obtén 100$ totalmente gratis para nuevos usuarios</v-btn
            >
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="columna2">
        <div class="globos globo1"></div>
        <div class="globos globo2"></div>
        <div class="globos globo3"></div>
        <div class="titulo centrar">
          <h2>MarketPlace #1 de API´s.</h2>
          <p>
            vende,compra y conecta APIs de todo el mundo.hecho por
            desarrolladores para desarrolladores
          </p>
        </div>
        <form class="formulario centrar">
          <v-text-field
            class="input"
            :label="ejemplo_Iput"
            :placeholder="ejemplo_Iput"
            solo
          ></v-text-field>
        </form>
      </v-col>

      <v-col cols="12" class="columna3"></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* priemra-bista */

      ejemplo_Iput: "Ejem:Inteligencia artificial para ventas"
    };
  }
};
</script>

<style lang="scss">
/* mixins */

.inicio {
  .columna1 {
    height: 10%;
    .boton {
      .btn {
        background-color: var(--color-azul);
        border-radius: 0;
        text-transform: none;
        color: #ffffff;
        span {
          font-family: "Galano";
          letter-spacing: 0;
          font-weight: bold;
        }
      }
    }
    .navegacion {
      display: flex;
      align-items: flex-end;
      nav {
        width: 100%;
        .lista {
          width: 90%;
          display: flex;
          align-items: flex-end;

          list-style-type: none;
          li {
            display: inline-block;
            width: auto;
            margin-left: 20px;
            position: relative;
            padding-bottom: 5px;
            font-size: 15px;
            &::before {
              position: absolute;
              display: block;
              content: "";
              width: var(--subrayado);
              height: 5px;
              background-color: var(--color-azul);
              border-radius: 10px;
              bottom: 0;
            }
          }
          #seleccionado {
            --subrayado: 100%;
          }
        }
      }
    }
  }
  .columna2 {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .globos {
      position: absolute;
      width: var(--tamano-de-globos);
      height: var(--tamano-de-globos);
      transition-property: left;
      transition-property: top;
      transition-duration: 55s;
    }
    .globo1 {
      background: url("../../static/inicio/globo1.svg");
      background-size: 50px;
      background-repeat: no-repeat;
      &:hover {
        top: 50px;
        left: 20px;
      }
    }
    .globo2 {
      background: url("../../static/inicio/globo2.svg");
      background-size: 50px;
      background-repeat: no-repeat;
      left: 10%;
    }
    .globo3 {
      background: url("../../static/inicio/globo3.svg");
      background-size: 50px;
      background-repeat: no-repeat;
      left: 20%;
    }

    .centrar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .titulo {
      height: auto;
      text-align: center;
      p {
        width: auto;
        width: 40%;
      }
      h2 {
        width: auto;
        width: 40%;
      }
    }
    .formulario {
      height: auto;
      margin-top: 20px;
      .input {
        width: 40%;
      }
    }
  }
}
</style>
