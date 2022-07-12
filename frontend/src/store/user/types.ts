export const POST_USER_SIGNUP = "POST_USER_SIGNUP";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";

export const POST_USER_LOGIN = "POST_USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const PUT_USER_UPDATE = "PUT_USER_UPDATE";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const POST_USER_FP = "POST_USER_FP";
export const USER_FP_RESPONSE = "USER_FP_RESPONSE";
export const ADD_VERIFICATION_TYPE = "ADD_VERIFICATION_TYPE";
export const ADD_VERIFICATION_ID = "ADD_VERIFICATION_ID";
export const POST_VERIFICATION_DETAILS = "POST_VERIFICATION_DETAILS"

export interface ResetPasswordProps {
  id: string;
  code: string;
  password: string;
}

export interface ForgotPasswordProps {
  email: string;
}

export interface SignupProps {
  email: string;
  password: string;
}

export interface UpdateUserProps {
  firstName: string;
  lastName: string;
  address: string;
  primaryRole: string;
  mobile: string;
  userId: string;
}

export interface LoginWithOtpProps {
  email: string;
}

export interface VerifyOtpProps {
  email: string;
  otp: string;
}

export interface VerificationDetailsProps {
  verificationType : string;
  userDocument : string;
}
