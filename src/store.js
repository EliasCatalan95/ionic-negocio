import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      nombre: '',
      foto: ''
    };
  },
  mutations: {
    setNombre(state, nombre) {
      state.nombre = nombre;
    },
    setFoto(state, foto) {
      state.foto = foto;
    }
  }
});

export default store;