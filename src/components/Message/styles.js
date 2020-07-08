import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  position: fixed;
  top: 53px;
  right: 6px;
  background: ${(props) =>
    props.status === "success" ? "#2ecc71" : "#f39c12"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  border-radius: 16px;
  transition: all 0.3s;
  font-size: 1.1rem;
  padding: 20px;

  @media (max-width: 600px) {
    max-width: 98%;
    margin: auto;
  }

  svg {
    font-size: 2rem;
  }
`;
