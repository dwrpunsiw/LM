import {
  FAILED_RESPONSE_CODE_4XX,
  SUCCESS_RESPONSE_CODE,
} from "./comparators/status-code";

export const isSuccessful = (statusCode: number) => {
  const success = SUCCESS_RESPONSE_CODE.find((code) => {
    return code === statusCode;
  });
  if (success) {
    return true;
  }

  return false;
};

export const is4XXCompletionResponse = (statusCode: number) => {
  if (statusCode in FAILED_RESPONSE_CODE_4XX) return true;

  return false;
};

const clientUtils = {
  isSuccessful,
  is4XXCompletionResponse,
};

export default clientUtils;
