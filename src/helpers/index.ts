import axios from "axios";
import FileSaver from "file-saver";

// config
import config from "@/config";

// types
import { USER_ROLE } from "@/types";

export const downloadFile = async (url: string, fileName: string) => {
  try {
    const { data } = await axios.get(url, { responseType: "blob" });
    FileSaver.saveAs(data, fileName);
  } catch (error) {
    console.log(error);
  }
};

export const getStorgeHostUrl = (): string => {
  return `https://${config.azure.storageAccountName}.blob.core.windows.net`;
};

export const getUserRole = (orgId: string): USER_ROLE => {
  if (orgId === config.auth0.adminOrgId) return USER_ROLE.ADMIN;
  return USER_ROLE.CUSTOMER;
};

export const toNumberWithSign = (value: number): string => {
  if (value > 0) return `+${value}`;
  return value.toString();
};
