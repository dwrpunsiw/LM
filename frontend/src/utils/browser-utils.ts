import { CONST_ENV_DEV } from "./comparators/status-code";
import browserDetect from "browser-detect";
import { log } from "./logging-utils";
import { IHostLocation } from "../client/models/response/browser-information";

const browser = browserDetect();

export const browserInformation = {
  name: browser?.name,
  version: browser?.version,
  versionNumber: browser?.versionNumber,
  os: browser?.os,
};

export const hostAndBrowserInformation = (hostLocation: IHostLocation) => {
  const {
    country_code,
    country_name,
    city,
    latitude,
    longitude,
    state,
    IPv4,
    postal,
  } = hostLocation;

  const clientInformation: IHostLocation = {
    name: browserInformation.name!,
    version: browserInformation.version!,
    versionNumber: browserInformation.versionNumber!.toString(),
    os: browserInformation.os!,
    IPv4,
    country_code,
    country_name,
    city,
    latitude,
    longitude,
    state,
    postal,
  };

  if (process.env.REACT_APP_ENV === CONST_ENV_DEV) {
    log.info(
      `
    Application accessed from HOST: ${IPv4} - COUNTRY: ${country_name} - STATE: ${state} - CITY: ${city} - LAT: ${latitude} - LNG: ${longitude}\n
    Browser Metadata: NAME: ${browserInformation.name} - VERSION: ${browserInformation.version} - OS: ${browserInformation.os} - VERSIONNUMBER: ${browserInformation.versionNumber}
    `,
      "logHostAndBrowserInformation"
    );
  } else {
    log.info(
      `
    Application accessed from HOST: ${IPv4} - COUNTRY: ${country_name} - STATE: ${state} - CITY: ${city}\n
    Browser Metadata: NAME: ${browserInformation.name} - VERSION: ${browserInformation.version} - OS: ${browserInformation.os} - VERSIONNUMBER: ${browserInformation.versionNumber}

    `,
      "logHostAndBrowserInformation"
    );
  }
  return clientInformation;
};
