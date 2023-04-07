import { useEffect, useState } from "react";
import { getExerciseResponseAPI, getMealResponseAPI } from "../../api/result";
import Table from "../../components/table";
import { ScheduleData } from "../../types/result";

import { Wrapper } from "./result.styled";

const ResultPage = () => {
  const [exerciseData, setExerciseData] = useState<ScheduleData | null>(null);
  const [mealData, setMealData] = useState<ScheduleData | null>(null);

  useEffect(() => {
    const getResponse = async () => {
      const exerciseResponse = await getExerciseResponseAPI();
      const mealResponse = await getMealResponseAPI();

      setExerciseData(exerciseResponse?.data);
      setMealData(mealResponse?.data);
    };
    getResponse();
  }, []);

  return (
    <Wrapper>
      <h1>운동 스케줄</h1>
      {exerciseData ? (
        <>
          <Table result={exerciseData.schedule} />
          <h3>{exerciseData.reason}</h3>
        </>
      ) : null}
      <div style={{ height: "50px" }}></div>
      <h1>식단</h1>
      {mealData ? (
        <>
          <Table result={mealData.schedule} />
          <h3>{mealData.reason}</h3>
        </>
      ) : null}
    </Wrapper>
  );
};

export default ResultPage;
