import React, { useContext } from "react";

//MUI
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

//Custom CSS
import "../asset/CSS/List.css";

// scroll bar
import { Scrollbars } from "react-custom-scrollbars";

//Router Link
import { Link } from "react-router-dom";

//context API
import { Data } from "../App";

//icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Cart() {
  const { cartItem, totalItem, handleAddCart } = useContext(Data);

  return (
    <>
      {/* Nav Item start */}
      <Grid container sx={{ justifyContent: "space-around", marginTop: 3 }}>
        <Grid item xs={10}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={3} className="nav">
              <Typography className="backArrow">
                <ArrowBackIcon />
              </Typography>
              <Typography>Shopping Cart</Typography>
            </Grid>
            <Grid item xs={2}>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
              <Typography className="cart_item">{totalItem}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Shopping List Section start */}
      <Grid container sx={{ marginTop: 2, justifyContent: "space-around" }}>
        <Grid item xs={10} className="cartItem">
          <Scrollbars>
            <Grid container spacing={3} sx={{ padding: 6 }}>
              {cartItem.map((item) => {
                const { id, title, description, img, price } = item;
                return (
                  <Grid item spacing={3} sx={{ padding: 3 }}>
                    <Grid className="cartProduct" sx={{ padding: 1 }} key={id}>
                      <Box
                        component="img"
                        src={img}
                        alt={title}
                        height={190}
                        width={190}
                        sx={{ padding: 0 }}
                      />
                      <Typography variant="body1" className="cartTitle">
                        {title}
                      </Typography>
                      <Typography variant="body1" className="cartDescription">
                        {description}
                      </Typography>
                      <Typography variant="body1" className="cartPrice">
                        Price: {price}
                        <CurrencyRupeeIcon fontSize="small" />
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          handleAddCart(id);
                        }}
                      >
                        Add To Cart
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Scrollbars>
        </Grid>
      </Grid>
    </>
  );
}
