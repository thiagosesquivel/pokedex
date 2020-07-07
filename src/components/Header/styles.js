import styled from "styled-components";

import { FaShoppingCart } from "react-icons/fa";

export const Cabecalho = styled.div`
  width: 100%;
  display: flex;
  background: var(--vermelho);
  height: 50px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const ButtonCart = styled(FaShoppingCart)`
  font-size: 24px;
  color: var(--branco);
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  background: var(--vermelho2);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;

  &:hover {
    background: var(--vermelho-forte);
  }
`;

export const Badget = styled.div`
  position: absolute;
  color: var(--branco);
  background-color: var(--laranja);
  border-radius: 8px;
  padding: 3px;
  top: 20px;
  right: -10px;
`;
