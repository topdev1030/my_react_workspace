import { Popconfirm as AntPopconfirm } from "antd";
import cx from "clsx";

// types
import { PopconfirmProps } from "./Popconfirm.types";

// styles
import { useStyles } from "./Popconfirm.styles";

const Popconfirm = ({
  className,
  title,
  description,
  okText,
  cancelText,
  disabled,
  onConfirm,
  onCancel,
  ...props
}: PopconfirmProps) => {
  const styles = useStyles();

  return (
    <AntPopconfirm
      rootClassName={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      title={title}
      description={description}
      okText={okText}
      cancelText={cancelText}
      icon={null}
      disabled={disabled}
      onConfirm={onConfirm}
      onCancel={onCancel}
      {...props}
    />
  );
};

export { Popconfirm };
