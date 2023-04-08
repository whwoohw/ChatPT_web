import styled, { css } from "styled-components";

interface SubmitInfoButton {
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
`;

export const InfoListWrapper = styled.div`
  display: flex;
  position: abolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const InfoTitle = styled.h2`
  font-size: 32px;
`;

export const SubmitInfoForm = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  row-gap: 43px;
`;

export const SubmitInfoButton = styled.button<SubmitInfoButton>`
  width: 450px;
  height: 52px;
  border: 0px;
  border-radius: 10px;
  background-color: #ebebeb;
  color: white;
  font-size: 16px;
  margin-top: 40px;

  ${(props) =>
    !props.disabled &&
    css`
      background-color: black;
      cursor: pointer;
    `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const InfoType = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;
