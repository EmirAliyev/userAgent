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
    userCity: "",
    userHostName: "",
    userProvider: "",
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
      state.userIp = response.data.ip;
      state.userHostName = response.data.hostname;
      state.userCity = response.data.city;
      state.userProvider = response.data.org;
      state.userBrowser = uap.getResult().browser;
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
      axios.get("https://ipinfo.io?token=9b6151376047ec").then((res) => {
        this.commit("setUserData", res);
      });
    },
  },

  modules: {},
});
