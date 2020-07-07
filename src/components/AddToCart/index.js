import React from "react";
import { FaCartPlus } from "react-icons/fa";

import { Button } from "./style";
import { useCart } from "../Context/Cart";

function AddToCart({ item }) {
  const { verifyAndAdd } = useCart();
  return (
    <Button onClick={() => verifyAndAdd(item)}>
      <FaCartPlus />
      Adicionar
    </Button>
  );
}

export default AddToCart;
