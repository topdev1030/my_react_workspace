import { Upload as AntUpload } from "antd";
import cx from "clsx";

// types
import { UploadProps } from "./Upload.types";

// styles
import { useStyles } from "./Upload.styles";

const Upload = ({ className, ...props }: UploadProps) => {
  const styles = useStyles();

  return (
    <AntUpload
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      {...props}
    />
  );
};

const CompoundElements = Object.assign(Upload, {
  Dragger: AntUpload.Dragger,
});

export { CompoundElements as Upload };
