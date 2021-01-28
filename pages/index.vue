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
  </div>
</template>

<script>
import Inicio from "../components/inicio/Inicio";
import Popular from "../components/inicio/Popular";
import Usuarios from "../components/inicio/Usuarios";
import Integracion from "../components/inicio/Integracion";
import Automatiza from "../components/inicio/Automatiza";
export default {};
</script>
<style lang="scss">
.principal {
  height: 100%;
  background: var(--color);

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
  }
}
</style>
