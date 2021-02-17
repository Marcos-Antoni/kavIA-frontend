<template>
  <div class="footer">
    <v-row class="columnas">
      <v-col md="2" cols="12" class="centrado">
        <h2>Kav.ia</h2>
      </v-col>
      <v-col md="8" cols="12" class="lista">
        <ul v-for="objeto in lista" :key="objeto.nombre" class="pestana">
          <li>
            <h3 class="titulo">{{ objeto.nombre }}</h3>
          </li>
          <li class="contenido" v-for="con in objeto.contenido" :key="con">
            {{ con }}
          </li>
        </ul>
        <v-expansion-panels class="acordio">
          <v-expansion-panel
            class="acordeon-contenedor"
            v-for="objeto in lista"
            :key="objeto.nombre"
          >
            <v-expansion-panel-header class="titulo">
              {{ objeto.nombre }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="contenido">
              <li v-for="con in objeto.contenido" :key="con">
                {{ con }}
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col md="2" cols="12" class="centrado">
        <img src="/visa.svg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        {
          nombre: "Soluciones",
          contenido: ["comercio y pedidos", "medicina", "servicio"]
        },
        {
          nombre: "Soporte",
          contenido: [
            "Horario Lunes-Domingo 24/7",
            "+57 959 061 401",
            "soporte@symba.pe"
          ]
        },
        {
          nombre: "Otros paises",
          contenido: ["Guatemala", "Venezuela", "Colombia"]
        },
        {
          nombre: "Acceso",
          contenido: ["Login", "Registrarce", "Quiero trabajar con ustedes!"]
        },
        { nombre: "Ventas", contenido: ["+57 959 061 401", "ventas@symba.pe"] },
        {
          nombre: "Legal",
          contenido: ["terminos y condiciones", "Politicas de pribacidad"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.footer {
  background-color: var(--color-de-footer);
  display: flex;
  align-items: flex-end;
  height: 300px;

  @media screen and (max-width: 960px) {
    height: auto;
  }

  .columnas {
    height: 75%;

    @media screen and (max-width: 960px) {
      height: auto;
    }

    .centrado {
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 960px) {
        height: 150px;
      }
    }

    .lista {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .titulo {
        color: #343434;
        font-size: 15px;
      }
      .contenido {
        color: #252525;
      }

      .pestana {
        margin-right: 50px;
        display: block;

        @media screen and (max-width: 960px) {
          display: none;
        }

        .titulo {
          margin-bottom: 10px;
        }
      }

      .acordio {
        display: none;

        @media screen and (max-width: 960px) {
          display: block;
        }
        .acordeon-contenedor {
          background-color: var(--color-de-footer);

          .v-expansion-panel-header {
            display: flex;
            justify-content: center;
          }
          .titulo {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
