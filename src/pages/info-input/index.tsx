import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  InfoListWrapper,
  InfoTitle,
  InfoType,
  InfoWrapper,
  SubmitInfoButton,
  SubmitInfoForm,
  Wrapper,
} from "./info-input.styled";
import { useState } from "react";
import { InfoFormRequest } from "../../types/input";
import axios from "axios";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

const InfoInputPage = () => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<InfoFormRequest>({
    purpose: "",
    body_component: "",
    routine: "",
    time: "",
  });

  const [routineList, setRoutineList] = useState<string[]>([]);

  const { purpose, body_component, routine, time } = formData;

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoutine = (
    e: React.MouseEvent<HTMLElement>,
    newRoutines: string[]
  ) => {
    setRoutineList(newRoutines);
    setFormData({ ...formData, routine: newRoutines.join(",") });
  };

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    try {
      const response = await axios.post(
        "/scheduler/metadata/",
        {
          purpose: purpose,
          body_component: body_component,
          routine: routine,
          time: time,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      if (response) {
        navigate("/");
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <InfoListWrapper>
        <Paper sx={{ pt: 3, pr: 6, pl: 6, pb: 3 }} elevation={20}>
          <InfoTitle>나의 신체 정보 등록하기</InfoTitle>
          <SubmitInfoForm>
            <InfoWrapper>
              <InfoType>헬스를 하시는 목적을 골라주세요.</InfoType>
              <TextField
                defaultValue=""
                name="purpose"
                select
                label="헬스 목적"
                sx={{ width: "60%" }}
                onChange={handleFormData}
              >
                <MenuItem value="diet">다이어트</MenuItem>
                <MenuItem value="increase muscle mass">근육량 증가</MenuItem>
                <MenuItem value="increase stemina">체력 증가</MenuItem>
                <MenuItem value="substitute sports">다른 스포츠 대신</MenuItem>
              </TextField>
            </InfoWrapper>
            <InfoWrapper>
              <InfoType>집중적으로 키우고싶은 골라주세요.</InfoType>
              <TextField
                defaultValue=""
                name="body_component"
                select
                label="집중 운동부위"
                sx={{ width: "50%" }}
                onChange={handleFormData}
              >
                <MenuItem value="chest">가슴</MenuItem>
                <MenuItem value="shoulder">어깨</MenuItem>
                <MenuItem value="abdomen">복부</MenuItem>
                <MenuItem value="back">등</MenuItem>
                <MenuItem value="arms">팔</MenuItem>
                <MenuItem value="legs">다리</MenuItem>
              </TextField>
            </InfoWrapper>
            <InfoWrapper>
              <InfoType>운동 가능한 날짜를 모두 골라주세요.</InfoType>
              <ToggleButtonGroup
                fullWidth
                size="large"
                color="primary"
                value={routineList}
                onChange={handleRoutine}
              >
                <ToggleButton value="monday">월</ToggleButton>
                <ToggleButton value="tuesday">화</ToggleButton>
                <ToggleButton value="wednesday">수</ToggleButton>
                <ToggleButton value="thursday">목</ToggleButton>
                <ToggleButton value="friday">금</ToggleButton>
                <ToggleButton value="saturday">토</ToggleButton>
                <ToggleButton value="sunday">일</ToggleButton>
              </ToggleButtonGroup>
            </InfoWrapper>
            <InfoWrapper>
              <InfoType>가능한 하루 운동 시간(분)을 적어주세요.</InfoType>
              <FormControl sx={{ width: "30%" }} variant="outlined">
                <InputLabel htmlFor="time">운동 시간</InputLabel>
                <OutlinedInput
                  error={Number(time) < 0}
                  name="time"
                  id="time"
                  endAdornment={
                    <InputAdornment position="end">분</InputAdornment>
                  }
                  label="운동 시간"
                  type="number"
                  onChange={handleFormData}
                />
              </FormControl>
            </InfoWrapper>
          </SubmitInfoForm>
          <SubmitInfoButton
            disabled={
              purpose && body_component && routine && time && Number(time) > 0
                ? false
                : true
            }
            onClick={handleClick}
          >
            등록하기
          </SubmitInfoButton>
        </Paper>
      </InfoListWrapper>
    </Wrapper>
  );
};

export default InfoInputPage;
