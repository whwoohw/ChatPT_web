import { useState } from "react";
import {
  SignUpButton,
  SignUpForm,
  SignUpTitle,
  SignUpWrapper,
  UserInfoWrapper,
  Wrapper,
} from "./signup.styled";
import TextInput from "../../components/text-input";
import { InputChecker, SignUpRequest } from "../../types/auth";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";

const SignUpPage = () => {
  const [formData, setFormData] = useState<SignUpRequest>({
    email: "",
    password: "",
    repassword: "",
    sex: "",
    height: 0,
    weight: 0,
  });

  const { email, password, repassword, sex, height, weight } = formData;

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
    if (name === "height" || name === "weight") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "email" || name === "password") {
      checkFormData({ name, value });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(formData);
  };
  return (
    <Wrapper>
      <SignUpWrapper>
        <Paper sx={{ padding: 5 }} elevation={20}>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpForm>
            <TextInput
              name="email"
              label="이메일 주소"
              placeholder="예) chatpt@gmail.com"
              content={email}
              validated={validatedForm.email}
              handleChangeContent={handleFormData}
            />
            <TextInput
              name="password"
              type="password"
              label="비밀번호"
              placeholder="영문, 숫자, 특수문자 조합 8-16자"
              content={password}
              validated={validatedForm.password}
              handleChangeContent={handleFormData}
            />
            <TextInput
              name="repassword"
              type="password"
              label="비밀번호 확인"
              content={repassword}
              validated={repassword === password || !repassword ? true : false}
              handleChangeContent={handleFormData}
            />
            <UserInfoWrapper>
              <TextField
                defaultValue=""
                name="sex"
                select
                label="성별"
                sx={{ width: "30%" }}
                onChange={handleFormData}
              >
                <MenuItem value="male">남성</MenuItem>
                <MenuItem value="female">여성</MenuItem>
              </TextField>
              <FormControl sx={{ width: "30%" }} variant="outlined">
                <InputLabel htmlFor="height-input">키</InputLabel>
                <OutlinedInput
                  error={formData.height < 0}
                  name="height"
                  id="height-input"
                  endAdornment={
                    <InputAdornment position="end">cm</InputAdornment>
                  }
                  label="키"
                  type="number"
                  onChange={handleFormData}
                />
              </FormControl>
              <FormControl sx={{ width: "30%" }} variant="outlined">
                <InputLabel htmlFor="weight-input">몸무게</InputLabel>
                <OutlinedInput
                  error={formData.weight < 0}
                  name="weight"
                  id="weight-input"
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
                  label="몸무게"
                  type="number"
                  onChange={handleFormData}
                />
              </FormControl>
            </UserInfoWrapper>
          </SignUpForm>
          <SignUpButton
            disabled={
              validatedForm.email &&
              validatedForm.password &&
              email &&
              password &&
              repassword &&
              repassword === password &&
              sex &&
              height > 0 &&
              weight > 0
                ? false
                : true
            }
            onClick={handleClick}
          >
            가입하기
          </SignUpButton>
        </Paper>
      </SignUpWrapper>
    </Wrapper>
  );
};

export default SignUpPage;
