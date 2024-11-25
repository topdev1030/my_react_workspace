import { PopconfirmProps as AntPopconfirmProps } from "antd";
import { RenderFunction } from "antd/es/_util/getRenderPropValue";

export interface PopconfirmProps extends AntPopconfirmProps {
  className?: string;
  title: React.ReactNode | RenderFunction;
  description?: React.ReactNode | RenderFunction;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  disabled?: boolean;
  onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
}
