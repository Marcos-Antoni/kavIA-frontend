<template>
  <div class="tienda">
    <section id="buscador">
      <Buscador />
    </section>
    <section id="componentes">
      <Componentes />
    </section>
    <footer>
      <FooterV />
    </footer>
  </div>
</template>

<script>
import Buscador from "../../components/buscador/Buscador";
import Componentes from "../../components/buscador/Componentes";
import FooterV from "../../components/header/FooterV.vue";
export default {
  components: { FooterV, Buscador, Componentes },
  head: {
    title: "Tienda"
  }
};
</script>

<style lang="scss">
.tienda {
  #componentes {
    margin-top: 15px;
  }
}
</style>
