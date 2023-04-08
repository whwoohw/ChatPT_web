export interface SignUpRequest {
  email: string;
  password: string;
  repassword: string;
  sex: string;
  height: number;
  weight: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface InputChecker {
  name: string;
  value: string;
}
