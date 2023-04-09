export interface SignUpRequest {
  email: string;
  password: string;
  repassword: string;
  sex: string;
  age: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LogoutRequest {
  refresh: string;
}

export interface InputChecker {
  name: string;
  value: string;
}
