import { Typography, Box, Grid, Alert, Button } from "@mui/material";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";
// import { flex } from "../styles/globalStyles";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands, loading } = useSelector((state) => state.stock);
  const { open, setOpen } = useState(false);
  const { info, setInfo } = useState({});

  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={2}>
        Brands
      </Typography>

      <Button variant="contained"
        onClick={() => {
          setInfo({})
          setOpen(true) 
       
        }}>
          New Brand
      </Button>



      <BrandModal  open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>
    </Box>
  );
};

export default Brands;
