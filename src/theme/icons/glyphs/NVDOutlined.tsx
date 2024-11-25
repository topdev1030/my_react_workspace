/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const NVDOutlined: FC<GlyphIcon> = ({
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
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <g fill={color} fillRule="nonzero">
        <path d="M11.524 11.684a1.038 1.038 0 0 1-1.768.107l-.063-.104-1.934-3.61a.5.5 0 0 1 .832-.548l.05.075 1.933 3.612c.01.018.033.025.051.015l.009-.007 1.92-3.618a.5.5 0 0 1 .35-.258l.092-.008h3.173c1.583 0 2.465.859 2.465 2.413 0 1.485-.802 2.35-2.27 2.457l-.195.01h-2.513a.5.5 0 0 1-.492-.41l-.008-.09V9.29a.5.5 0 0 1 .992-.089l.008.09v1.928h2c.984-.026 1.428-.417 1.474-1.304l.004-.162c0-.94-.382-1.365-1.298-1.409l-.167-.004h-2.873zM6.918 7.333a.5.5 0 0 1 .492.41l.008.09v3.357a1.038 1.038 0 0 1-1.733.77l-.091-.093-2.961-3.442a.038.038 0 0 0-.061.005l-.005.02v3.277a.5.5 0 0 1-.992.09l-.008-.09V8.449A1.038 1.038 0 0 1 3.3 7.68l.09.093 2.961 3.441a.04.04 0 0 0 .053.004l.01-.013.003-.015V7.833a.5.5 0 0 1 .5-.5" />
      </g>
    </svg>
  );
};

export default NVDOutlined;
