import ProductTable from "../components/ProductTable";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall_old";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const { getStockData, getProdCatBrands } = useStockCall();
  const { products } = useSelector((state) => state.stock);



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);


  };

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

  useEffect(() => {
    // getStockData("products");
    // getStockData("categories");
    // getStockData("brands");
    getProdCatBrands ()
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Products  
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW PRODUCT
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
     
  
      />

      <ProductTable />
    </div>
  );
};

export default Products;
