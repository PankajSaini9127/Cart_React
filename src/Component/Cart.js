import React, { useContext } from "react";

//MUI
import { Button, Grid, Typography } from "@mui/material";

// ROuter
import { Link } from "react-router-dom";

// Context API
import { Data } from "../App";

//scroll bar
import { Scrollbars } from 'react-custom-scrollbars';

//icon
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//css
import "../asset/CSS/main.css";

// Component For rendering Item
import Product from "./Product";

export default function Main() {
  const { item, totalAmount, totalItem } = useContext(Data);
 
  return (
    <>
      <Grid container sx={{ justifyContent: "space-around", marginTop: 3 }}>
        <Grid item xs={10}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={3} className="nav">
              <Typography className="backArrow">
                <Link to="/"><ArrowBackIcon /></Link>
                
              </Typography>
              <Typography>Shopping Cart</Typography>
            </Grid>
            <Grid item xs={2}>
              <ShoppingCartIcon />

              <Typography className="cart_item">{totalItem}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "space-around", marginTop: 3 }}>
        <Grid item xs={10} className="Shopping_list">
      <Scrollbars>

          {
            (totalItem=== 0)? <Typography variant="body1" className="no_item">No Item Added in Cart</Typography> 
            :
    
          <Grid container sx={{ margin: 2, textAlign: "center" }}>
            <Grid item xs={2.2}>
              {" "}
              Product Image
            </Grid>
            <Grid item xs={2}>
              Title
            </Grid>
            <Grid item xs={2}>
              {" "}
              Description
            </Grid>
            <Grid item xs={1}>
              Price
            </Grid>
            <Grid item xs={2}>
              Quantity
            </Grid>
          </Grid>
 
}
         
          {item.map((item, i) => {
            return <Product data={item} key={i} />;
          })}
          
          </Scrollbars>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-evenly", marginTop: 3 }}
      >
        <Grid className="cartTotal">
          Cart Total : {totalAmount}.00 <CurrencyRupeeIcon fontSize="small" />{" "}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-evenly", marginY: 3 }}
      >
        <Button variant="contained" sx={{ width: "350px" }}>
          Check Out
        </Button>
      </Grid>
    </>
  );
}
