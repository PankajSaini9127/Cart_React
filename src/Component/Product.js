import {
  Grid,
  TextField,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useContext } from "react";

import "../asset/CSS/product.css";

import { Data } from "../App";

//cons
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function Product(props) {
  const { id, title, img, price, description, quantity } = props.data;

  const { removeItem, handleIncrement, handleDecrement,itemAmount } = useContext(Data);

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ margin: 2, textAlign: "center", justifycontent: "space-around" }}
      >
       
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
        <Grid item md={2} xs={10} className="productitem">
          <Typography variant="h6" className="title">
            {title}
          </Typography>
        </Grid>
        <Grid item md={2} xs={10} className="productitem">
          <Typography variant="h6" className="description">
            {description}
          </Typography>
        </Grid>
        <Grid item md={2} xs={10} className="productitem">
          
          {price}
        </Grid>
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
     <Grid  item md={2} xs={10} >
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
