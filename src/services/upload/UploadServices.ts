import axios from "axios";

// config
import config from "@/config";

// types
import {
  CreateUploadPayload,
  CreateUploadResponse,
  GetAllUploadsPayload,
  GetAllUploadsResponse,
  GetCustomerUploadsPayload,
  GetCustomerUploadsResponse,
} from "./UploadServices.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/upload`,
  timeout: config.api.timeout,
  headers: defaultRequestHeaders,
});

const uploadService = {
  createUpload: ({
    token,
    cust_id,
    ...payload
  }: CreateUploadPayload): Promise<CreateUploadResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/", payload, {
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
  getAllUploads: ({
    token,
    offset = 0,
    limit = -1,
    filters,
  }: GetAllUploadsPayload): Promise<GetAllUploadsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/all", filters, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            offset,
            limit,
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
  getCustomerUploads: ({
    token,
    cust_id,
    offset = 0,
    limit = -1,
    sort = "upload_date_time",
    filters,
  }: GetCustomerUploadsPayload): Promise<GetCustomerUploadsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/customer", filters, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            cust_id,
            offset,
            limit,
            sort,
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

export { uploadService };
