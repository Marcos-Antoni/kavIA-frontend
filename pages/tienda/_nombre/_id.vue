<template>
  <div class="api">
    <section id="descripcion">
      <Descripcion :objeto="listPopulares[0]" />
    </section>
    <section id="datos">
      <Datos :objeto="listPopulares[0]" />
    </section>
  </div>
</template>

<script>
import Datos from "../../../components/api/Datos";
import Descripcion from "../../../components/api/Descripcion";
import { mapState } from "vuex";
export default {
  components: { Descripcion, Datos },

  data() {
    return {
      id: this.$route.params.id
    };
  },

  computed: {
    ...mapState(["listPopulares"])
  }
};
</script>

<style lang="scss">
.api {
  #descripcion {
    height: auto;
    margin-top: 12px;
  }
  #datos {
    margin-top: -39px;
    height: auto;
  }
}
</style>
