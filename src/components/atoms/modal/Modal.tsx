import { Modal as AntModal } from "antd";
import cx from "clsx";

// types
import { ModalProps } from "./Modal.types";

// styles
import { useStyles } from "./Modal.styles";

const Modal = ({
  className,
  open,
  title,
  onOk,
  onCancel,
  ...props
}: ModalProps) => {
  const styles = useStyles();

  return (
    <AntModal
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      {...props}
    />
  );
};

export { Modal };
