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
          <Targetas :obgeto="obgeto" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Targetas from "../globales/Targetas";
export default {
  components: { Targetas },
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
.populares {
  width: 100%;
  margin-top: 20px;

  .lista-de-populares {
    padding: 20px 7%;
  }
}
</style>
