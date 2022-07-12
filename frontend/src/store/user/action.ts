import { fetchUtil } from "../../utilities/fetchUtil";
import { errorToaster } from "../../utilities/loggerUtils";
import { appendQueryParams } from "../../utilities/urlUtils";
import { AppDispatch, RootState } from "../store";
import {
  USER_SIGNUP_FAILED,
  USER_SIGNUP_SUCCESS,
  POST_USER_SIGNUP,
  SignupProps,
  UpdateUserProps,
  PUT_USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  POST_USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  ForgotPasswordProps,
  POST_USER_FP,
  USER_FP_RESPONSE,
  ResetPasswordProps,
  LoginWithOtpProps,
  VerifyOtpProps,
  ADD_VERIFICATION_ID,
  POST_VERIFICATION_DETAILS,
  VerificationDetailsProps,
} from "./types";

export const signUp = (props: SignupProps) => (dispatch: AppDispatch) => {
  const { email, password } = props;
  dispatch({ type: POST_USER_SIGNUP });

  return fetchUtil({
    url: "auth/register",
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: response });
      return Promise.resolve(response);
    })
    .catch((error) => {
      errorToaster(error.Message);
      dispatch({ type: USER_SIGNUP_FAILED });
      return Promise.reject(error);
    });
};

export const updateUser =
  (props: UpdateUserProps, id: string) =>
  (dispatch: AppDispatch, getState: any) => {
    const token = getState().user.token;
    console.log(token);
    dispatch({ type: PUT_USER_UPDATE });
    return fetchUtil({
      url: `users/${id}/update`,
      method: "PATCH",
      body: JSON.stringify(props),
      token,
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: USER_UPDATE_SUCCESS, paylaod: response });
        return Promise.resolve(response);
      })
      .catch((error) => {
        errorToaster(error.Message);
        dispatch({ type: USER_UPDATE_FAILED });
        return Promise.reject(error);
      });
  };

export const login = (props: SignupProps) => (dispatch: AppDispatch) => {
  const { email, password } = props;
  dispatch({ type: POST_USER_LOGIN });

  return fetchUtil({
    url: "auth/login",
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      console.log("----==>>", response);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
      return Promise.resolve(response);
    })
    .catch((error) => {
      errorToaster(error.Message);
      console.log(error, " IN ERRO");
      dispatch({ type: USER_LOGIN_FAILED });
      return Promise.reject(error);
    });
};

export const loginWithKey = (key: string) => (dispatch: AppDispatch) => {
  dispatch({ type: POST_USER_LOGIN });

  return fetchUtil({
    url: `auth/getTokenByKey/${key}`,
    method: "GET",
  })
    .then((response) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
      return Promise.resolve(response);
    })
    .catch((error) => {
      console.log(error, " IN ERRO");
      dispatch({ type: USER_LOGIN_FAILED });
      return Promise.reject(error);
    });
};

export const forgotPassword =
  (props: ForgotPasswordProps) => (dispatch: AppDispatch) => {
    const { email } = props;
    dispatch({ type: POST_USER_FP });

    return fetchUtil({
      url: "auth/forgot-password",
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        dispatch({ type: USER_FP_RESPONSE, payload: email });
        return Promise.resolve(response);
      })
      .catch((error) => {
        errorToaster(error.Message);
        dispatch({ type: USER_FP_RESPONSE, payload: false });
        return Promise.reject(error);
      });
  };

export const resetPassword =
  (props: ResetPasswordProps) => (dispatch: AppDispatch) => {
    const { id, code } = props;
    dispatch({ type: POST_USER_SIGNUP });
    console.log(
      appendQueryParams("auth/reset-password", { id, code }),
      "asdasd"
    );
    return fetchUtil({
      url: appendQueryParams("auth/reset-password", { id, code }),
      method: "POST",
      body: JSON.stringify({ password: props.password }),
    })
      .then((response) => {
        dispatch({ type: USER_SIGNUP_FAILED });
        return Promise.resolve(response);
      })
      .catch((error) => {
        errorToaster(error.Message);
        dispatch({ type: USER_SIGNUP_FAILED });
        return Promise.reject(error);
      });
  };
export const loginWithOtp =
  (props: LoginWithOtpProps) => (dispatch: AppDispatch) => {
    const { email } = props;
    dispatch({ type: POST_USER_SIGNUP });

    return fetchUtil({
      url: "auth/login-with-otp",
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        dispatch({ type: USER_SIGNUP_FAILED });
        return Promise.resolve(response);
      })
      .catch((error) => {
        errorToaster(error.Message);
        console.log(error, " IN ERRO");
        dispatch({ type: USER_SIGNUP_FAILED });
        return Promise.reject(error);
      });
  };

export const verifyOtp = (props: VerifyOtpProps) => (dispatch: AppDispatch) => {
  const { email, otp } = props;
  dispatch({ type: POST_USER_SIGNUP });

  return fetchUtil({
    url: "auth/verify-otp",
    method: "POST",
    body: JSON.stringify({ email, otp }),
  })
    .then((response) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
      return Promise.resolve(response);
    })
    .catch((error) => {
      errorToaster(error.Message);
      dispatch({ type: USER_LOGIN_FAILED });
      return Promise.reject(error);
    });
};
export const AddVerificationType =
  (type: string | undefined) => (dispatch: AppDispatch) => {};

export const AddVerificationPhotoId =
  (photoId: string) => (dispatch: AppDispatch) => {
    dispatch({ type: ADD_VERIFICATION_ID, payload: photoId });
  };

export const addVerificationDetails =
  (props: VerificationDetailsProps) =>
  (dispatch: AppDispatch, getState: any) => {
    const token = getState().user.token;
    console.log(token);

    return fetchUtil({
      url: "auth/verify-user",
      method: "POST",
      body: JSON.stringify(props),
      token,
    })
      .then((response) => {
        dispatch({ type: POST_VERIFICATION_DETAILS, payload: response });
        return Promise.resolve(response);
      })
      .catch((error) => {
        dispatch({ type: POST_VERIFICATION_DETAILS, payload: error });
        return Promise.reject(error);
      });
  };

export const loginGoogle = (props: any) => (dispatch: AppDispatch) => {
  dispatch({ type: POST_USER_LOGIN });

  return fetchUtil({
    url: "auth/google/login",
    method: "POST",
    body: JSON.stringify(props),
  })
    .then((response) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
      return Promise.resolve(response);
    })
    .catch((error) => {
      errorToaster(error.Message);
      console.log(error, " IN ERRO");
      dispatch({ type: USER_LOGIN_FAILED });
      return Promise.reject(error);
    });
};

export const loginFacebook = (props: any) => (dispatch: AppDispatch) => {
  dispatch({ type: POST_USER_LOGIN });

  return fetchUtil({
    url: "auth/facebook/login",
    method: "POST",
    body: JSON.stringify(props),
  })
    .then((response) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
      return Promise.resolve(response);
    })
    .catch((error) => {
      errorToaster(error.Message);
      console.log(error, " IN ERRO");
      dispatch({ type: USER_LOGIN_FAILED });
      return Promise.reject(error);
    });
};
