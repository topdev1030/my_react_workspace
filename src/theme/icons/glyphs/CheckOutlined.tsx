/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const CheckOutlined: FC<GlyphIcon> = ({
  className,
  color = "currentColor",
  onClick,
}) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || ""]: className,
      })}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={color}
        fillRule="nonzero"
        d="M20.215 5.65a.5.5 0 0 1 .77.63l-.057.07-11.786 12a.5.5 0 0 1-.643.06l-.07-.06-5.357-5.454a.5.5 0 0 1 .645-.76l.068.06 5 5.09z"
      />
    </svg>
  );
};

export default CheckOutlined;
