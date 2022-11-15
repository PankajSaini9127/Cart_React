import React, { useContext } from "react";

//MUI
import {
  Grid,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";


//Custom CSS
import "../asset/CSS/product.css";

// Context API Data
import { Data } from "../App";

//cons
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function Product(props) {
  const { id, title, img, price, description, quantity } = props.data;

  const { removeItem, handleIncrement, handleDecrement } = useContext(Data);

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ margin: 2, textAlign: "center", justifycontent: "space-around" }}
      >
       
        {/* Product Image */}
        <Grid item md={2} xs={12}>
          <Box
            className="product_img"
            component="img"
            sx={{
              height: 180,
              width: 180,
            }}
            alt={title}
            src={img}
          />
        </Grid>

        {/* Product Title */}
        <Grid item md={2} xs={10} className="productitem">
          <Typography variant="h6" className="title">
            {title}
          </Typography>
        </Grid>

        {/* Product Discription */}
        <Grid item md={2} xs={10} className="productitem">
          <Typography variant="h6" className="description">
            {description}
          </Typography>
        </Grid>

        {/* Product Price */}
        <Grid item md={1.5} xs={10} className="productitem">
          {price}
          <CurrencyRupeeIcon fontSize="small"/>
        </Grid>

        {/* Product Quantity */}
        <Grid item md={2} xs={10} className="productitem">
          <ButtonGroup>
            <Button
              variant="text"
              color="success"
              onClick={() => {
                handleDecrement(id);
              }}
            >
              <RemoveIcon />
            </Button>
            <Button variant="text">{quantity}</Button>
            <Button
              variant="text"
              color="success"
              onClick={() => {
                handleIncrement(id);
              }}
            >
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Grid>

        {/* Product Delete Button */}
     <Grid  item md={2} xs={8} className="productitem">
        <Button
          color="error"
          onClick={() => {
            removeItem(id);
          }}
        >
          <DeleteIcon />
        </Button>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}
