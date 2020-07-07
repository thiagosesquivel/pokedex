import styled from "styled-components";

export const ModalContainer = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const CardModal = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  height: 300px;
`;

export const CloseButton = styled.button`
  padding: 10px 30px;
  background: var(--vermelho-forte);
  color: var(--branco);
  margin-top: 20px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: var(--vermelho2);
  }
`;
