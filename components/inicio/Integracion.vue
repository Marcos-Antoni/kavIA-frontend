<template>
  <div class="integracion">
    <v-container>
      <v-row class="filas">
        <v-col class="columnas " md="3" sm="12" cols="12">
          <div class="info">
            <h2>
              Fácil integración con la plaforma
            </h2>
            <p>
              Puedes usar nuestra interfaz gráfica con la cual se te hará muy
              sencillo consumir el servicio o lo puedes integrar via API ;)
            </p>
          </div>
        </v-col>
        <v-col
          v-for="i in 3"
          :key="i"
          class="columnas"
          :class="
            ` ${i == 2 ? `aparecer-mobiles-grandes` : ``} ${
              i == 3 ? `aparecer-pc` : ``
            }`
          "
          cols="12"
          md="3"
          sm="6"
        >
          <template v-if="i == 1">
            <Targetas :obgeto="listPopulares[i]" class="espaciado" />
            <v-btn class="boton-ir espaciado">ir a la tienda </v-btn>
          </template>
          <template v-if="i == 2">
            <Targetas :obgeto="listPopulares[i]" class="espaciado" />
            <Targeta-decoratiba
              class="espaciado"
              titulo="Integración para empresas"
              contenido="leer docuementación -->"
              url="#"
            />
          </template>
          <template v-if="i == 3">
            <Targeta-decoratiba
              class="espaciado puntos"
              titulo="Integración para empresas"
              contenido="leer docuementación -->"
              url="#"
            />
            <Targetas :obgeto="listPopulares[i]" class="espaciado" />
            <Targetas :obgeto="listPopulares[i + 1]" class="espaciado" />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Targetas from "../globales/Targetas";
import TargetaDecoratiba from "../globales/TargetaDecoratiba";
export default {
  components: { TargetaDecoratiba },
  data() {
    return {
      listPopulares: [
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: "true"
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: true
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: false
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: true
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: false
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: false
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05,
          verificar: false
        }
      ]
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

.integracion {
  padding-left: 30px;
  position: relative;
  .filas {
    height: var(--tamano-de-la-integracion);
    @media screen and (max-width: 960px) {
      padding-top: 90px;
    }

    &::after {
      @include affter();
      width: 100px;
      height: 145px;
      top: 0;
      left: -25px;
      background-image: url("/inicio/figuraIntegracion1.svg");
    }

    &::before {
      @include affter();
      width: 665px;
      height: 1000px;
      top: 0;
      right: -26px;
      background-image: url("/inicio/figuraIntegracion2.svg");
      z-index: 0;
    }

    .columnas {
      height: var(--tamano-de-la-integracion-columnas);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      .info {
        height: auto;
        h2 {
          position: relative;
          margin-bottom: 20px;
          &::after {
            @include affter();
            position: absolute;
            background-color: var(--color-azul);
            height: 5px;
            width: 45%;
            bottom: 0px;

            @media screen and (max-width: 600px) {
              width: 25%;
            }
          }
          &::before {
            @include affter();
            position: absolute;
            background-color: var(--color-azul-2);
            height: 5px;
            width: 45%;
            top: 45%;
            right: 8%;
            @media screen and (max-width: 960px) {
              display: none;
            }
          }
        }
      }

      .espaciado {
        margin-top: 20px;
      }

      .boton-ir {
        background: var(--color-azul);
        width: 80%;
        font-family: "Galano";
        color: #fff;
        font-weight: bold;
      }
    }

    .puntos {
      position: relative;

      &::after {
        @include affter();
        background-image: url("/fondo1.svg");
        height: var(--tamano-de-cuadricula);
        width: var(--tamano-de-cuadricula);
        top: var(--ubicacion-de-cuadrados);
        right: var(--ubicacion-de-cuadrados);
        z-index: -1;
      }
    }
    .aparecer-pc {
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
    .aparecer-mobiles-grandes {
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
}
</style>
