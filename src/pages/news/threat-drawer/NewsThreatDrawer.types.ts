// types
import type { DrawerProps } from "@/components";

export enum THREAT_DRAWER_TYPE {
  MALWARE = "malware",
  ACTOR = "actor",
}

export interface NewsThreatDrawerProps {
  type?: THREAT_DRAWER_TYPE;
  resourceId: string;
  open?: boolean;
  onClose?: DrawerProps["onClose"];
}
