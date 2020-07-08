import React, { useState } from "react";

import { Column, Container, Row } from "../../components/Grid";
import Header from "../../components/Header";
import List from "../../components/List";
import Search from "../../components/Search";
import CartList from "../../components/CartList";
import Message from "../../components/Message";
import Modal from "../../components/Modal";
import { useCart } from "../../components/Context/Cart";

function Main({ pokemons }) {
  const { message, clearMessage, modalVisible, cartVisible } = useCart();
  const [searchArray, setSearchArray] = useState([]);

  const handleSearch = (event) => {
    const valor = event.target.value;
    const pokemonsFilted = pokemons.filter((poke) =>
      poke.name.includes(valor.toLowerCase())
    );
    setSearchArray(pokemonsFilted);
  };

  return (
    <>
      <Header />
      {modalVisible && <Modal />}
      <Container>
        {cartVisible && <CartList />}
        <Row>
          <Column desktop="12" table="12" mobile="12">
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Search onPress={handleSearch} />
            </Row>
            <Row style={{ height: "60%" }}>
              <List pokemon={pokemons} filtredPokemons={searchArray} />
            </Row>
          </Column>
        </Row>
      </Container>
      {message && <Message updateMessage={clearMessage} message={message} />}
      {modalVisible && <Modal />}
    </>
  );
}

export default Main;
