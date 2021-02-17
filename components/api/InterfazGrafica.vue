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

    <BajarContenido class="bajar-contenido">
      <template #respuesta>
        <div class="respuesta">
          <p>waiting response...</p>
        </div>
      </template>
    </BajarContenido>
  </div>
</template>

<script>
import BajarContenido from "../globales/BajarContenido";
export default {
  components: { BajarContenido },
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
    cursor: pointer;

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
    .respuesta {
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
