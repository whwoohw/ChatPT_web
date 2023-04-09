import { useEffect, useState } from "react";
import { getExerciseResponseAPI, getMealResponseAPI } from "../../api/result";
import Table from "../../components/table";

import { Wrapper } from "./result.styled";
import { ExerciseScheduleData, MealScheduleData } from "../../types/result";
import { useAppSelector } from "../../store/hooks";
import axios from "axios";
import { Box, Divider, Fab, Modal, TextField } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

const ResultPage = () => {
  const { accessToken } = useAppSelector((state) => state.auth);

  const [exerciseData, setExerciseData] = useState<ExerciseScheduleData | null>(
    null
  );
  const [mealData, setMealData] = useState<MealScheduleData | null>(null);

  const [openExerciseModal, setOpenExerciseModal] = useState<boolean>(false);
  const [exerciseModifyText, setExerciseModifyText] = useState<string>("");

  const [openMealModal, setOpenMealModal] = useState<boolean>(false);
  const [mealModifyText, setMealModifyText] = useState<string>("");

  const handleExerciseModalOpen = () => setOpenExerciseModal(true);
  const handleExerciseModalClose = () => setOpenExerciseModal(false);

  const handleMealModalOpen = () => setOpenMealModal(true);
  const handleMealModalClose = () => setOpenMealModal(false);

  useEffect(() => {
    const getExerciseResponse = async () => {
      try {
        const response = await axios.get("/scheduler/result/exercise/", {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${accessToken}`,
          },
        });
        setExerciseData(response.data);
      } catch (e: unknown) {
        console.log(e);
      }
    };
    const getMealResponse = async () => {
      try {
        const response = await axios.get("/scheduler/result/meal/", {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${accessToken}`,
          },
        });
        setMealData(response.data);
      } catch (e: unknown) {
        console.log(e);
      }
    };
    getExerciseResponse();
    getMealResponse();
  }, [accessToken]);

  return (
    <Wrapper>
      <h1
        style={{ fontFamily: "BMJUA", marginLeft: "20px", marginTop: "40px" }}
      >
        운동 스케줄
      </h1>
      {exerciseData ? (
        <>
          <Table exercise={exerciseData.workout_plan} />
          <h2
            style={{
              fontFamily: "BMJUA",
              marginLeft: "20px",
              marginTop: "55px",
            }}
          >
            운동루틴 설명
          </h2>
          <p
            style={{
              width: "60%",
              margin: 0,
              marginLeft: "20px",
              fontSize: "20px",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {exerciseData.reason}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "40px",
            }}
          >
            <Fab onClick={handleExerciseModalOpen} variant="extended">
              <RotateLeftIcon sx={{ mr: 1 }} />
              운동루틴 다시 요청하기
            </Fab>
          </div>
        </>
      ) : null}
      <div style={{ height: "25px" }}></div>
      <Divider />
      <div style={{ height: "25px" }}></div>
      <h1
        style={{ fontFamily: "BMJUA", marginLeft: "20px", marginTop: "40px" }}
      >
        식단
      </h1>
      {mealData ? (
        <>
          <Table meal={mealData.meal_plan} />
          <h2
            style={{
              fontFamily: "BMJUA",
              marginLeft: "20px",
              marginTop: "55px",
            }}
          >
            식단 설명
          </h2>
          <p
            style={{
              width: "60%",
              margin: 0,
              marginLeft: "20px",

              fontSize: "20px",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {mealData.reason}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "40px",
              marginBottom: "60px",
            }}
          >
            <Fab onClick={handleMealModalOpen} variant="extended">
              <RotateLeftIcon sx={{ mr: 1 }} />
              식단 다시 요청하기
            </Fab>
          </div>
        </>
      ) : null}
      <Modal open={openExerciseModal} onClose={handleExerciseModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <h2 style={{ marginTop: "5px", marginBottom: "30px" }}>
            운동루틴 수정 시 요청사항
          </h2>
          <TextField
            onChange={(e) => setExerciseModifyText(e.target.value)}
            fullWidth
            multiline
            rows={8}
            placeholder="수정 요청사항을 자세하게 적어주세요!"
          />
        </Box>
      </Modal>
      <Modal open={openMealModal} onClose={handleMealModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ marginTop: "5px", marginBottom: "30px" }}>
              식단 수정 시 요청사항
            </h2>
          </div>
          <TextField
            onChange={(e) => setMealModifyText(e.target.value)}
            fullWidth
            multiline
            rows={8}
            placeholder="수정 요청사항을 자세하게 적어주세요!"
          />
        </Box>
      </Modal>
    </Wrapper>
  );
};

export default ResultPage;
