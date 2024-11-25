import axios from "axios";

// config
import config from "@/config";

// types
import {
  GetCustomersResponse,
  GetSubsidiariesPayload,
  GetSubsidiariesResponse,
  GetReportTypesResponse,
  GetOrgInfoByUserIDPayload,
  GetOrgInfoByUserIDResponse,
} from "./CommonService.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/common`,
  timeout: config.api.timeout,
  headers: defaultRequestHeaders,
});

const commonService = {
  getCustomers: (token: string): Promise<GetCustomersResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/customers", {
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
  getSubsidiaries: ({
    token,
    cust_id,
  }: GetSubsidiariesPayload): Promise<GetSubsidiariesResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/subsidiaries", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            cust_id,
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
  getReportTypes: (token: string): Promise<GetReportTypesResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/report-types", {
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
  getOrgInfoByUserID: ({
    token,
    user_id,
  }: GetOrgInfoByUserIDPayload): Promise<GetOrgInfoByUserIDResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/org", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            user_id,
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

export { commonService };
