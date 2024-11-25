/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const ScreenOutlined: FC<GlyphIcon> = ({
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
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M1.167 3.485a2.32 2.32 0 0 1 2.318-2.318h13.03a2.32 2.32 0 0 1 2.318 2.318v9.697a2.32 2.32 0 0 1-2.318 2.318H13v1.916h1.583a.5.5 0 1 1 0 1H5.417a.5.5 0 0 1 0-1H7V15.5H3.485a2.32 2.32 0 0 1-2.318-2.318zM8 15.5v1.916h4V15.5zM3.485 2.167c-.728 0-1.318.59-1.318 1.318v7.681h15.666V3.485c0-.728-.59-1.318-1.318-1.318zm14.348 10H2.167v1.015c0 .728.59 1.318 1.318 1.318h13.03c.728 0 1.318-.59 1.318-1.318zM8.667 3.332a.5.5 0 0 1 .5-.5h1.666a.5.5 0 1 1 0 1H9.167a.5.5 0 0 1-.5-.5"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ScreenOutlined;
