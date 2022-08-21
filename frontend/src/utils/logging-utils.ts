export const log = {
  ordinary(text: string, context: string) {
    console.log(`${new Date().toISOString()} - ${context} : ${text}`);
  },
  info(text: string, context: string) {
    console.log(`${new Date().toISOString()} - ${context} : ${text}`);
  },
  warn(text: string, context: string) {
    console.log(`${new Date().toISOString()} - ${context} : ${text}`);
  },
  error(text: string, context: string) {
    console.log(`${new Date().toISOString()} - ${context} : ${text}`);
  },
};
