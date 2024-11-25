import axios from "axios";
import config from "@/config";
import { GetMgmtTokenResponse, GetOrganizationalResponse } from "./Mgmt.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: config.auth0.baseUrl,
  timeout: config.api.timeout,
  // headers: defaultRequestHeaders,
});

const mgmtServices = {
  // Function to get the management token
  getMgmtToken: (): Promise<GetMgmtTokenResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/oauth/token", {
          grant_type: config.auth0.grantType,
          client_id: config.auth0.clientIdForApi,
          client_secret: config.auth0.clientSecretForApi,
          audience: config.auth0.audienceAuth0,
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },

  // Function to get organizational data
  getOrganizational: (token): Promise<GetOrganizationalResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/api/v2/organizations", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
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

export { mgmtServices };
