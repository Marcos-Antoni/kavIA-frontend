<template>
  <div class="tienda">
    <section>
      <Buscador />
    </section>
    <section>
      <Componentes />
    </section>
  </div>
</template>

<script>
import Buscador from "../components/buscador/Buscador";
import Componentes from "../components/buscador/Componentes";
export default {
  components: { Buscador, Componentes }
};
</script>

<style lang="scss">
.tienda {
  // height: auto;
}
</style>
