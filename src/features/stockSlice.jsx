import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
  
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    categories: [],
    brands: [],
    products: [],
   
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getStockSuccess: (state, {payload}) => {
      state.loading = false
      state[payload.url] = payload.data
    },


    getProdCatBrandsSuccess: (state, {payload}) => {
      state.loading = false
      state.products = payload[0]
      state.categories = payload[1]
      state.brands = payload[2]

    },
    // getFirmsSuccess: (state, {payload}) => {
    //   state.loading = false
    //   state.firms = payload
    // },

    // getBrandsSuccess: (state, {payload}) => {
    //   state.loading = false
    //   state.brands = payload
    // },
    // getSalesSuccess: (state, {payload}) => {
    //   state.loading = false
    //   state.sales = payload
    // },
   
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getStockSuccess
} = stockSlice.actions;
export default stockSlice.reducer;
