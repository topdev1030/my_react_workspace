/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const TargetOutlined: FC<GlyphIcon> = ({
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
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 6.334a3.667 3.667 0 1 0 0 7.333 3.667 3.667 0 0 0 0-7.333M5.333 10a4.667 4.667 0 1 1 9.334 0 4.667 4.667 0 0 1-9.334 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 1.167a.5.5 0 0 1 .5.5V9.5h7.833a.5.5 0 1 1 0 1H10.5v7.833a.5.5 0 0 1-1 0V10.5H1.667a.5.5 0 1 1 0-1H9.5V1.667a.5.5 0 0 1 .5-.5"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default TargetOutlined;
