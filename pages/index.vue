<template>
  <div class="principal">
    <section id="inicio" class="contenedor">
      <Inicio class="contenedor" />
    </section>
    <section id="mas-vendidios">
      <Popular class="contenedor" />
    </section>
  </div>
</template>

<script>
import Inicio from "../components/inicio/Inicio";
import Popular from "../components/inicio/Popular";
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
  }
  #mas-vendidios {
    min-height: 110%;
    height: auto;
  }
}
</style>
