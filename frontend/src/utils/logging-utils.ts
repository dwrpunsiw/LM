import { success, info, error, warning } from "react-color-log-ts";

export const log = {
  ordinary(text: string, context: string) {
    success(`${new Date().toISOString()} - ${context} : ${text}`);
  },
  info(text: string, context: string) {
    info(`${new Date().toISOString()} - ${context} : ${text}`);
  },
  warn(text: string, context: string) {
    warning(`${new Date().toISOString()} - ${context} : ${text}`);
  },
  error(text: string, context: string) {
    error(`${new Date().toISOString()} - ${context} : ${text}`);
  },
};
