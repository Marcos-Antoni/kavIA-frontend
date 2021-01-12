<template>
  <div class="principal">
    <section id="inicio">
      <inicio class="contenedor" />
    </section>
    <section id="clientes"></section>
  </div>
</template>

<script>
import inicio from "../components/inicio/inicio";
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
}
</style>
