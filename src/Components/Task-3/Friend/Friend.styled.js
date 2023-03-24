import styled from "styled-components";

export const Online = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  ${({ children }) => {
    return `background-color: ${children ? "green" : "red"}`;
  }}
`;

export const Image = styled.img`
  display: block;
  width: 50px;
`;

export const Name = styled.span``;
