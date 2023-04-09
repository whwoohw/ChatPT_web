import axios from "axios";

export const getExerciseResponseAPI = async () => {
  try {
    const response = await axios.get("/scheduler/result/exercise/");
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getMealResponseAPI = async () => {
  try {
    const response = await axios.get("/result/meal/edit");
    return response;
  } catch (e) {
    console.log(e);
  }
};
