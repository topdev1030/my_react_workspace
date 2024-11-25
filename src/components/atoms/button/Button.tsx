import { Button as AntButton } from "antd";
import cx from "clsx";

// types
import { ButtonProps } from "./Button.types";

// styles
import { useStyles } from "./Button.styles";

const Button = ({ className, children, type, ...props }: ButtonProps) => {
  const styles = useStyles();

  return (
    <AntButton
      {...props}
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      type={type}
    >
      {children}
    </AntButton>
  );
};

export { Button };
