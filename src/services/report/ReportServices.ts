import axios from "axios";

// config
import config from "@/config";

// types
import {
  CreateReportPayload,
  CreateReportResponse,
  GetCustomerReportsPayload,
  GetCustomerReportsResponse,
  GetAllReportsPayload,
  GetAllReportsResponse,
  DeleteReportPayload,
  DeleteReportResponse,
  sendNotificationPayload,
  sendNotificationsResponse,
} from "./ReportServices.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/report`,
  timeout: config.api.timeout,
  headers: defaultRequestHeaders,
});

const reportService = {
  createReport: ({
    token,
    ...payload
  }: CreateReportPayload): Promise<CreateReportResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/", payload, {
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
  getReportByID: ({ reportId }) => {
    return new Promise((resolve, reject) => {
      request
        .get(`/${reportId}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getAllReports: ({
    token,
    offset = 0,
    limit = -1,
    filters,
  }: GetAllReportsPayload): Promise<GetAllReportsResponse> => {
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
  getCustomerReports: ({
    token,
    cust_id,
    offset = 0,
    limit = -1,
    sort = "upload_date_time",
    filters,
  }: GetCustomerReportsPayload): Promise<GetCustomerReportsResponse> => {
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
  sendNotificationToUsers: ({
    token,
  }: sendNotificationPayload): Promise<sendNotificationsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/senNotification", {
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
  updateReport: ({ payload, reportId }) => {
    return new Promise((resolve, reject) => {
      request
        .put(`/${reportId}`, payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  deleteReport: ({
    token,
    cust_id,
    report_id,
  }: DeleteReportPayload): Promise<DeleteReportResponse> => {
    return new Promise((resolve, reject) => {
      request
        .delete(`/${report_id}`, {
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
};

export { reportService };
