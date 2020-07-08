import styled from "styled-components";

export const SearchInput = styled.input`
  width: 60%;
  height: 40px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonFilter = styled.button`
  background: var(--cinza3);
  color: var(--cinxa2);
  padding: 10px;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: bolder;
  border-radius: 8px;
  margin-top: 5px;
  width: min-content;
  justify-content: space-between;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  margin-left: 20px;
  &:hover {
    background: var(--cinza);
  }
`;
