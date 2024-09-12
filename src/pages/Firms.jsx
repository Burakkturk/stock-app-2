import { useEffect } from "react"
import { Button, Typography } from "@mui/material"
import axios from "axios"
// import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"
import { useDispatch, useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall_old"

const Firms = () => {
// const {token} = useSelector((state) => state.auth)
// const dispatch = useDispatch()
const {getStockData} = useStockCall()
const {firms } = useSelector((state) => state.stock)

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
  getStockData("firms")
  }, [])
console.log(firms)


  return <div>
<Typography variant="h4" color={"error"} mb={3}>Firms</Typography>
<Button variant="contained">NEW FIRM</Button>

  </div>
}

export default Firms
