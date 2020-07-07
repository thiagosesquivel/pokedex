import React from "react";

import { ModalContainer, CardModal, CloseButton } from "./styles";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "../Context/Cart";

function Modal({ closeModal }) {
  const { hideModal } = useCart();
  return (
    <>
      <ModalContainer>
        <CardModal>
          <FaCheckCircle style={{ fontSize: "7rem", color: "#2ecc71" }} />
          <h1>Obrigado!</h1>
          <h2>Sua compra foi realizada com sucesso!</h2>
          <h3>Informações sobre o seu pedido foi enviado para seu email!</h3>
          <CloseButton onClick={() => hideModal()}>Fechar</CloseButton>
        </CardModal>
      </ModalContainer>
    </>
  );
}

export default Modal;
