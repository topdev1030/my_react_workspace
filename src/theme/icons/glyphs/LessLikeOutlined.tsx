/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const LessLikeOutlined: FC<GlyphIcon> = ({
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
        <path d="M11.156 2.945a.5.5 0 0 1 .491.41l.009.09v16.904a.5.5 0 0 1-.992.09l-.008-.09V3.445a.5.5 0 0 1 .5-.5" />
        <path d="M3.954 13.245a.5.5 0 0 1 .638-.062l.07.057 6.478 6.395 6.48-6.395a.5.5 0 0 1 .638-.053l.069.058a.5.5 0 0 1 .053.638l-.058.07-6.83 6.74a.5.5 0 0 1-.634.057l-.069-.057-6.83-6.74a.5.5 0 0 1-.005-.708M20.143 6.357a.5.5 0 0 1 .09.992l-.09.008H15a.5.5 0 0 1-.09-.992l.09-.008z" />
      </g>
    </svg>
  );
};

export default LessLikeOutlined;
