import { Option } from "@/types";

export type CustomerOption = Option & {
  value: string;
  cust_id: string;
  storage_container_name: string;
};

export type SubsidiaryOption = Option & {
  org_id: string;
};

export type CreateReportFormValues = {
  cust_id: string;
  subsidiary_id: string;
  report_type: string;
  report_name: string;
  url: string;
};
