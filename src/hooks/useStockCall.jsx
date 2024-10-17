import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {

  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`)
      dispatch(getStockSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);
      toastSuccessNotify(`${url} succesfuly deleted`);
      getStockData(url);
    
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`);
      console.log(error);
    }
  };

  const postStockData = async (url,info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/stock/${url}/`,info);
      toastSuccessNotify(`${url} succesfuly posted`);
      getStockData(url);
    
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
      console.log(error);
    }
  };
  const putStockData = async (url,info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/stock/${url}/${info.id}/`,info);
      toastSuccessNotify(`${url} succesfuly uptaded`);
      getStockData(url);
    
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be uptaded`);
      console.log(error);
    }
  };

  const getProdCatBrands = async () => {
dispatch(fetchStart())
try {
  const [products,categories,brands] = await Promise.all([
    axiosWithToken.get("stock/products/"),
    axiosWithToken.get("stock/categories/"),
    axiosWithToken.get("stock/brands/"),
  ])

  dispatch(
    getProdCatSuccess([
      products?.data,
      categories?.data,
      brands?.data,
    ])
  )
} catch (error) {
  dispatch(fetchFail())
  toastErrorNotify(`Data can not be fetched`)
}


  }

  //   const getFirms = async () => {
  //     dispatch(fetchStart())
  // try {
  //   const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/` , {
  //     headers: { Authorization: `Token ${token}`}
  //   })
  //   dispatch(getFirmsSuccess(data))
  //   console.log(data)
  // }
  // catch (error) {
  //   dispatch(fetchFail())
  //   console.log(error)

  // }
  //   }

  //   const getSales = async () => {
  //     dispatch(fetchStart())
  // try {
  //   const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/stock/sales/` , {
  //     headers: { Authorization: `Token ${token}`}
  //   })
  //   dispatch(getSalesSuccess(data))
  //   console.log(data)
  // }
  // catch (error) {
  //   dispatch(fetchFail())
  //   console.log(error)

  // }
  //   }

  return { getStockData, deleteStockData, postStockData,putStockData };
};

export default useStockCall;
