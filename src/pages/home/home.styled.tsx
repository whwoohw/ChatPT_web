import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: abolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const LogoFont = styled.p`
  margin: 4%;
  font-size: 150px;
  font-wieght: 1000;
  font-family: PermanentMarkerRegular;
`;

export const ButtonWrapper = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  justify-content: center;
  align-items: center;
`;

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
`;

export const TodoList = styled.p`
  margin: 0;
  font-family: BMJUA;
  font-size: 30px;
`;
