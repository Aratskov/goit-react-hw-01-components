import styled from "styled-components";

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistic = styled.section``;

export const Title = styled.h2`
  text-align: center;
`;

export const StaticList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;

  font-size: 20px;
  list-style: none;
`;

export const StaticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  background-color: ${randomColor};
`;
export const Label = styled.span``;
export const Percentage = styled.span``;
