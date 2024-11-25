/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const CopyOutlined: FC<GlyphIcon> = ({
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
        <path d="M10.857 2.786c.706 0 1.285.538 1.351 1.226l.006.13v3.43a.5.5 0 0 1-.992.09l-.008-.09v-3.43a.36.36 0 0 0-.285-.349l-.072-.007H4a.36.36 0 0 0-.35.285l-.007.072V11c0 .173.122.317.285.35l.072.007h4.286a.5.5 0 0 1 .09.992l-.09.008H4a1.357 1.357 0 0 1-1.35-1.226L2.642 11V4.143c0-.706.538-1.285 1.226-1.351L4 2.786z" />
        <path d="M16 7.071H9.143c-.75 0-1.357.608-1.357 1.358v6.857c0 .75.607 1.357 1.357 1.357H16c.75 0 1.357-.608 1.357-1.357V8.429c0-.75-.608-1.358-1.357-1.358m-6.857 1H16c.197 0 .357.16.357.358v6.857c0 .197-.16.357-.357.357H9.143a.357.357 0 0 1-.357-.357V8.429c0-.198.16-.358.357-.358" />
      </g>
    </svg>
  );
};

export default CopyOutlined;
