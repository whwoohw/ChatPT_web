import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../components/table";
import { exerciseSchedule, mealSchedule } from "../../libs/schedules";
import { Wrapper } from "./result.styled";

const ResultPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/result/");
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getResponse();
  }, []);

  console.log(data);

  return (
    <Wrapper>
      <h1>운동 스케줄</h1>
      <Table result={exerciseSchedule} />
      <div style={{ height: "50px" }}></div>
      <h1>식단</h1>
      <Table result={mealSchedule} />
    </Wrapper>
  );
};

export default ResultPage;
