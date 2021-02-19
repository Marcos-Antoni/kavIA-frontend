<template>
  <div class="usuario">
    <section id="inicio-ususario">
      <Descripcion :objeto="usuario" />
    </section>
    <section id="descripcion-ususario">
      <Datos :datos="dataSet" />
    </section>
    <section id="api-usurario">
      <ListaApis />
    </section>
    <footer id="footer-apis">
      <footer-v />
    </footer>
  </div>
</template>

<script>
import Descripcion from "../../components/globales/Descripcion";
import Datos from "../../components/globales/Datos";
import ListaApis from "../../components/usuario/ListaApis";
import FooterV from "../../components/header/FooterV.vue";

export default {
  components: { Descripcion, Datos, ListaApis, FooterV },

  data() {
    return {
      nombre: this.$route.params.nombre,
      usuario: {
        titulo: this.$route.params.nombre,
        descripcion: "34 APIs abilitadas y sirviendo a la comunidad :)",
        verificar: true
      }
    };
  },

  computed: {
    dataSet() {
      return [
        { mensage: "Status del servidor", subMensaje: "Activo" },
        {
          mensage: `34 APIs `,
          subMensaje: "Creadas"
        },
        {
          mensage: `4893`,
          subMensaje: "clientes"
        },
        { mensage: "74% Crec.", subMensaje: "Mensual" }
      ];
    }
  }
};
</script>

<style lang="scss">
.usuario {
  #inicio {
    height: auto;
  }

  #descripcion-ususario {
    margin-top: -39px;
    height: auto;
    max-width: 100vw;
  }

  #api-usurario {
    height: auto;
    margin-top: 40px;
  }

  #footer-apis {
    margin-top: 20px;
  }
}
</style>
