import { createStore } from "vuex";
import axios from "axios";
import { UAParser } from "ua-parser-js";

export default createStore({

  
  state: {
    zipCode: null,
    zipData: [],
    shofInfo: false,
    userIp: "",
    userBrowser: "",
    opSys: "",
  },


  getters: {
    zipCode_g(state) {
      return state.zipCode;
    },
    zipData_g(state) {
      return state.zipData;
    },
    shofInfo_g(state) {
      return state.shofInfo;
    },
  },



  mutations: {
    setZipData(state, response) {
      state.zipData = response;
      state.shofInfo = true;
    },
    setUserData(state, response) {
      let uap = new UAParser();
      state.userIp = response.data;
      state.userBrowser = uap.getResult().browser;
      state.opSys = uap.getResult().os;
    },
  },



  actions: {
    async getZipData({ commit, state }) {
      return axios
        .get(
          `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${state.zipCode}?key=C1YIJGUK9RPSLYODHK9S`
        )
        .then((response) => {
          this.commit("setZipData", response.data);
        });
    },
    
    async getUserData({ commit, state }) {
      axios.get("https://api.ipify.org/").then((res) => {
        this.commit("setUserData", res);
      });
    },
  },



  modules: {},
});
