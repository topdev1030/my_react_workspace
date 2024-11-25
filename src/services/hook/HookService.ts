import axios from "axios";

// config
import config from "@/config";

// types
import { GetSASTokenPayload, GetSASTokenResponse } from "./HookService.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/hook`,
  timeout: config.api.timeout,
  headers: defaultRequestHeaders,
});

const hookService = {
  getSASToken: ({
    token,
  }: GetSASTokenPayload): Promise<GetSASTokenResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/sas-token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
};

export { hookService };
