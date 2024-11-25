import { Input as AntInput } from "antd";
import cx from "clsx";

// types
import { InputProps } from "./Input.types";

// styles
import { useStyles } from "./Input.styles";
import { TextAreaProps } from "antd/es/input";

const Input = ({ className, variant = "text", ...props }: InputProps) => {
  const styles = useStyles();

  const classes = cx({
    [styles.root]: true,
    [className || ""]: className,
  });

  if (variant === "password") {
    return <AntInput.Password {...props} className={classes} />;
  }
  if (variant === "textarea") {
    return (
      <AntInput.TextArea {...(props as TextAreaProps)} className={classes} />
    );
  }

  return <AntInput {...props} type={variant} className={classes} />;
};

const CompoundElements = Object.assign(Input, {
  TextArea: AntInput.TextArea,
  Search: AntInput.Search,
  Group: AntInput.Group,
});

export { CompoundElements as Input };
