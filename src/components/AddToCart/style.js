import styled from "styled-components";

export const Button = styled.button`
  background: var(--azul);
  color: var(--branco);
  padding: 10px;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: bolder;
  border-radius: 8px;
  margin-top: 5px;
  width: 60%;
  justify-content: space-between;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    background: var(--azul3);
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`;
