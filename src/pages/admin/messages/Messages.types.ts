import { Option } from "@/types";

export type CustomerOption = Option & {
  value: string;
  cust_id: string;
  storage_container_name: string;
};

export type SubsidiaryOption = Option & {
  org_id: string;
};

export type CreateMessageFormValues = {
  message_recomendations: any;
  message_title: any;
  message_tags: any;
  message_subject: any;
  message_descriptions: any;
  cust_id: string;
  subsidiary_id: string;
  report_type: string;
  report_name: string;
  url: string;
  select_customer?: string;
};
