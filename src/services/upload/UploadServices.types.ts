// types
import { Upload } from "@/types";

export type AllUploadsFilters = {
  dbconnstrs?: string[];
  upload_date_range?: string[];
  uploaded_by?: string;
};

export type CustomerUploadsFilters = {
  upload_date_range?: string[];
  uploaded_by?: string;
};

export type CreateUploadPayload = Omit<Upload, "upload_id" | "is_active"> & {
  cust_id: string;
  token: string;
};

export type CreateUploadResponse = Upload;

export type GetAllUploadsPayload = {
  token: string;
  offset?: number;
  limit?: number;
  filters: AllUploadsFilters;
};

export type GetAllUploadsResponse = {
  uploads: Upload[];
  metadata: {
    total: number;
  };
};

export type GetCustomerUploadsPayload = {
  token: string;
  cust_id: string;
  offset?: number;
  limit?: number;
  sort?: string;
  filters: CustomerUploadsFilters;
};

export type GetCustomerUploadsResponse = {
  uploads: Upload[];
  metadata: {
    total: number;
  };
};
