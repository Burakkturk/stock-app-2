import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";

export default function FirmModal({ open, handleClose,
   info, setInfo
 }) {

  const {postStockData} = useStockCall()
  // const [info, setInfo] = useState({
  //   name: "",
  //   phone: "",
  //   address: "",
  //   image: "",
  // });

  const handleChange = (e) => {
    const {name,value} = e.target
setInfo({...info, [name]:value})
  }
const handleSubmit = (e) => {
  e.preventDefault()
  postStockData("firms", info)
  setInfo({
    name: "",
    phone: "",
    address: "",
    image: "",
  })
  handleClose()
}
  
  return (
    <div> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          component="form"
          onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              onChange={handleChange}
              required
              value={info?.name}
            
            />
          
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              onChange={handleChange}
              required
              value={info?.phone}
            
            />
          
            <TextField
              label="Address"
              name="address"
              id="adress"
              type="text"
              variant="outlined"
              onChange={handleChange}
              required
              value={info?.adress}
            
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              onChange={handleChange}
              required
              value={info?.image}
            
            />
          
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
