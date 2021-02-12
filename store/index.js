export const state = () => ({
  listPopulares: [
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0.05,
      usos: 75,
      verificar: true
    },
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0,
      verificar: true
    },
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0.05,
      verificar: false
    },
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0.05,
      verificar: true
    },
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0.05,
      verificar: false
    },
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0,
      verificar: false
    },
    {
      img: "",
      titulo: "veríficacion tarjeta de credito",
      descripcion:
        "Identifica y previene fraude en tu negocio de manera rápida y sencilla",
      puntuacion: 8.9,
      precio: 0.05,
      verificar: false
    }
  ],
  gratis: false,
  verificado: 0,
  login: false
});

export const getters = {
  listaDepurada(state) {
    let listaDepurada = state.listPopulares
      .filter(lista => {
        if (state.gratis) {
          return lista.precio == 0;
        } else {
          return lista;
        }
      })
      .filter(lista => {
        if (state.verificado < 1) {
          return lista;
        } else if (state.verificado == 1) {
          return lista.verificar;
        } else if (state.verificado > 1) {
          return !lista.verificar;
        }
      });

    return listaDepurada;
  }
};

export const mutations = {
  gratis_on_of(state, boolean) {
    state.gratis = boolean;
  },

  modificar_verificacion(state, tipo) {
    state.verificado = tipo;
  },

  on_of_login(state) {
    state.login = !state.login;
    console.log(state.login);
  }
};
