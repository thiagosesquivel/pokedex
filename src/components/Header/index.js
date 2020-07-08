import React from "react";

import {
  Container,
  Cabecalho,
  ButtonCart,
  ContainerButton,
  Badget,
} from "./styles";
import logo from "../../assets/img/g909.png";
import { useCart } from "../Context/Cart";

function Header() {
  const { totalQuantidade, handleCartVisible } = useCart();
  return (
    <>
      <Cabecalho>
        <Container>
          <img src={logo} alt="logo" />
          <ContainerButton>
            {totalQuantidade > 0 && <Badget>{totalQuantidade}</Badget>}
            <ButtonCart onClick={() => handleCartVisible()} />
          </ContainerButton>
        </Container>
      </Cabecalho>
    </>
  );
}

export default Header;
