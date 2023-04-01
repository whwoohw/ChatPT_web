import axios from "axios";

export const submitImageAPI = async (formdata: FormData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/image/",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (e: unknown) {
    console.log(e);
  }
};
