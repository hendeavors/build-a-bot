import axios from 'axios';

export default {
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch((error) => {
          console.warn(error);
        });
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];

      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
        .catch((error) => {
          console.warn(error);
        });
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(
        (robot) => robot.head.onSale === true
        || robot.torso.onSale === true
        || robot.leftArm.onSale === true
        || robot.rightArm.onSale === true,
      );
    },
  },
};
