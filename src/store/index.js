import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
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
    getParts() {
      axios.get('api/parts');
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
});
