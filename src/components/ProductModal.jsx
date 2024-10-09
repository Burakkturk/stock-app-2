import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";  
import useStockCall from "../hooks/useStockCall";

export default function ProductModal({ open, handleClose,
   info, setInfo
 }) {

  const {postStockData, putStockData} = useStockCall()


  const handleChange = (e) => {
   
setInfo({...info, [name]:value})
  }
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(info.id)
  if (info.id) {
    putStockData("firms", info)
  } else {
  postStockData("firms", info)
  }
 
 
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
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              onChange={handleChange}
              required
              value={info?.name}
            
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
