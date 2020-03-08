import axios from "axios";
import history from "../common/history";
import { BASE_URL } from "../common/config";
import requestUtils from "../common/requestUtils";

export const login = userDetails => {
  return async dispatch => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, userDetails);
      document.cookie = `access_token=${[response.data.payload.token]}`;
      history.push(`${process.env.PUBLIC_URL}/listing`);
      dispatch({
        type: "LOGIN",
        payload: { message: response.statusText, failed: false }
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch({
          type: "LOGIN",
          payload: {
            message: error.response.statusText,
            failed: true
          }
        });
      } else {
        console.log("log", error, error.message);
      }
    }
  };
};

export const submitEmail = userDetails => {
  return async dispatch => {
    try {
      console.log("submitEmail", userDetails);
      const response = await axios.post(
        `${BASE_URL}/forgotpassword`,
        userDetails
      );
      console.log("response", response);
      dispatch({
        type: "FORGOT_PASSWORD",
        payload: { message: response.statusText, failed: false }
      });
    } catch (error) {
      if (error.response.status === 400) {
        dispatch({
          type: "FORGOT_PASSWORD",
          payload: {
            message: error.response.data.message,
            failed: true
          }
        });
      }
    }
  };
};

export const submitPassword = userDetails => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${BASE_URL}/resetpassword`,
        userDetails
      );
      dispatch({
        type: "RESET_PASSWORD",
        payload: { message: response.statusText, failed: false }
      });
    } catch (error) {
      dispatch({
        type: "RESET_PASSWORD",
        payload: {
          message: error.response.data.message,
          failed: true
        }
      });
    }
  };
};

export const logout = () => {
  return async () => {
    try {
      await requestUtils.authenticated().get(`${BASE_URL}/logout`);
      document.cookie = "access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      const isDev = process.env.NODE_ENV === "development";
      let baseUrl = null;
      const suf = isDev ? "/" : "/sbui/";
      baseUrl = window.location.origin
        ? window.location.origin + suf
        : window.location.protocol + "/" + window.location.host + suf;
      window.location.href = baseUrl;
    } catch (error) {
      console.log("error:", error);
    }
  };
};
