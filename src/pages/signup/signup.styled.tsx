import styled, { css } from "styled-components";

interface SignUpButton {
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  position: abolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const SignUpTitle = styled.h2`
  font-size: 32px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5%;
`;

export const SignUpButton = styled.button<SignUpButton>`
  width: 400px;
  height: 52px;
  border: 0px;
  border-radius: 10px;
  background-color: #ebebeb;
  color: white;
  font-size: 16px;
  margin-top: 10%;

  ${(props) =>
    !props.disabled &&
    css`
      background-color: black;
      cursor: pointer;
    `}
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: start;
  column-gap: 10%;
  align-items: center;
  margin-top: 4%;
`;
