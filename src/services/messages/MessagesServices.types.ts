// types
import { Message } from "@/types";

export type AllMessagesFilters = {
  dbconnstrs?: string[];
  subsidiaries?: string[];
  report_name?: string;
  report_types?: string[];
  upload_date_range?: string[];
  uploaded_by?: string;
};

export type CustomerMessagesFilters = {
  subsidiaries?: string[];
  report_name?: string;
  report_types?: string[];
  upload_date_range?: string[];
};

export type CreateMessagePayload = Omit<Message, "report_id" | "is_active"> & {
  token: string;
};

export type CreateMessageResponse = Message;

export type GetAllMessagesPayload = {
  token: string;
  offset?: number;
  limit?: number;
  filters: AllMessagesFilters;
};

export type GetAllMessagesResponse = {
  alerts: Message[];
  metadata: {
    total: number;
  };
};

export type DeleteMessagePayload = {
  token: string;
  message_id: string;
};

export type DeleteMessageResponse = Message;
