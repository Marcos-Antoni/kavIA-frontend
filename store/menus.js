export const state = () => ({
  api: 1
});

export const mutations = {
  cambiar_api(state, num) {
    state.api = num;
  }
};
