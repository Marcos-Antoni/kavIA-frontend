<template>
  <v-card
    class="obgeto-de-lista liston"
    :class="obgeto.verificar ? `verificar` : ``"
  >
    <v-container>
      <div class="titulo-del-obgeto">
        <img src="/usuario.png" class="imagen-del-desarrollador" />

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
</template>

<script>
export default {
  name: "Targeta",
  props: {
    obgeto: Object
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.liston {
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 10%;
    height: 15%;
    background-image: url("../../static/liston.svg");
    top: 0;
    right: 10%;
  }
}

.verificar {
  &::after {
    @include affter();
    background-image: url(/verificado.svg);
    background-size: 30px;
    width: 30px;
    height: 30px;
    left: -3%;
    top: -3%;
  }
}

.obgeto-de-lista {
  height: 250px;
  width: 100%;
  position: relative;

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
      position: relative;
      margin-left: 10px;
      color: #868686;
      &::after {
        @include affter();
        background-image: url(/puntuacion.svg);
        background-size: 20px;
        width: 20px;
        height: 20px;
        left: -20px;
        top: 0%;
      }
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
</style>
