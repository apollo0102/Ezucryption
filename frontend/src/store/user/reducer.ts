import {
  POST_USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  PUT_USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  POST_USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_FP_RESPONSE,
  POST_USER_FP,
  ADD_VERIFICATION_TYPE,
  ADD_VERIFICATION_ID,
} from "./types";

export interface IState {
  loading: boolean;
  isLoggedIn: boolean;
  user: any;
  verificationInfo: any;
  token: string;
}

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {},
  verificationInfo: {},
  token: "",
};

export function userReducer(state: IState = initialState, action: any) {
  switch (action.type) {
    case POST_USER_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        token: action.payload.jwtToken,
      };
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
      };
    case PUT_USER_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...action.paylaod,
        },
      };
    case USER_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case POST_USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
        token: action.payload.jwtToken,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };

    case USER_FP_RESPONSE:
      return {
        ...state,
        loading: false,
      };
    case POST_USER_FP:
      return {
        ...state,
        loading: true,
      };
    case ADD_VERIFICATION_TYPE:
      return {
        ...state,
        verificationInfo: {
          ...state.verificationInfo,
          verificationType: action.payload,
        },
      };

    case ADD_VERIFICATION_ID:
      return {
        ...state,
        verificationInfo: {
          ...state.verificationInfo,
          userDocument: action.payload,
        },
      };

    default:
      return state;
  }
}
