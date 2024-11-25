import PhoneInput from "react-phone-input-2";
import cx from "clsx";
import "react-phone-input-2/lib/style.css";

// types
import { InputPhoneProps } from "./InputPhone.types";

// styles
import { useStyles } from "./InputPhone.styles";

const InputPhone = ({
  className,
  value,
  placeholder = "",
  onChange,
  ...props
}: InputPhoneProps) => {
  const styles = useStyles();

  return (
    <PhoneInput
      containerClass={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      inputClass={styles.inputClass}
      buttonClass={styles.buttonClass}
      dropdownClass={styles.dropdownClass}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export { InputPhone };
