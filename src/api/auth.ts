import axios from "axios";
import { LoginRequest, SignUpRequest } from "../types/auth";
import { API_URL } from "../constant";

export const requestLoginAPI = async ({ email, password }: LoginRequest) => {
  const res = await axios.post(
    `/account/login/`,
    {
      email: email,
      password: password,
    },
    { withCredentials: true }
  );

  return res;
};

export const requestRefreshAPI = async () => {
  const res = await axios.post(
    `${API_URL}/account/token/refresh`,

    { withCredentials: true }
  );
  return res;
};

export const requestSignupAPI = async ({
  email,
  password,
  repassword,
  sex,

  age,
}: SignUpRequest) => {
  try {
    const res = await axios.post(
      `/account/signup/`,
      {
        email: email,
        password: password,
        repassword: repassword,
        sex: sex,
        age: age,
      },
      { withCredentials: true }
    );
    return { success: "success sign up" };
  } catch (e: unknown) {
    console.log(e);
  }
};

// export const requestLogoutAPI = async ({
//     refresh
//   }: SignUpRequest) => {
//     try {
//       const res = await axios.post(
//         `/account/logout/`,
//         {
//           refresh: refresh
//         },
//         { withCredentials: true }
//       );
//       return { success: "success sign up" };
//     } catch (e: unknown) {
//       console.log(e);
//     }
//   };
