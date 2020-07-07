import styled from "styled-components";

export const ContentList = styled.ul`
  display: flex;
  justify-content: space-between;
  background: var(--branco);
  border: 1px solid var(--cinza);
  padding: 25px;
  overflow: auto;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  max-height: 68vh;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: var(--branco);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  padding: 15px;
`;
