import * as subModule from "./subModule";

export const namespaced = true;

export const modules = { subModule };
  
export const state = ()=> ({
  count: 8
});

export const mutations = {};

export const actions = {};

export const getters = {};
