import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
// import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"
import { useDispatch, useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall_old";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  // const {token} = useSelector((state) => state.auth)
  // const dispatch = useDispatch()
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
  // console.log(firms)

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{mb:4}} >
        NEW FIRM
      </Button>

      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard
              firm={firm}
              handleOpen={handleOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
