import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import useStockCall from "../hooks/useStockCall";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose }) {
  const { postStockData } = useStockCall();
  const { categories } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    category_id: "",
    brand_id: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    postStockData("products", info);

    handleClose();
    setInfo({name:"",    category_id:"", brand_id:""})
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setInfo({ name:"", category_id:"", brand_id:""})
          handleClose()
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="category"
                id="category"
                name="category_id"
                value={info?.category_id || ""}
                label="Categories"
                onChange={handleChange}
              >
                {categories?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brand">Brands</InputLabel>
              <Select
                labelId="categories"
                id="brand"
                name="brand_id"
                value={info?.brand_id || ""}
                label="brand"
                onChange={handleChange}
              >
                {brands?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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
