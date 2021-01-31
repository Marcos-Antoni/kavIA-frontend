<template>
  <v-container class="encuesta" fluid>
    <v-card class="carta">
      <v-container>
        <v-row>
          <v-col sm="12" md="6" class="contenido">
            <h2>¿Eres desarrollador?</h2>
            <p class="espacio">
              Únete con nosotros y publica tu api. Monetizar con nosotros es muy
              fácil sin preocuparte por otras cuestiones
            </p>
            <v-btn class="boton espacio">
              Más informacíon
            </v-btn>
          </v-col>
          <v-col sm="12" md="6" class="formulario">
            <v-card class="carta-de-formulario">
              <h2>Envianos tu informacíon</h2>
              <p>Nosotros te contactamos :)</p>
              <v-form class="form">
                <v-text-field
                  class="input"
                  label="Correo"
                  type="email"
                  solo
                ></v-text-field>
                <v-text-field
                  class="input"
                  label="Nombre"
                  type="email"
                  solo
                ></v-text-field>
                <v-btn class="boton" type="submit">Enviar</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<style lang="scss">
@mixin boton {
  font-family: "Galano";
  font-weight: bold;
}

.encuesta {
  padding: 0 10%;
  margin-bottom: 10px;
  @media screen and (max-width: 960px) {
    padding-right: 0 2%;
  }
  .carta {
    height: var(--tamano-de-carta);
    background-color: var(--color-azul);

    .contenido {
      height: 250px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 15px;

      h2 {
        font-size: 22px;
      }
      .espacio {
        margin-bottom: 20px;
      }
      .boton {
        width: 250px;
        background-color: #fff;
        @include boton;
      }
    }

    .formulario {
      height: var(--tamano-de-carta);
      position: relative;
      display: flex;
      justify-content: center;

      .carta-de-formulario {
        position: absolute;
        padding: 20px 5%;
        width: 350px;
        height: auto;
        color: #000;
        top: -30%;
        right: 50px;
        border-radius: 5px;

        @media screen and (max-width: 960px) {
          position: revert;
        }

        .v-input__slot {
          margin-bottom: 0;
          background-color: #ececec;
        }
        .input {
          width: 100%;
        }

        p {
          margin-bottom: 20px;
          color: #9b9b9b;
        }

        h2 {
          font-size: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .boton {
            background-color: var(--color-azul);
            color: #fff;
            width: 50%;
            @include boton;
          }
        }
      }
    }
  }
}
</style>
