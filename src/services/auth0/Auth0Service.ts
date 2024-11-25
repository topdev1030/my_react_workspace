import axios from "axios";

// config
import config from "@/config";

// types
import { GetUserInfoResponse } from "./Auth0Service.types";

const request = axios.create({
  baseURL: `https://${config.auth0.domain}`,
  timeout: config.api.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

const auth0Service = {
  getUserInfo: (token: string): Promise<GetUserInfoResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/userinfo", {
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

export { auth0Service };
