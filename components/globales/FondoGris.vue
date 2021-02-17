<template>
  <div class="Descripcion">
    <div class="contenido">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    objeto: Object
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
  z-index: 1;
}

.Descripcion {
  height: 250px;
  background-color: #f8f8f8;

  display: flex;
  justify-content: center;

  &::after {
    @include affter();
    background-image: url("/figuraIntegracion1.svg");
    width: 75px;
    height: 250px;
    top: 75px;
    left: -20px;
  }

  &::before {
    @include affter();
    background-image: url("/pelotas.svg");
    width: 33px;
    height: 54px;
    top: 75px;
    right: 0px;
  }

  .contenido {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 80%;
  }
}
</style>
