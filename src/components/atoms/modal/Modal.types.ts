import { ModalProps as AntModalProps } from "antd";

export interface ModalProps extends AntModalProps {
  className?: string;
  open?: boolean;
  title?: React.ReactNode;
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
