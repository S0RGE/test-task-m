import { createStore } from 'vuex';
import { getCategories, getCompanies, getProducts } from '@/utils/fakeApi';

export default createStore({
  state: {
    cart: [],
    products: [],
    categories: [],
    companies: [],
    filters: {
      category: '',
      companies: [],
      priceLimit: [0, 10000],
      inStock: false,
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
    getCategories: (state) => state.categories,
    getCompanies: (state) => state.companies,
    getFilters: (state) => state.filters,
  },
  actions: {
    ADD_FILTERS: ({ commit }, filters) => {
      commit('ADD_FILTERS', filters);
    },
    ADD_PROUCT_TO_CART: ({ commit }, product) => {
      commit('ADD_PROUCT_TO_CART', product);
    },
    GET_PRODUCTS: ({ commit }) => {
      const products = getProducts();
      commit('GET_PRODUCTS', products);
    },
    GET_CATEGORIES: ({ commit }) => {
      const categories = getCategories();
      commit('GET_CATEGORIES', categories);
    },
    GET_COMPANIES: ({ commit }) => {
      const companies = getCompanies();
      commit('GET_COMPANIES', companies);
    },
  },
  mutations: {
    ADD_FILTERS: (state, filters) => {
      state.filters = filters;
    },
    GET_COMPANIES: (state, companies) => {
      state.companies = companies;
    },
    GET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    GET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    ADD_PROUCT_TO_CART: (state, product) => {
      state.cart.push(product);
    },
  },
  modules: {},
});
