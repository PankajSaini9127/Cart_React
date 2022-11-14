import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Cart";
import List from "./List";

export default function Router() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" exact element={<List />} />
        <Route path="/cart" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
