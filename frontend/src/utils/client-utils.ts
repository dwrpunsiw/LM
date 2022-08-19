import {
  FAILED_RESPONSE_CODE_4XX,
  SUCCESS_RESPONSE_CODE,
} from "./comparators/status-code";

export const isSuccessful = (statusCode: number) => {
  if (statusCode in SUCCESS_RESPONSE_CODE) return true;

  return false;
};

export const is4XXCompletionResponse = (statusCode: number) => {
  if (statusCode in FAILED_RESPONSE_CODE_4XX) return true;

  return false;
};

export default { isSuccessful, is4XXCompletionResponse };
