import axios from "axios";

export const submitImageAPI = async (formdata: FormData) => {
  try {
    const response = await axios.post("/image/", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { success: "success send image" };
  } catch (e: unknown) {
    console.log(e);
  }
};
