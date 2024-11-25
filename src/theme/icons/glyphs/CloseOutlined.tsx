/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const CloseOutlined: FC<GlyphIcon> = ({
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
      <g fill={color} fillRule="nonzero">
        <path d="M4.79 4.79a.5.5 0 0 1 .637-.059l.07.058L19.21 18.504a.5.5 0 0 1-.638.765l-.07-.058L4.79 5.496a.5.5 0 0 1 0-.707" />
        <path d="M18.504 4.79a.5.5 0 0 1 .765.637l-.058.07L5.496 19.21a.5.5 0 0 1-.765-.638l.058-.07z" />
      </g>
    </svg>
  );
};

export default CloseOutlined;
