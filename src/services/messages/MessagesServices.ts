import axios from "axios";

// config
import config from "@/config";

// types
import {
  GetAllMessagesPayload,
  GetAllMessagesResponse,
  DeleteMessagePayload,
  DeleteMessageResponse,
  CreateMessageResponse,
  CreateMessagePayload,
} from "./MessagesServices.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/upload`,
  timeout: config.api.timeout,
  headers: defaultRequestHeaders,
});

const messagesService = {
  sendMessage: ({
    token,
    ...payload
  }: CreateMessagePayload): Promise<CreateMessageResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/addAlert", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            v: 3,
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
  getAllMessages: ({
    token,
    offset = 0,
    limit = -1,
    filters,
  }: GetAllMessagesPayload): Promise<GetAllMessagesResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post("/getAdminMessages", filters, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            offset,
            limit,
            v: 2,
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
  deleteMessage: ({
    token,
    message_id,
  }: DeleteMessagePayload): Promise<DeleteMessageResponse> => {
    return new Promise((resolve, reject) => {
      request
        .delete(`/messages/${message_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            v: 3,
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
  resendMessage: ({
    token,
    message_id,
  }: DeleteMessagePayload): Promise<DeleteMessageResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get(`/messages/${message_id}/resend`, {
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

export { messagesService };
