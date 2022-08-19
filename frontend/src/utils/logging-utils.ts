import clc from "cli-color";

export const log = {
  ordinary(text: string, context: string) {
    console.log(
      clc.blue(`${new Date().toISOString()} - ${context} : ${text} `)
    );
  },
  info(text: string, context: string) {
    console.log(
      clc.green(`${new Date().toISOString()} - ${context} : ${text} `)
    );
  },
  warn(text: string, context: string) {
    console.log(
      clc.yellow(`${new Date().toISOString()} - ${context} : ${text} `)
    );
  },
  error(text: string, context: string) {
    console.log(clc.red(`${new Date().toISOString()} - ${context} : ${text} `));
  },
};
