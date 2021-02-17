export const state = () => ({
  api: 0
});

export const mutations = {
  cambiar_api(state, num) {
    state.api = num;
  }
};
