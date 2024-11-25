import type { PhoneInputProps } from "react-phone-input-2";

export interface InputPhoneProps extends PhoneInputProps {
  className?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (value: string) => void;
}
