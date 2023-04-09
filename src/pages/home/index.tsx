import { Button, Checkbox, Fab, FormControlLabel } from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import TocIcon from "@mui/icons-material/Toc";
import {
  ButtonWrapper,
  LogoFont,
  TodoList,
  TodoListWrapper,
  Wrapper,
} from "./home.styled";
import { StyledLink } from "../../utils/StyledComponents";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.auth);

  const [imageUploaded, setImageUploaded] = useState(true);
  const [infoUploaded, setInfoUploaded] = useState(true);

  const handleCreateResult = async () => {
    try {
      const response = await axios.post(
        "/scheduler/result/create/",
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response) {
        navigate("/result");
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <LogoFont>Chat-PT</LogoFont>

      {!accessToken ? (
        <ButtonWrapper>
          <StyledLink to="/signup">
            <Fab variant="extended" sx={{ width: "300px", height: "60px" }}>
              <TodoList style={{ fontSize: "20px" }}>
                회원가입하러 가기
              </TodoList>
            </Fab>
          </StyledLink>
          <StyledLink to="/login">
            <Fab variant="extended" sx={{ width: "300px", height: "60px" }}>
              <TodoList style={{ fontSize: "20px" }}>로그인하러 가기</TodoList>
            </Fab>
          </StyledLink>
        </ButtonWrapper>
      ) : (
        <>
          <TodoListWrapper>
            <Button
              onClick={infoUploaded ? undefined : () => navigate("/imageinput")}
            >
              <FormControlLabel
                onClick={
                  imageUploaded ? undefined : () => navigate("/imageinput")
                }
                checked={imageUploaded}
                disabled={imageUploaded}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                control={<Checkbox />}
                label={
                  <TodoList
                    style={
                      imageUploaded
                        ? { textDecoration: "line-through" }
                        : { color: "black" }
                    }
                  >
                    인바디 이미지 등록하기
                  </TodoList>
                }
              />
            </Button>
            <Button
              onClick={infoUploaded ? undefined : () => navigate("/infoinput")}
              sx={{ margin: 0 }}
            >
              <FormControlLabel
                checked={infoUploaded}
                disabled={infoUploaded}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                control={<Checkbox />}
                label={
                  <TodoList
                    style={
                      infoUploaded
                        ? { textDecoration: "line-through" }
                        : { color: "black" }
                    }
                  >
                    내 정보 등록하기
                  </TodoList>
                }
              />
            </Button>
          </TodoListWrapper>
          <Fab
            color="primary"
            sx={{ width: "300px", mt: 5 }}
            variant="extended"
            onClick={() => handleCreateResult()}
            disabled={!imageUploaded || !infoUploaded}
          >
            <AddchartIcon sx={{ mr: 2 }} />
            <TodoList style={{ fontSize: "20px" }}>분석하기</TodoList>
          </Fab>
          <Fab
            disabled={!imageUploaded || !infoUploaded}
            sx={{ width: "300px", mt: 7 }}
            variant="extended"
          >
            <RotateLeftIcon sx={{ mr: 2 }} />
            <TodoList style={{ fontSize: "20px" }}>다시 등록하기</TodoList>
          </Fab>
          <Fab
            disabled={!imageUploaded || !infoUploaded}
            sx={{ width: "300px", mt: 3 }}
            variant="extended"
          >
            <TocIcon sx={{ mr: 2 }} />
            <TodoList style={{ fontSize: "20px" }}>기존결과 모아보기</TodoList>
          </Fab>
        </>
      )}
    </Wrapper>
  );
};

export default Homepage;
