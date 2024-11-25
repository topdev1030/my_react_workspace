// types
import { Report } from "@/types";

export type AllReportsFilters = {
  dbconnstrs?: string[];
  subsidiaries?: string[];
  report_name?: string;
  report_types?: string[];
  upload_date_range?: string[];
  uploaded_by?: string;
};

export type CustomerReportsFilters = {
  subsidiaries?: string[];
  report_name?: string;
  report_types?: string[];
  upload_date_range?: string[];
};

export type CreateReportPayload = Omit<Report, "report_id" | "is_active"> & {
  token: string;
};

export type CreateReportResponse = Report;

export type GetCustomerReportsPayload = {
  token: string;
  cust_id: string;
  offset?: number;
  limit?: number;
  sort?: string;
  filters: CustomerReportsFilters;
};
export type sendNotificationPayload = {
  token: string;
};
export type sendNotificationsResponse = {
  response: string;
  metadata: {
    message: string;
  };
};
export type GetCustomerReportsResponse = {
  reports: Report[];
  metadata: {
    total: number;
  };
};

export type GetAllReportsPayload = {
  token: string;
  offset?: number;
  limit?: number;
  filters: AllReportsFilters;
};

export type GetAllReportsResponse = {
  reports: Report[];
  metadata: {
    total: number;
  };
};

export type DeleteReportPayload = {
  token: string;
  cust_id: string;
  report_id: string;
};

export type DeleteReportResponse = Report;
