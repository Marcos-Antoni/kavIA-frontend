<template>
  <div class="principal">
    <section id="inicio" class="contenedor">
      <Inicio class="contenedor" />
    </section>
    <section id="mas-vendidios">
      <Popular class="contenedor" />
    </section>
    <section id="usuarios-destacados">
      <Usuarios class="contenedor" />
    </section>
    <section id="integracion">
      <Integracion class="contenedor" />
    </section>
    <section id="automatizar">
      <Automatiza class="contenedor" />
    </section>
    <section id="desarroyadores">
      <BucarDesarroyadores class="contenedor" />
    </section>
    <footer id="pie-de-pagina">
      <footer-v />
    </footer>
  </div>
</template>

<script>
import Inicio from "../components/inicio/Inicio";
import Popular from "../components/inicio/Popular";
import Usuarios from "../components/inicio/Usuarios";
import Integracion from "../components/inicio/Integracion";
import Automatiza from "../components/inicio/Automatiza";
import BucarDesarroyadores from "../components/inicio/BucarDesarroyadores";
import FooterV from "../components/header/FooterV.vue";
export default {
  components: {
    Inicio,
    Popular,
    Usuarios,
    Integracion,
    Automatiza,
    BucarDesarroyadores,
    FooterV
  }
};
</script>
<style lang="scss">
.principal {
  height: 100%;
  background: var(--color);
  position: relative;

  margin-top: 20px;

  .contenedor {
    height: 100%;
  }
  #inicio {
    height: 100%;
    margin-bottom: 100px;
  }
  #mas-vendidios {
    height: auto;
  }
  #usuarios-destacados {
    height: auto;
  }
  #integracion {
    margin-top: 50px;
    height: auto;
    margin-bottom: 25px;
  }
  #automatizar {
    height: auto;
    margin-bottom: 75px;
  }
  #desarroyadores {
    height: auto;
  }
  #pie-de-pagina {
    height: auto;
    width: 100%;
  }
}
</style>
