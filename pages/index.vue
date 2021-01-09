<template>
  <div>
    <p>hola <a href="#">mundo</a></p>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
<style>
p {
  color: blue;
}
</style>
