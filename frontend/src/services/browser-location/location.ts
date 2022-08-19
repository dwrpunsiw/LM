import { BrowserInformationType } from "./../../modules/app/configuration/main";
import axiosGeneral from "../../client/http/axios-general";
import { IHostLocation } from "../../client/models/response/browser-information";
import clientUtils from "../../utils/client-utils";

export const getHostLocation = (
  callback: (data: IHostLocation) => BrowserInformationType
): Promise<BrowserInformationType> => {
  return new Promise<BrowserInformationType>(async (resolve, reject) => {
    const response = await axiosGeneral.get<IHostLocation>(
      process.env.REACT_APP_GEOLOC_BASE_URL!
    );

    if (!clientUtils.isSuccessful(response.status)) {
      reject("Failed to get host location");
    }

    const browserInformation = callback(response.data);

    resolve(browserInformation);
  });
};
