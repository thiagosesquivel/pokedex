import React from "react";
import {
  Container,
  ListCart,
  FinishButton,
  Item,
  Button,
  InputQuantidade,
  Data,
  ButtonRemove,
} from "./styles";
// import ItemCart from "../ItemCart";
import { FaWindowClose } from "react-icons/fa";
import { useCart } from "../Context/Cart";

function CartList({ modal }) {
  const {
    cart,
    increment,
    decrement,
    totalValue,
    remove,
    showModal,
  } = useCart();

  const renderList = (cart) => {
    return cart.map((item) => {
      return (
        <Item key={item.id}>
          <img src={item.sprites.front_default} alt={item.name} />
          <ButtonRemove onClick={() => remove(item.id)} />
          {item.quantidade === 1 ? (
            <Button disabled> - </Button>
          ) : (
            <Button onClick={() => decrement(item.id)}> - </Button>
          )}
          <InputQuantidade>{item.quantidade}</InputQuantidade>
          <Button onClick={() => increment(item.id)}>+</Button>
          <Data>
            <p>{item.name}</p>
            <p>
              <b>R${parseFloat(item.price).toFixed(2)}</b>
            </p>
          </Data>
        </Item>
      );
    });
  };

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0",
          }}
        >
          <h3>Seu Carrinho</h3>
          <p>Valor total: R${totalValue.toFixed(2)}</p>
        </div>
        <ListCart>
          {cart.length > 0 ? (
            renderList(cart)
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                justifySelf: "center",
                flexDirection: "column",
                height: "100%",
                color: "rgb(247,247,247)",
              }}
            >
              <FaWindowClose style={{ fontSize: 40 }} />
              <h3>Ainda não há itens no Carrinho</h3>
            </div>
          )}
        </ListCart>
        {cart.length > 0 ? (
          <FinishButton onClick={() => showModal()}>
            Finalizar Compra
          </FinishButton>
        ) : (
          <FinishButton disabled>Finalizar Compra</FinishButton>
        )}
      </Container>
    </>
  );
}

export default CartList;
