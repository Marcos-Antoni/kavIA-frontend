<template>
  <div class="tergeta-decoratiba">
    <h2>{{ titulo }}</h2>
    <nuxt-link :to="url" class="link"> {{ contenido }} </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["titulo", "contenido", "url"]
};
</script>

<style lang="scss">
.tergeta-decoratiba {
  height: 250px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--color-azul);
  position: relative;

  h2 {
    position: absolute;
    top: 10px;
    color: #fff;
    font-size: 18px;
    width: 75%;
  }
  .link {
    position: absolute;
    bottom: 30px;
    color: #fff;
    margin-top: 100px;
    font-size: 18px;
    text-decoration: none;
    width: 90%;
  }
}
</style>
