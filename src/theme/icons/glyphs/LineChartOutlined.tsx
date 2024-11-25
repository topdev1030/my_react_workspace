/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const LineChartOutlined: FC<GlyphIcon> = ({
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
        <path d="M17.02 6.106a.5.5 0 0 1 .816.572l-.052.074-6.33 7.483a.5.5 0 0 1-.662.092l-.073-.06-3.933-3.918-3.932 3.933a.5.5 0 0 1-.638.058l-.07-.058a.5.5 0 0 1-.057-.638l.057-.069 4.286-4.286a.5.5 0 0 1 .637-.058l.07.058 3.9 3.886 5.982-7.07Z" />
        <path d="M17.403 5.929a.5.5 0 0 1 .492.41l.008.09v3.214a.5.5 0 0 1-.992.09l-.008-.09-.001-2.714h-2.616a.5.5 0 0 1-.492-.41l-.008-.09a.5.5 0 0 1 .41-.492l.09-.008h3.117Z" />
      </g>
    </svg>
  );
};

export default LineChartOutlined;
