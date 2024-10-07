import ProductTable from "../components/ProductTable";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
// import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"
import { useDispatch, useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall_old";
import FirmCard from "../components/FirmCard";
import ProductModal from "../components/ProductModal";
const Products = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);

    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
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
    getStockData("firms");
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
        info={info}
        setInfo={setInfo}
      />

      <ProductTable />
    </div>
  );
};

export default Products;
