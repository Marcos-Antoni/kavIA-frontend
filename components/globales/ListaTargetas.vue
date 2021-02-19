<template>
  <v-row class="componentes-abajo">
    <v-col
      class="columna-de-obgeto"
      v-for="(obgeto, key) in lista"
      :key="key"
      md="3"
      sm="6"
      cols="12"
    >
      <Targetas :obgeto="obgeto" />
    </v-col>
    <v-col v-show="extra" class="columna-de-obgeto" md="3" sm="6" cols="12">
      <v-card class="obgeto-de-lista">
        <slot></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Targetas from "./Targetas";

export default {
  components: { Targetas },
  props: {
    lista: Array,
    extra: Boolean
  }
};
</script>
