import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appClick: false
  },
  mutations: {
    appIsClicked(state) {
      state.appClick = true;
      // console.log(`State is ${state.appClick}`);
    },
    appReset(state) {
      state.appClick = false;
      // console.log(`State is ${state.appClick}`);
    }
  },
  actions: {
    reset() {
      setTimeout(()=>{
        this.commit('appReset');
      }, 0);
    }    
  }
});
