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
  </div>
</template>

<script>
import Inicio from "../components/inicio/Inicio";
import Popular from "../components/inicio/Popular";
import Usuarios from "../components/inicio/Usuarios";
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
}
</style>
