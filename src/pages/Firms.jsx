import { useEffect } from "react"
import { Button, Typography } from "@mui/material"
import axios from "axios"
import { useSelector } from "react-redux"

const Firms = () => {
const {token} = useSelector((state) => state.auth)

  const getFirms = async () => {
try {
  const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/` , {
    headers: { Authorization: `Token ${token}`}
  })
  console.log(data)
}
catch (error) {
  console.log(error)

}
  }

   
  useEffect(() => {
    getFirms()
  }, [])



  return <div>
<Typography variant="h4" color={"error"} mb={3}>Firms</Typography>
<Button variant="contained">NEW FIRM</Button>

  </div>
}

export default Firms
