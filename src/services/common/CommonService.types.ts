// types
import { Customer, Subsidiary } from "@/types";

type ReportType = {
  report_type_id: string;
  report_type: string;
  active?: boolean;
};

export type GetCustomersResponse = Customer[];

export type GetSubsidiariesPayload = {
  token: string;
  cust_id?: string;
};

export type GetSubsidiariesResponse = Subsidiary[];

export type GetReportTypesResponse = ReportType[];

export type GetOrgInfoByUserIDPayload = {
  token: string;
  user_id: string;
};

export type GetOrgInfoByUserIDResponse = {
  cust_id: string;
  org_name: string;
  dbconnstr: string;
  storage_container_name: string;
};
