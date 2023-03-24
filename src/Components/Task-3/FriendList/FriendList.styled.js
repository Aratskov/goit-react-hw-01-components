import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  & + & {
    margin-top: 10px;
  }
`;
