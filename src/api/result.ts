import axios from "axios";

export const getExerciseResponseAPI = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/result/exercise/edit"
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getMealResponseAPI = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/result/meal/edit");
    return response;
  } catch (e) {
    console.log(e);
  }
};
