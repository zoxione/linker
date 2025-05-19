import { HTTPError } from "ky";
import { toast } from "sonner";

import { SimpleError } from "../errors/simple-error";
import { HTTPErrorData } from "../types/http-error-data";

const displayError = async (error: unknown, message?: string) => {
  console.error(error); // TODO
  let toastMessage = "";
  if (error instanceof HTTPError) {
    const data: HTTPErrorData = await error.response.json();
    toastMessage = data.message;
  } else if (error instanceof SimpleError) {
    toastMessage = error.message;
  } else if (message) {
    toastMessage = message;
  } else {
    toastMessage = "Произошла непредвиденная ошибка";
  }
  toast.error(toastMessage);
};

export { displayError };
