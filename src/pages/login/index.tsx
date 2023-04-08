import {
  LoginButton,
  LoginForm,
  LoginTitle,
  LoginWrapper,
  SignUpInfo,
  SignUpWrapper,
  Wrapper,
} from "./login.styled";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { InputChecker } from "../../types/auth";
import { StyledLink } from "../../utils/StyledComponents";
import TextInput from "../../components/text-input";
import { Paper } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [validatedForm, setValidatedForm] = useState({
    email: true,
    password: true,
  });

  const checkFormData = (props: InputChecker) => {
    const { name, value } = props;
    let expression;
    if (name === "email") {
      expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    } else {
      expression =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/i;
    }
    const result: boolean = expression.test(value);
    setValidatedForm({ ...validatedForm, [name]: result });
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    checkFormData({ name, value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    console.log("success");
    navigate("/");
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <Paper sx={{ padding: 5 }} elevation={20}>
          <LoginTitle>로그인</LoginTitle>
          <LoginForm>
            <TextInput
              name="email"
              label="이메일 주소"
              placeholder="예) chatpt@gmail.com"
              content={formData.email}
              validated={validatedForm.email}
              handleChangeContent={handleFormData}
            />
            <TextInput
              name="password"
              type="password"
              label="비밀번호"
              content={formData.password}
              validated={validatedForm.password}
              handleChangeContent={handleFormData}
            />
          </LoginForm>
          <LoginButton
            disabled={
              validatedForm.email &&
              validatedForm.password &&
              formData.email &&
              formData.password
                ? false
                : true
            }
            onClick={handleSubmit}
          >
            로그인
          </LoginButton>
          <SignUpWrapper>
            <StyledLink to="/signup">
              <SignUpInfo>이메일 가입</SignUpInfo>
            </StyledLink>
            <p style={{ color: "rgb(211 211 211)" }}>|</p>
            <StyledLink to="/login/find_password">
              <SignUpInfo>비밀번호 찾기</SignUpInfo>
            </StyledLink>
          </SignUpWrapper>
        </Paper>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginPage;
