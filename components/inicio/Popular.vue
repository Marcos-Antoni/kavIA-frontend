<template>
  <div class="populares">
    <v-container>
      <h2>Más vendidos</h2>
      <p>las inteligencias artificiales mas vendidas de la plataforma</p>
      <v-row class="lista-de-populares">
        <v-col
          class="columna-de-obgeto"
          v-for="(obgeto, key) in listPopulares"
          :key="key"
          md="3"
          sm="6"
          cols="12"
        >
          <v-card class="obgeto-de-lista">
            <v-container>
              <div class="titulo-del-obgeto">
                <div class="imagen-del-desarrollador"></div>
                <h3 class="titulo titulo-h3">{{ obgeto.titulo }}</h3>
              </div>
              <div class="descripcon-del-obgeto">
                <p>
                  {{ obgeto.descripcion }}
                </p>
              </div>
              <div class="puntuacion-del-producto">
                <p class="puntuacion">{{ obgeto.puntuacion }}</p>
                <div class="precio titulo">
                  <p>{{ obgeto.precio }}$ XP</p>
                </div>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Popular",

  data() {
    return {
      listPopulares: [
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        },
        {
          img: "",
          titulo: "veríficacion tarjeta de credito",
          descripcion:
            "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
          puntuacion: 8.9,
          precio: 0.05
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.populares {
  width: 100%;
  margin-top: 20px;

  .lista-de-populares {
    padding: 20px 7%;

    .columna-de-obgeto {
      height: 250px;

      .obgeto-de-lista {
        height: 100%;
        width: 100%;

        .titulo-del-obgeto {
          height: 30%;
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          .imagen-del-desarrollador {
            height: auto;
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: blue;
          }

          h3 {
            width: 90%;
            height: auto;
            display: inline-block;

            font-size: 13px;
            color: #000;
          }
        }

        .descripcon-del-obgeto {
          height: 40%;
          p {
            width: 80%;
            font-size: 12px;
            color: #696969;
          }
        }

        .puntuacion-del-producto {
          height: 20%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          .puntuacion {
            color: #868686;
          }

          .precio {
            width: 50%;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(221, 219, 219);
            font-weight: bold;
            border-radius: 5px;
          }

          p {
            font-size: 13px;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
