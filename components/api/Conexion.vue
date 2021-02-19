<template>
  <div class="conexion-api">
    <BajarContenido
      class="titulo-api"
      tamano="50px"
      TamTitulo="100"
      TamTipo="0"
      TamRespuesta="0"
    >
      <template #titulo>
        <div class="url-api get">
          <p>https://url_Random.com</p>
        </div>
      </template>
    </BajarContenido>

    <BajarContenido
      class="enbiar-api"
      tamano="250px"
      TamTitulo="20"
      TamTipo="80"
      TamRespuesta="0"
    >
      <template #titulo>
        <h2>Qué deves enviar</h2>
      </template>
      <template #tipo>
        <div class="contenido-api">
          <h3>Req.body</h3>
        </div>
      </template>
    </BajarContenido>

    <BajarContenido
      class="tokent-api"
      tamano="200px"
      TamTitulo="0"
      TamTipo="100"
      TamRespuesta="0"
    >
      <template #tipo>
        <div class="contenido-api">
          <h3>Baere tokent</h3>
        </div>
      </template>
    </BajarContenido>

    <div class="lista-botones">
      <v-btn v-for="nombre in lista_botones" :key="nombre" class="boton">
        {{ nombre }}
      </v-btn>
    </div>

    <BajarContenido class="conexion-bajar">
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
  data() {
    return {
      lista_botones: ["NodeJs", "Axios", "Jquery"]
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

@mixin seleccion {
  @include affter();
  background-color: var(--color-azul);
  width: 100%;
  height: 5px;
  left: 0;
  border-radius: 3px;
  animation-duration: 0.5s;
  animation-name: entrada;
}

@mixin todo {
  width: 100%;
  height: 100%;
}

.conexion-api {
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  .enbiar-api {
    h2 {
      font-size: var(--tamano-de-h);
    }
    .contenido-api {
      @include todo();
      padding-left: 10px;
      padding-top: 10px;
      h3 {
        font-size: var(--tamano-de-h);
        width: 74px;
        position: relative;
        &::after {
          @include seleccion();
          bottom: -1px;
        }
      }
    }
  }

  .tokent-api {
    .contenido-api {
      @include todo();
      padding-left: 10px;
      padding-top: 10px;
      h3 {
        font-size: var(--tamano-de-h);
        width: 102px;
        position: relative;
        &::after {
          @include seleccion();
          bottom: -1px;
        }
      }
    }
  }

  .titulo-api {
    .url-api {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-family: "Helveltica";
        font-weight: bold;
        color: var(--color-boton-de-componente);
      }
    }

    .get {
      &::after {
        @include affter();
        background-image: url(/get.svg);
        width: 100px;
        height: 29px;
        // top: 0;
        left: 0;
      }
    }
  }

  .lista-botones {
    width: 80%;
    display: flex;
    justify-content: space-evenly;

    .boton {
      background-color: var(--color-boton-azul);
      width: 200px;
      color: var(--color-azul);
      font-weight: bold;
      font-family: "Helveltica";
    }
  }

  .conexion-bajar {
    .respuesta {
      @include todo;
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
