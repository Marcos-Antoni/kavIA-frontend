<template>
  <div class="interfaz-grafica">
    <div class="subir-contenido" @click="subirArchibos">
      <img class="logo-subir" src="/API/subir.svg" />
      <p class="parrafo-subir">
        Selecciona, arrastra o haz click para esoger el archivo que deseas
      </p>

      <form class="subir-formulario">
        <input type="file" id="subir-file" />
      </form>
    </div>

    <div class="bajar-contenido">
      <v-card class="bajar-titulo">
        <h2>Response</h2>
      </v-card>
      <v-card class="bajar-respuesta">
        <p>waiting response...</p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    subirArchibos() {
      const file = document.querySelector("#subir-file");

      file.click();
    }
  }
};
</script>

<style lang="scss">
.interfaz-grafica {
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  .subir-contenido {
    width: var(--tamano-de-pestanas-de-interfas);
    height: 250px;

    background: #83a4d4;
    background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);
    background: linear-gradient(to right, #b6fbff, #83a4d4);
    border-radius: 5px;
    border: #000 3px dashed;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo-subir {
      width: var(--tamano-de-imagen-de-subida);
      height: var(--tamano-de-imagen-de-subida);
    }

    .parrafo-subir {
      width: 50%;
      text-align: center;
    }

    .subir-formulario {
      display: none;
    }
  }

  .bajar-contenido {
    width: var(--tamano-de-pestanas-de-interfas);
    height: 800px;
    margin-top: 30px;
    margin-bottom: 30px;

    .bajar-titulo {
      width: 100%;
      height: 5%;
      border-radius: 0;
      padding-left: 10px;
      z-index: 2;
      display: flex;
      align-items: center;

      h2 {
        font-size: 19px;
      }
    }

    .bajar-respuesta {
      width: 100%;
      height: 95%;
      border-radius: 0%;
      background: #f0f0f0;
      z-index: 1;

      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-weight: bold;
        font-family: "Galano";
      }
    }
  }
}
</style>
