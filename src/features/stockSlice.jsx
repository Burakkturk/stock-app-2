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

    getStockSuccess: (state, {payload:{data, url}}) => {
      state.loading = false
      state[payload.url] = payload.data
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
  getFirmsSuccess,
  fetchFail,
  getBrandsSuccess,
  getSalesSuccess
} = stockSlice.actions;
export default stockSlice.reducer;
