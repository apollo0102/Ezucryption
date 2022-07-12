// import { showMessage } from "react-native-flash-message";

export const handleFetchError = async (res: {
  status: number;
  clone: () => { (): any; new (): any; json: { (): any; new (): any } };
  json: () => any;
}) => {
  console.log("**************FALSE", res);

  if (res.status >= 400 && res.status <= 600) {
    // console.log("🚀 ~ file: errorHandler.js ~ line 9 ~ res.status", res)
    const response = await res.clone().json();
    console.log(
      "🚀 ~ file: errorHandler.js ~ line 11 ~ response",
      response,
      "********************************"
    );
    let errRes = {
      ...response,
      Message: response.message,
      Status: res.status,
    };
    console.log("🚀 ~ file: errorHandler.js ~ line 15 ~ Message");
    // showMessage({ message: response.message, type: "danger", position: "top" });

    throw errRes;
  }
  return res.json();
};
