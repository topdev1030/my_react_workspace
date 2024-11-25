import axios from "axios";

// config
import config from "@/config";

// types
import { ContactUsPayload, ContactUsResponse } from "./PublicService.types";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/public`,
  timeout: config.api.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

const publicService = {
  contactUs: (payload: ContactUsPayload): Promise<ContactUsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/contact", payload)
        .then(({ data }) => {
          resolve(data.msg);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
};

export { publicService };
