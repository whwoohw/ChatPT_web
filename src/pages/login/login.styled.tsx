import styled, { css } from "styled-components";

interface LoginButton {
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
`;

export const LoginWrapper = styled.div`
  display: flex;
  position: abolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const LoginTitle = styled.h2`
  font-size: 32px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5%;
`;

export const LoginButton = styled.button<LoginButton>`
  width: 400px;
  height: 52px;
  border: 0px;
  border-radius: 10px;
  background-color: #ebebeb;
  color: white;
  font-size: 16px;
  margin-top: 2%;

  ${(props) =>
    !props.disabled &&
    css`
      background-color: black;
      cursor: pointer;
    `}
`;

export const SignUpWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8%;
`;

export const SignUpInfo = styled.p`
  font-size: 13px;
  color: black;
`;
