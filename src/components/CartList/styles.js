import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--cinza);
  position: fixed;
  position: fixed;
  top: 52px;
  height: 500px;
  width: 500px;
  right: 11px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  @media (max-width: 600px) {
    width: 95vw;
    height: 90vh;
  }
`;

export const ListCart = styled.ul`
  width: 90%;
  margin: 10px auto;
  overflow: auto;
  padding: 20px;
  height: 60%;
  max-height: 60%;
  background: var(--branco);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    width: 95%;
    padding: 10px;
  }
`;

export const ItemCart = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputQuantidade = styled.div`
  background: var(--branco);
  border: 1px var(--cinza) solid;
  color: var(--preto);
  max-width: 30px;
  padding: 5px 10px;
  width: 30px;
  margin: 0 10px;
`;

export const FinishButton = styled.button`
  background: var(--azul);
  color: var(--branco);
  padding: 10px;
  cursor: pointer;
  display: flex;
  ${(props) =>
    props.disabled &&
    "cursor: not-allowed; background: var(--cinza); color: var(--preto);"}
  align-items: center;
  font-weight: bolder;
  border-radius: 8px;
  margin-top: 5px;
  width: 90%;
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    background: var(--azul3);
    ${(props) =>
      props.disabled && "background: var(--cinza); color: var(--preto);"}
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: var(--cinza2);
  color: var(--preto);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  ${(props) => (props.disabled ? "cursor:not-allowed" : "cursor: pointer")};
`;

export const ButtonRemove = styled(FaTrash)`
  cursor: pointer;
  color: var(--chumbo);

  &:hover {
    color: var(--cinza2);
  }
`;
